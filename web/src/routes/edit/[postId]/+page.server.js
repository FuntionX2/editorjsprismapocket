import { redirect } from "@sveltejs/kit"


export const load = ({locals,fetch,params})=>{
    if(!locals.pb.authStore.isValid){
        throw redirect(303,'/')
    }
    const fetchPost = async(id)=>{
        const res = await fetch(`http://localhost:5173/api/post/${id}`)
        const res2 = await res.json();
        const data = JSON.stringify(JSON.parse(res2.content).blocks)
        return data;
    }
    return{
        post: fetchPost(params.postId),
        slug: params.postId
    }
}