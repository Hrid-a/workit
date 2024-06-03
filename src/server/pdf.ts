import 'server-only';
import { getUserByClerkId } from "./users";
import { prisma } from '@/db/db';
import { notFound, redirect } from 'next/navigation';

export const getAllPdfs = async () => {
    const user = await getUserByClerkId();
    const pdfs = prisma.file.findMany({
        where: {
            userId: user?.id,
        },
    });
    return pdfs;
};


export const getPdf = async (id:string) =>{
    const user = await getUserByClerkId();

    if(!user) redirect('/')

    const pdfFile = await prisma.file.findFirst({
        where: {
            id: id,
            userId: user.id,
        }
    })

    if(!pdfFile) notFound();

    return pdfFile;
}