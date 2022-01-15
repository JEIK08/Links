import { Component } from '@angular/core';

import { LinksService } from '../services/links.service';

import { Link } from '../interfaces/link';

@Component({
	selector: 'app-links-list',
	templateUrl: './links-list.component.html',
	styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent {

	public links?: Link[];

	constructor(private linksService: LinksService) {
		this.linksService.getList().subscribe({
			next: links => {
				console.log(links);
				this.links = links;
			},
			error: error => {
				let response: string = error.error.text.substr(4).replaceAll("\n", "");
				response = response.substring(0, response.length - 2) + ']';
				this.links = JSON.parse(response);
			}
		});
	}

}
