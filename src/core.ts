import {buildElements,renderElements, Elements, EventEmmiter} from "./interfaces";
import {NameElement,PostElement} from "./elements";

export class BuildNames implements buildElements{

	private nameObjects: {name: string, id: number}[];
	private selectEmmiter: EventEmmiter;
	constructor(objects: {name: string, id: number}[], selectEmmiter: EventEmmiter ){
		this.nameObjects = objects;
		this.selectEmmiter = selectEmmiter;
	}
	build(): Elements[]{
		let elementList: NameElement[];
		for(let obj of this.nameObjects){
			elementList.push(new NameElement(obj['name'],obj['id'],this.selectEmmiter) );
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
		let elementList: PostElement[];
		for(let obj of this.postObjects){
			elementList.push(new PostElement(obj) );
		}
		return elementList;
	}
}

export class renderElementsImpl implements renderElements{
	/* parent must be of jquery type */
	render(elements: Elements[],parent: any){
		for(let element of elements){
			let viewElement = element.getViewRepr();
			parent.append(viewElement);
		}
	}
}
