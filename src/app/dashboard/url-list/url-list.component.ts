import { Component } from '@angular/core';

import { LinksService } from '../services/links.service';

@Component({
	selector: 'app-url-list',
	templateUrl: './url-list.component.html',
	styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent {

	public links?: any[];

	constructor(private linksService: LinksService) {
		this.linksService.getList().subscribe((links: any[]) => {
			console.log(links);
			this.links = links;
		}, (error) => {
			let response: string = error.error.text.substr(4).replaceAll("\n", "");
			response = response.substring(0, response.length - 2) + ']';
			this.links = JSON.parse(response);
		});
	}

}
