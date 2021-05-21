import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  color : String;
  priceTo = 0;
  priceFrom = 0;
  size : String;

  //check if there are dirty fields, Example: UnsavedGuards;
  isDirty = true;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.color = params.Color;
      this.priceFrom = params.From;
      this.priceTo = params.To;   
      this.size = params.Size;
    });
  }

  ngOnInit(): void {
  }

}
