import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Team } from './team';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app.settings';

@Injectable()
export class TeamService {
	private getTeamsUrl = `${AppSettings.API_ENDPOINT}get=teams`;
	private addTeamsUrl = `${AppSettings.API_ENDPOINT}get=addteam`;

	constructor (private http:Http){}

	getTeams (): Observable<Team[]>{
		return this.http.get(this.getTeamsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

	addTeam(name: string, iso_code: string): Observable<Team> {
		let body = JSON.stringify({name, iso_code});
	//	let headers = new Headers({'Content-Type':'application/json'});
	//	let options = new RequestOptions({headers:headers});
this.addTeamsUrl = `${AppSettings.API_ENDPOINT}get=addteam&name=`+name+`&iso_code=`+iso_code;
console.log(this.addTeamsUrl);
		return this.http.get(this.addTeamsUrl)
						.map(this.extractData)
						.catch(this.handleError);
	}

private extractData(res:Response){
		let body = res.json();
	console.log(body)
		return body || { };
	}

	private handleError(error: any){
		let errMsg = (error.message) ? error.message : 
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		return Observable.throw(errMsg);
	}
}