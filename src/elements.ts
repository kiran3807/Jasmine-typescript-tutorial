import {Elements,EventAggregator} from "./interfaces";

export class NameElement implements Elements{
	private properties: any;
	selectAggregator: EventAggregator;

	constructor(label: string, e: EventAggregator){
		this.properties['template'] = "<option></option>";
		this.properties['label'] = label;
		selectAggregator = e;
		
	}

	clickHandler(): void{
		this.selectAggregator.trigger();
	}
	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		properties[prop] = value;
	}
	/* returns JQuery element */
	getViewRepr(): any{
		let that = $(this.properties['template']);
		/* set the value of option tag here */
		that.css(this.properties['css']);
	}
}
/* jquery or dom it's here that those things should be handled, not*/
/* in the core/*builders */
export class PostElement implements Elements{
	properties: string[];

	getProperty(prop:string): any{
		return this.properties[prop];
	}
	setProperty(prop: string,value: any): void{
		properties[prop] = value;
	}
}
