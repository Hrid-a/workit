import 'server-only';
import { getUserByClerkId } from "./users";
import { prisma } from '@/db/db';

export const getAllPdfs = async () => {
    const user = await getUserByClerkId();
    const pdfs = prisma.file.findMany({
        where: {
            userId: user?.id,
        },
    });
    return pdfs;
};