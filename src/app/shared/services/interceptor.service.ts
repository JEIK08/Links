import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { SessionService } from './session.service';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

	constructor(private sessionService: SessionService) { }

	intercept(request: HttpRequest<any>, handler: HttpHandler) {
		const url: string = environment.API_URL + request.url;
		const token = this.sessionService.getToken();
		const headers: HttpHeaders = token
			? request.headers.append('Token', token)
			: request.headers;

		request = request.clone({ url, headers });
		return handler.handle(request);
	}

}