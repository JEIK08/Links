import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Link } from '../interfaces/link';

@Injectable({
	providedIn: 'root'
})
export class LinksService {

	constructor(private http: HttpClient) { }

	getList() {
		return this.http.get<Link[]>('/links');
	}

}