import { Component, OnInit } from '@angular/core';
import { NobelsService }     from './nobels.service';
import { Laureate }          from './nobels.model';

@Component({
  selector: 'app-nobels',
  templateUrl: './nobels.component.html',
  styleUrls: ['./nobels.component.scss']
})
export class NobelsComponent implements OnInit {

  constructor(public nobelsService: NobelsService) {
  }

  laureates: Laureate[];
  laureatesLoaded: boolean = false;

  ngOnInit() {
    this.loadLaureates();
  }

  loadLaureates() {
    this.nobelsService.getLocalLaureates().subscribe(result => {
      this.laureates = result;
      this.laureatesLoaded = true;
    });
  }
}
