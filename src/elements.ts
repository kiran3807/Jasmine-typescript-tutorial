import {Elements,EventEmmiter} from "./interfaces";

export class NameElement implements Elements{
	private properties: any;
	private selectEmmiter: EventEmmiter;

	constructor(text: string,val : number, e: EventEmmiter){
		this.properties['template'] = "<option></option>";
		this.properties['text'] = text;
		this.properties['val'] = val;
		this.selectEmmiter = e;
		
	}

	clickHandler(): void{
		this.selectEmmiter.trigger();
	}
	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		this.properties[prop] = value;
	}
	/* returns JQuery element */
	getViewRepr(): any{
		let that = $(this.properties['template']);
		that.text(this.properties['text']);
		that.val(this.properties['val']);
		that.on('click',this.clickHandler);
		if(this.properties['css']){
			that.css(this.properties['css']);
		}
		return that;
	}
}

export class PostElement implements Elements{
	private properties: any;

	constructor(text: string){
		this.properties['template'] = "<div></div>";
		this.properties['text'] = text;
	}

	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		this.properties[prop] = value;
	}
	getViewRepr(): any{
		let that = $(this.properties['template']);
		that.text(this.properties['text']);
		if(this.properties['css']){
			that.css(this.properties['css']);
		}

		return that;
	}
}
