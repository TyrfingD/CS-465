import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

    @Input('trip') trip: any;

    //commented out error producing lines
    //@Input() trip!: Trip;
    //@Output() delete = new EventEmitter<string>();

    emitDeleteEvent() {
      //this.delete.next(this.trip.code);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
