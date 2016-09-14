export interface Elements{	
	getProperty(prop: string): any;
	setProperty(prop: string, value: any ): void;
	getType(): any; 
}

export interface buildElements{
	build():Elements[];
	
}

export interface renderElements{
	render(elements: Elements[], parent: any): void;
}

export interface ConcreteView{

	getConcreteView(): any
}
