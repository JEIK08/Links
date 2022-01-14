import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SessionService {

	private tkIndex: string;
	private user: any;

	constructor(private http: HttpClient) {
		this.tkIndex = 'links-tk';
	}

	logIn(credentials: any) {
		return new Promise((resolve, reject) => {
			this.http.post(`/login`, credentials).subscribe(({ token }: any) => {
				localStorage.setItem(this.tkIndex, token);
				this.http.get(`/user/1`).subscribe({
					next: (user: any) => {
						this.user = user;
						resolve(null);
					},
					error: () => reject()
				});
			});
		});
	}

	getToken() {
		return localStorage.getItem(this.tkIndex);
	}

	logOut() {
		this.user = null;
		localStorage.clear();
	}

}