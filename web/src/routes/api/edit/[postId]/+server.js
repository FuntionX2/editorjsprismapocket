import { PrismaClient } from "@prisma/client";
import { redirect } from "@sveltejs/kit";

const prisma = new PrismaClient();

export async function POST({params,request}){
    const formData = await request.formData();
    const updatePostAndCategory = await prisma.post.update({
        where:{
            id:parseInt(params.postId),
        },
        data:{
            title: formData.get('title'),
            content: formData.get('content'),
            tags: {
                connect: [{id: Number(formData.get('tag'))}],
            },
        }
    })
    throw redirect(302,`/edit/${params.postId}`)
}