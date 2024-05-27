import { prisma } from '@/db/db';
import { auth } from '@clerk/nextjs/server';
import 'server-only';

export const getUserByClerkId = async () => {
    const {userId} = await auth();
    if(!userId) return;
    
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            clerkId: userId
        }
    })

    return user;
}
