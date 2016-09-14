import {Elements} from "./interfaces";
import {ElementType} from "./constants";


export abstract class AElements{
	abstract getProperty(prop: string): any;
	abstract setProperty(prop: string, value: any): void;
	abstract getType(): any;

	generateId(): number{
		let range = 10000000000;
		if(range <= 0) {
			throw "Invalid arguments Exception";
		}
		let randomNum = Math.random() * range;
		randomNum = Math.floor(randomNum);
		return randomNum;
	}
}
export class NameElement extends AElements{
	private properties: any = {};
	public id: number;

	constructor(text: string,val : number){
		super();
		this.id = this.generateId();
		this.properties.template = "<option id="+this.id+ "></option>";
		this.properties.text = text;
		this.properties.val = val;
		
	}

	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		this.properties[prop] = value;
	}
	getType(): ElementType{
		return ElementType.name;
	}
}

export class PostElement extends AElements{
	private properties: any = {};
	public id:number ;
	constructor(text: string){
		super();
		this.id = this.generateId();
		this.properties.template = "<div id="+this.id+"></div>";
		this.properties.text = text;
	}

	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		this.properties[prop] = value;
	}
	getType(): ElementType{
		return ElementType.post;
	}
}

export class NameParentElement extends AElements{
	private properties: any = {};
	public id: number;
	
	constructor(){
		super();
		this.id =  this.generateId();
		this.properties.template = `<select id="`+this.id+`select"`+`></select>`;
	}

	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		this.properties[prop] = value;
	}
	getType(): ElementType{
		return ElementType.nameParent;
	}
	
}

export class PostParentElement extends AElements{
	private properties: any = {};
	public id: number;
	
	constructor(text?: string){
		super();
		this.id =  this.generateId();
		this.properties.template = "<div id="+this.id+"></div>";
		this.properties.text = text;
	}

	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		this.properties[prop] = value;
	}
	getType(): ElementType{
		return ElementType.postParent;
	}
}

