import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Link } from '../interfaces/link';

@Injectable({
	providedIn: 'root'
})
export class LinksService {

	constructor(private http: HttpClient) { }

	getLinksList() {
		return this.http.get<Link[]>('/links');
	}

	createLink(link: any) {
		return this.http.post('/links', link);
	}

	deleteLink(linkId: Link['id']) {
		return this.http.delete(`/links/${ linkId }`);
	}

}