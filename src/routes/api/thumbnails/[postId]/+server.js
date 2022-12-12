import Crypto from 'node:crypto';
import { PrismaClient } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

const prisma = new PrismaClient();
export async function POST({request,locals,params}){
    let id = Crypto.randomUUID();
    id = id.slice(0,15);
    const formData = await request.formData();
    formData.append('id',id);
    const createdRecord = await locals.pb.collection('thumbnails').create(formData);
    const getImage = await locals.pb.collection('thumbnails').getOne(id);
    const imageName = getImage.thumbnail;
    const updateThumbnail= await prisma.post.update({
        where:{
            id:parseInt(params.postId)
        },
        data:{
            thumbnail:`http://127.0.0.1:8090/api/files/thumbnails/${id}/${imageName}`
        }
    })
    throw redirect(302,`/admin/edit/${params.postId}`)
}