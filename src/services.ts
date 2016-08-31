export class nameService{
	static service: nameService = null;

	constructor(){
		if(!nameService.service){
			nameService.service = this;
		}
		return nameService.service;
	}

	getNames(id: number){
		$.ajax({
			url: "https://jsonplaceholder.typicode.com/users" + (id  ? "/"+id.toString() : ""),
			dataType: 'JSONP',
		},success: function(){
				   
		},error: function(){
			
		});
	}
}


