import { createUploadthing, type FileRouter } from "uploadthing/next";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { Pinecone } from '@pinecone-database/pinecone';
import {  OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from "@langchain/pinecone";

import { prisma } from "@/db/db";
import { getUserByClerkId } from "@/server/users";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({ "application/pdf": { maxFileSize: "4MB" } })
    .middleware(async () => {
        const user = await getUserByClerkId();
        if (!user) throw new Error("Unauthorized");
        return {userId: user.id};
    })
    .onUploadComplete(async ({ metadata, file }) => {
        console.log("Upload complete for userId:", metadata.userId);
        const existingFile = await prisma.file.findFirst({
            where:{
                key: file.key
            }
        })

        if(existingFile) return ;

        const newFile = await prisma.file.create({
            data: {
                name: file.name,
                url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
                key: file.key,
                userId: metadata.userId
            }
        })
        try {
            const res = await fetch(`https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`);
            const blob = await res.blob();
            const loader = new PDFLoader(blob);

            const docs = await loader.load();
            const pc = new Pinecone({ apiKey: `${process.env.WORKIT_PINECONE_API_KEY}` });
            const pineconeIndex = pc.Index('workit-index');
            const embeddings = new OpenAIEmbeddings();
            await PineconeStore.fromDocuments(docs, embeddings, {
                pineconeIndex,
                namespace: newFile.id,
                maxConcurrency: 5,
            });

        } catch (error) {
            console.log(error);
        }

        console.log("file url", file.url);
        // add to a vector database
        return { uploadedBy: metadata.userId, key: file.name };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;