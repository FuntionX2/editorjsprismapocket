import Crypto from 'node:crypto';

export async function POST({request,locals}){
    let id = Crypto.randomUUID();
    id = id.slice(0,15);
    const formData = await request.formData();
    formData.append('id',id);
    const createdRecord = await locals.pb.collection('posts').create(formData);
    const getImage = await locals.pb.collection('posts').getOne(id);
    const imageName = getImage.image;
    return new Response(JSON.stringify({success:1,
        file:{
            url:`http://127.0.0.1:8090/api/files/posts/${id}/${imageName}`
        }})
        
    )
}