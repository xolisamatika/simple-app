import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import './rxjs-operators';

import { TeamListComponent } from './teams/team-list.component';
import { EventFormComponent } from './events/event-form.component';
import { TeamFormComponent } from './teams/team-form.component';

@Component({
	selector: 'simple-app',
	templateUrl: 'app/app.component.html',
//	providers: [ HTTP_PROVIDERS ]
	directives: [TeamListComponent,EventFormComponent,TeamFormComponent]
})
export class AppComponent {
	
}
