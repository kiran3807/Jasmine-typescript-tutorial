/// <reference path="../typings/index.d.ts" />
import $=require("jquery");
import { NameElement,PostElement,NameParentElement,PostParentElement } from "./elements";
import { BuildNames,BuildPosts,renderJqueryElements } from "./core";
import { SelectEventEmitter } from "./events";
import { ServiceFactory } from "./services";
import { ServiceType } from "./constants";
import { Elements, renderElements } from "./interfaces"

let nameParent = new NameParentElement();
let postParent = new PostParentElement('Here are the posts : ');
function main(){

	let renderer: renderElements = new renderJqueryElements();
	
	function showNames(names: any[]): void{
		let nameBuilder = new BuildNames(names);
		let nameElements: Elements[] = nameBuilder.build();

		renderer.render(nameElements,nameParent);
	}
	let postService = ServiceFactory.getService(ServiceType.post);
	function onNameChange(nameId: number){
		postService.getPosts(nameId).then((posts: string[])=>{
			let postBuilder = new BuildPosts(posts);
			let postElements: Elements[] = postBuilder.build();

			renderer.render(postElements,postParent);
			
		},(error: any)=>{
			console.log("could not retreive the posts ");
		});
		
	}

	SelectEventEmitter.register(onNameChange);
	$(function(){
		let nameService = ServiceFactory.getService(ServiceType.name);
		nameService.getNames().then(showNames,function(error: any){
			console.log("Could not retreive names");
		});
	});
}
export { main as start };
