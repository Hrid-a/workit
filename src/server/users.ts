import { prisma } from '@/db/db';
import { auth } from '@clerk/nextjs/server';
import 'server-only';

export const getUserByClerkId = async () => {
    const {userId} =  auth();
    if(!userId) return;
    const user = await prisma.user.findUnique({
        where:{
            clerkId: userId
        }
    })
    return user;
}
