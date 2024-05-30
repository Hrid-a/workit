import { prisma } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE (req: NextRequest, { params }: { params: { id: string } }){

    const {id} = params;

    const file = await prisma.file.findFirst({
        where: {
            id: id
        }
    })

    if(!file) return NextResponse.json({message:'File not found'}, {status: 404});

    await prisma.file.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({message: 'File was deleted successfully'}, {status: 200});
}