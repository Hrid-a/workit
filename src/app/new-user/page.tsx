import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { prisma } from '@/db/db';
import { redirect } from 'next/navigation';

const newUser = async () => {
    const user = await currentUser();
    if(!user) return;
    const match = await prisma.user.findUnique({
        where:{
            clerkId: user.id as string,
        }
    })

    console.log(match);

    console.log({clerkId: user.id as string,
        email: user.emailAddresses[0].emailAddress,
        name: user.firstName})
    if(!match) {
          await prisma.user.create({
            data: {
              clerkId: user.id,
              email: user?.emailAddresses[0].emailAddress,
              name: user.firstName
            },})
            
        redirect('/dashboard');
    }

  return (
    <div>...loading ....</div>
  )
}

export default newUser