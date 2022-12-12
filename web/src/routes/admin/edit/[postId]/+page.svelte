<script>
	import EditorJS from '@editorjs/editorjs';
	import Header from '@editorjs/header';
	import Image from '@editorjs/image';
	import {page} from '$app/stores';
    export let data;
	const jsonData = JSON.stringify(data.post)
	let content = '';
	const editor = new EditorJS({
		holder:'editorjs',
		tools:{
			header:Header,
			image:{
				class:Image,
				config:{
					endpoints: {
						byFile: 'http://localhost:5173/api/images'
					}
				}
			}
		},
		onReady:()=>{
			console.log('Its ready');
			editor.render({blocks:JSON.parse(data.post)})
		},
		onChange:(api,event)=>{
			saveData();
		}
	})
	
	
	function saveData(){
		editor.save().then((outputData) => {
			content = JSON.stringify(outputData)
		}).catch((error) => {
		console.log('Saving failed: ', error)
		});
		
	}
	console.log(data.slug);
</script>
<form action="/api/edit/{data.slug}" method="post">
	Tittle:
	<input type="text" name="title">
	Tag:
	<input type="text" name="tag">
	<input name="content" type="hidden" hidden value={content}>
	<div id="editorjs"></div>
	<button>Send</button>
</form>
<form action="/api/images" method="POST" enctype="multipart/form-data">
	<input type="file" name="image" id="fileInput">
	<button>Sendimage</button>
</form>
<button on:click={()=>saveData()}>Save post</button>