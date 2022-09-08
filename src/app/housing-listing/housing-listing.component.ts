import { Component, OnInit , Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  // function to hanle the searching and passing the search value and doing typechecking in the procss
  searchHousingLocations(searchText: string): void {
    console.log(searchText);
  }

}
