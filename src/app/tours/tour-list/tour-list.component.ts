import { Component, OnInit } from '@angular/core';
import { Tours } from './mock-tour-list';
import { Tour } from './tour'

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tours = Tours;

  selectedTour?: Tour;

  onSelect(tour: Tour): void {
    this.selectedTour = tour;
  }
}
