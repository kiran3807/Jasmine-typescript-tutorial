/// <reference path="../typings/index.d.ts" />
import $ = require("jquery");
import {ConcreteView, Elements} from "./interfaces";
import {ElementType} from "./constants";
import {EventEmitter, SelectEventEmitter} from "./events";

export class PostJqueryConcreteView implements ConcreteView{

	private view: any;
	constructor(element: Elements){
		this.view = $(element.getProperty('template'));
		this.view.text(element.getProperty("text"));

		if(element.getProperty('css')){
			this.view.css(element.getProperty('css'));
			
		}
		
	}
	getConcreteView(): any{
		return this.view;
	}
} 

export class NameJqueryConcreteView implements ConcreteView{

	private view: any;
	constructor(element: Elements){
		this.view = $(element.getProperty('template'));
		this.view.val(element.getProperty('val'));
		this.view.text(element.getProperty('text'));

		if(element.getProperty('css')){
			this.view.css(element.getProperty('css'));
			
		}
	}

	getConcreteView(): any{
		return this.view;
	}

}

export class NameParentJqueryConcreteView implements ConcreteView{
	private view: any;
	private eventEmitter: EventEmitter;
	
	constructor(element: Elements){
		this.eventEmitter = SelectEventEmitter;
		this.view = $(element.getProperty('template'));
		if(element.getProperty('css')){
			this.view.css(element.getProperty('css'));
		}
		$(document.body).on('change','#'+this.view.attr('id'),{self:this},this.handler);
	}
	getConcreteView(): any{
		return this.view;
	}
	handler(event: any){
		let $elem = $(this);
		event.data.self.eventEmitter.trigger($elem.val());
	}
	
}

export class PostParentJqueryConcreteView implements ConcreteView{

	private view: any;
	constructor(element: Elements){
		this.view = $(element.getProperty('template'));
		if(element.getProperty('text')){
			this.view.text(element.getProperty('text'));
		}
		if(element.getProperty('css')){
			this.view.css(element.getProperty('css'));
			
		}
	}

	getConcreteView(): any{
		return this.view;
	}
}

let JqueryViewFactory = {
	create : function(element: Elements){

		let view: ConcreteView;
		switch(element.getType()){
		case ElementType.name:
			view = new NameJqueryConcreteView(element);
			break;
		case ElementType.post:
			view = new PostJqueryConcreteView(element);
			break;
		case ElementType.nameParent:
			view = new NameParentJqueryConcreteView(element);
			break;
		case ElementType.postParent:
			view = new PostParentJqueryConcreteView(element);
		}
		return view;
	}
}
export{JqueryViewFactory};
