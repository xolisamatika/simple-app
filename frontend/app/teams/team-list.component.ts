import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';

@Component({
	selector: 'team-list',
	templateUrl: '/app/teams/team-list.component.html',
	providers: [TeamService]
})

export class TeamListComponent implements OnInit {
	errorMessage: string;
	teams: Team[];
	mode = 'Observable';

	constructor(private teamService: TeamService) {
		// code...
	}
	ngOnInit(){
		this.getTeams();
	}
	getTeams() {
		this.teamService.getTeams()
						.subscribe(
							teams => this.teams = teams,
							error => this.errorMessage = <any>error);
	}

	addTeam(name: string, iso_code: string) {
		if((!name) || (!iso_code)){
			return;
		}
		this.teamService.addTeam(name, iso_code)
						.subscribe( team => this.teams.push(team),
						error => this.errorMessage = <any>error);
	}
}


			
