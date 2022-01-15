import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
	providedIn: 'root'
})
export class SessionService {

	private tkIndex: string;
	private user?: User;

	constructor(private http: HttpClient) {
		this.tkIndex = 'links-tk';
	}

	logIn(credentials: any) {
		return new Promise((resolve, reject) => {
			this.http.post<{ token: string }>(`/login`, credentials).subscribe(data => {
				localStorage.setItem(this.tkIndex, data.token);
				this.getUserFromBack().subscribe({ next: resolve, error: reject });
			});
		});
	}

	getUserFromBack() {
		return this.http.get<User>(`/user/1`).pipe(tap(user => this.user = user));
	}

	getToken() {
		return localStorage.getItem(this.tkIndex);
	}

	verifyUser(): Promise<User> {
		return new Promise((resolve, reject) => {
			if (this.user) resolve(this.user);
			else if (this.getToken()) this.getUserFromBack().subscribe(resolve);
			else reject();
		});
	}

	getUser() {
		return this.user!;
	}

	logOut() {
		this.user = undefined;
		localStorage.clear();
	}

}