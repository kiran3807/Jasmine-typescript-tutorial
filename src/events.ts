export type eventHandler = (arg: any)=>void;

export interface EventEmitter{
	handlers : any[],
	register(handler: eventHandler): void;
	trigger(event: any): void;
}

let SelectEventEmitter: EventEmitter = {
	
	handlers : [],

	register: function(handler: eventHandler){
		this.handlers.push(handler);
	},
	trigger: function(arg: any): void{
		for(let handler of this.handlers){
			handler(arg);
		}
	}
}

export {SelectEventEmitter};

