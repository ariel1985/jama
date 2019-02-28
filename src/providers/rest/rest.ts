import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
	File: rest.ts

	Handles all http requests to url 
*/
@Injectable()
export class RestProvider {

  public personId = 0;

  private apiUrl = 'https://tekdi-challenges.appspot.com/api/People';

  constructor(public http: HttpClient) { }

  editPerson(person) {

	const headers = new HttpHeaders()
	    .set("Content-Type", "application/json")
	    .set("User-Agent", "googlebot");

		  	this.http.patch(this.apiUrl+'/'+person.id, person, {headers: headers})
							.subscribe(
								data  => {
									console.log("PATCH Request is successful ", data);
								},
								error  => {
									console.log("Error", error);
									this.handleError(error);
								}
							);

  }

	getDataById(): Observable<{}> {
	  return this.http.get(this.apiUrl+'/'+this.personId).pipe(
		    map(this.extractData),
		    catchError(this.handleError)
	  	);
	}

	getData(): Observable<{}> {
	  return this.http.get(this.apiUrl).pipe(
	    map(this.extractData),
	    catchError(this.handleError)
	  );
	}

	addPerson(person) {

		const headers = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set("User-Agent", "googlebot");

		return this.http.post(this.apiUrl, JSON.stringify(person), {headers: headers})
							.subscribe(data => {
								// console.log('post data',data);
							}, error => {
								// console.log('post error', error);
								this.handleError(error);
							});

	}

	private extractData(res: Response) {
	  let body = res;
	  return body || { };
	}

	private handleError (error: Response | any) {
	  let errMsg: string;
	  if (error instanceof Response) {
	    const err = error || '';
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}

}
