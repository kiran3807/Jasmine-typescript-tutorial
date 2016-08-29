export interface Elements{	
	getProperty(prop: string): any;
	setProperty(prop: string, value: any ): void;
	getViewRepr(): any; 
}

export interface buildElements{
	build(objects: any[]):Elements[];
	
}

export interface renderElements{
	render(elements: Elements[], parent: any): void;
}

export interface EventAggregator{
	handlersArray: {():any}[];

	register(handler: ()=>any):void;
	trigger():void;
}
