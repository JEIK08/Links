import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

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
				this.getUserFromBack().subscribe({ next: resolve, error: reject });
			});
		});
	}

	getUserFromBack() {
		return this.http.get(`/user/1`).pipe(tap((user: any) => this.user = user));
	}

	getToken() {
		return localStorage.getItem(this.tkIndex);
	}

	getUser() {
		return new Promise((resolve, reject) => {
			if (this.user) resolve(this.user);
			else if (this.getToken()) this.getUserFromBack().subscribe(resolve);
			else reject();
		});
	}

	logOut() {
		this.user = null;
		localStorage.clear();
	}

}