import {Injectable} from '@angular/core';

@Injectable()
export class SettingService {
	constructor(){
	}

	getCategory(){
	  if(localStorage.getItem('category') != null){
	  	return localStorage.getItem('category')
	  }

	  return 'gaming'
	}

	getLimit(){
	  if(localStorage.getItem('limit') != null){
	  	return localStorage.getItem('limit')
	  }

	  return '10'
	}

	setDefault(category, limit){
	  localStorage.setItem('category', category)
	  localStorage.setItem('limit', limit)
  	}
}