import { PrismaClient } from "@prisma/client"
import { redirect } from "@sveltejs/kit";

const prisma = new PrismaClient();



export async function POST({request}){
  const formData = await request.formData();
  const createPostAndCategory = await prisma.post.create({
    data: {
      title: formData.get('title'),
      content: formData.get('content'),
      tags: {
        connect: [{id: Number(formData.get('tag'))}],
      },
    },
  })
  throw redirect(302,'/')
}

export async function GET(){
  const getPostsAndCategories = await prisma.post.findMany({
    include:{
      tags:true,
    }
  })
  return new Response(JSON.stringify(getPostsAndCategories))
}