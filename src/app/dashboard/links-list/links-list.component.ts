import { Component } from '@angular/core';

import { LinksService } from '../services/links.service';

@Component({
	selector: 'app-links-list',
	templateUrl: './links-list.component.html',
	styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent {

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
