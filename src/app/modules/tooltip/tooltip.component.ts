import { Component } from '@angular/core';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
	tooltip: string = '';

	top: number = 0;
	left: number = 0;

	constructor() {

	}

	ngOnInit(): void {
		
	}
}
