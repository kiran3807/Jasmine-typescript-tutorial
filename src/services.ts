/// <reference path="../typings/index.d.ts" />
import $=require("jquery");
import { ServiceType } from './constants';

export class NameService{

	constructor(){
	}

	getNames(id?: number){
		let defer: any = $.Deferred();
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/users" + (id  ? "/"+id.toString() : ""),
			dataType: 'JSONP',
			success: (response) => {
				if(response instanceof Array){
					response = response.map((obj: any)=>{
						let that = {
							id : obj.id,
							name : obj.name
						};
						return that;
					});
					defer.resolve(response);
				}else if(id){
					response = {
						id : response.id,
						name : response.name
					}
					defer.resolve([response]);
				}else{
					defer.reject("Error from backend");
				}
			},
			error: () => {
				defer.reject("Error from backend");
			}
		});
		return defer.promise();
	}
}
export class PostService{

	constructor(){
	}

	getPosts(id?: number){
		let defer = $.Deferred();
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/posts" + (id  ? "/"+id.toString() : ""),
			dataType: 'JSONP',
			success: (response) => {
				if(response instanceof Array){
					response = response.map((obj: any)=>{
						return obj.body;
					});
					defer.resolve(response);
				}else if(id){
					defer.resolve([response.body]);
				}else{
					defer.reject("Error from backend");
				}
			},
			error: () => {
				defer.reject("Error from backend");
			}
		});
		return defer.promise();
	}
}

let ServiceFactory = {
	services : {},
	getService : function(type: ServiceType){
		let service: any;
		switch(type){
		case ServiceType.name:
			if(!this.services[ServiceType.name]){
				this.services[ServiceType.name] = new NameService();
			}
			service = this.services[ServiceType.name];
			break;
		case ServiceType.post:
			if(!this.services[ServiceType.post]){
				this.services[ServiceType.post] = new PostService();
			}
			service = this.services[ServiceType.post];
			break;
		}
		return service;
	}
}

export { ServiceFactory };
