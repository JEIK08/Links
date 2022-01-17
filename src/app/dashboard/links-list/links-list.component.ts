import { Component } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd/modal';

import { LinksService } from '../services/links.service';

import { Link } from '../interfaces/link';

@Component({
	selector: 'app-links-list',
	templateUrl: './links-list.component.html',
	styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent {

	public links?: Link[];

	constructor(
		private linksService: LinksService,
		private nzModalService: NzModalService
	) {
		this.loadLinks();
	}

	loadLinks() {
		this.links = undefined;
		this.linksService.getLinksList().subscribe({
			next: links => {
				this.links = links;
			},
			error: error => {
				let response: string = error.error.text.replaceAll("\n", "");
				response = response.substring(0, response.length - 2) + ']';
				this.links = JSON.parse(response);
			}
		});
	}

	deleteLink(link: Link) {
		this.nzModalService.confirm({
			nzTitle: 'Delete',
			nzContent: `Are you sure you want to delete the link ${ link.url }?`,
			nzClosable: false,
			nzOkText: 'Yes',
			nzCancelText: 'No',
			nzOnOk: () => new Promise(resolve => {
				this.linksService.deleteLink(link.id).subscribe(() => {
					resolve();
					this.loadLinks();
				});
			})
		});
	}

}
