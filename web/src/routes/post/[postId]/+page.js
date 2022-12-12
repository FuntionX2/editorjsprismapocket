export const load = ({fetch,params})=>{
    const fetchPost = async(id)=>{
        const res = await fetch(`http://localhost:5173/api/post/${id}`)
        const data = await res.json();
        return data;
    }
    return{
        post: fetchPost(params.postId)
    }
}