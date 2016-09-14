/// <reference path="../typings/index.d.ts" />
import {buildElements,renderElements, Elements, ConcreteView} from "./interfaces";
import {NameElement,PostElement} from "./elements";
import {JqueryViewFactory} from "./views";

export class BuildNames implements buildElements{

	private nameObjects: {name: string, id: number}[];

	constructor(objects: {name: string, id: number}[]){
		this.nameObjects = objects;
	}
	build(): Elements[]{
		let elementList: NameElement[] = [];
		for(let obj of this.nameObjects){
			elementList.push(new NameElement(obj['name'],obj['id']) );
		}
		return elementList;
	}
}
export class BuildPosts implements buildElements{

	private postObjects: string[];
	constructor(objects: string[] ){
		this.postObjects = objects;
	}
	build(): Elements[]{
		let elementList: PostElement[] = [];
		for(let obj of this.postObjects){
			elementList.push(new PostElement(obj) );
		}
		return elementList;
	}
}

export class renderJqueryElements implements renderElements{

	render(elements: Elements[],parent: Elements){
		let parentElement: ConcreteView = JqueryViewFactory.create(parent);
		for(let element of elements){
			let viewElement: ConcreteView = JqueryViewFactory.create(element);
			parentElement.getConcreteView().append(viewElement.getConcreteView());	
		}
		$(document.body).append(parentElement.getConcreteView());
	}
}
