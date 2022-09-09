import { Component, OnInit , Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { HousingLocation } from '../housing-location';

@Component({
  // what the tag name should be
  selector: 'app-housing-listing',
  // the location of the template
  templateUrl: './housing-listing.component.html',
  // the location of the styleSheet
  styleUrls: ['./housing-listing.component.css']
})
export class HousingListingComponent implements OnInit {

  @Input () locationList: HousingLocation [] = [];
  results: HousingLocation[] = [];
  @Output () selectedLocationEvent = new EventEmitter<HousingLocation>();
//this is a comment
  constructor() { }

  ngOnInit(): void {
  }

  // function to hanle the searching and passing the search value and doing typechecking in the procss
  searchHousingLocations(searchText: string): void {
    if(!searchText) return;
    this.results=this.locationList.filter(location => location.city.toLowerCase().includes(searchText.toLowerCase()))
   
  }

}
