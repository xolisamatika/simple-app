import { Component }         from '@angular/core';
import { NgForm }         from '@angular/common';

import { Event }         from './event';
import { Team } from '../teams/team';

@Component({
	selector: 'event-form',
	templateUrl: 'app/events/event-form.component.html'
})

export class EventFormComponent {

	submitted = false;
	event = new Event('PSL');
	onSubmit() {this.submitted = true; }

	active = true;

	newEvent() {
		this.event = new Event('');
		this.active = false;
		setTimeout(() => this.active = true, 0);
  }
}