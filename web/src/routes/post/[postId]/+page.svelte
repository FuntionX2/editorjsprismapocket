<script>
    export let data;
    console.log(data.post);
</script>

<h1>{data.post.title}</h1>
<h2>{data.post.tags[0].name}</h2>
<h3>{data.post.createdAt}</h3>