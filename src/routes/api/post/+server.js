import { PrismaClient } from "@prisma/client"
import { redirect } from "@sveltejs/kit";
import Crypto from 'node:crypto';

const prisma = new PrismaClient();

export async function POST({request,locals}){
  const formData = await request.formData();
  console.log(formData);
  let id = Crypto.randomUUID();
  id = id.slice(0,15);
    formData.append('id',id);
    const createdRecord = await locals.pb.collection('thumbnails').create(formData);
    const getImage = await locals.pb.collection('thumbnails').getOne(id);
    const imageName = getImage.image;
    /* const createPostAndCategory = await prisma.post.create({
    data: {
      title: formData.get('title'),
      content: formData.get('content'),
      tags: {
        connect: [{id: Number(formData.get('tag'))}],
      },
      thumbnail:`http://127.0.0.1:8090/api/files/thumbnails/${id}/${imageName}`
    },
  }) */
  throw redirect(302,'/admin/post')
}

export async function GET(){
  const getPostsAndCategories = await prisma.post.findMany({
    include:{
      tags:true,
    }
  })
  return new Response(JSON.stringify(getPostsAndCategories))
}