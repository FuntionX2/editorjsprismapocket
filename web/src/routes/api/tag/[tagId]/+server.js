import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({params}){
    const getpostsbytag = await prisma.tag.findMany({
        where:{
            id:Number(params.tagId),
        },
        include:{
            posts:{
                select:{
                    title:true,
                }
            }
        },
    })
    return new Response(JSON.stringify(getpostsbytag))
}