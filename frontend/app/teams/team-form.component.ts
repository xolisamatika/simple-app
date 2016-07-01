import { Component }         from '@angular/core';
import { NgForm }         from '@angular/common';

import { Team }         from './team';

@Component({
	selector: 'team-form',
	templateUrl: 'app/teams/team-form.component.html'
})

export class TeamFormComponent {
	submitted = false;
	team = new Team('South Africa', 'za');
	onSubmit() {this.submitted = true; }

	active = true;

	newTeam() {
		this.team = new Team('','');
		this.active = false;
		setTimeout(() => this.active = true, 0);
  }
}