import { Component, OnInit } from '@angular/core';
import { NobelsService }     from './nobels.service';
import { Laureates }         from './nobels.model';

@Component({
  selector: 'app-nobels',
  templateUrl: './nobels.component.html',
  styleUrls: ['./nobels.component.sass']
})
export class NobelsComponent implements OnInit {

  constructor(public nobelsService: NobelsService) {
  }

  laureates: Laureates[];
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
