import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({params}){
    
    const getPostbyid = await prisma.post.findUnique(
        {
            where:{
                id:Number(params.postId),
            },
            include:{
                tags:true,
            }
        }
    )
    return new Response(JSON.stringify(getPostbyid));
}