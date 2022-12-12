<script>
  import { each } from "svelte/internal";


    export let data;
    const convertDataToHtml= (blocks) =>  {
      let convertedHtml = [];
      blocks.map(block => {
        
        switch (block.type) {
          case "header":
            convertedHtml.push(`<h${block.data.level}>${block.data.text}</h${block.data.level}>`);
            break;
          case "embded":
          convertedHtml.push(`<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`);
            break;
          case "paragraph":
          convertedHtml.push(`<p>${block.data.text}</p>`);
            break;
          case "delimiter":
          convertedHtml.push("<hr />");
            break;
          case "image":
          convertedHtml.push(`<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`);
            break;
          default:
            console.log("Unknown block type", block.type);
            break;
        }
      });
      return convertedHtml;
    }
    const blocks = convertDataToHtml(JSON.parse(data.post.content).blocks);
</script>

<h1>{data.post.title}</h1>
<h2>{data.post.tags[0].name}</h2>
<h3>{data.post.createdAt}</h3>
<p>pepe</p>
{#each blocks as block,i}
    {@html block}
{/each}

<style>
    :global(h2){
        color:red;
    }
    :global(img){
        max-height: 250px;
    }
</style>