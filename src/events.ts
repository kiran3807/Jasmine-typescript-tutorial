import {EventEmmiter} from "./interfaces";

export class SelectEventEmmiter implements EventEmmiter{
	static instance: SelectEventEmmiter;
	handlers: (()=>any)[];

	register(handler: ()=>any): void{
		this.handlers.push(handler);
	}
	trigger(): void{
		for(let handler of this.handlers){
			handler();
		}
	}
}
