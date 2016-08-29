import {buildElements,renderElements} from "./interfaces";
import {NameElement,PostElement} from "./elements";

export class buildNames implements buildElements{
	nameElement: NameElement;
	constructor(n:NameElement){
		this.nameElement = n;
	}
	
	build(objects : any[]){
		
	}
}
