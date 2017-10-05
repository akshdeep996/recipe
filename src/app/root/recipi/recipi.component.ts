import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipi.model';

@Component({
  selector: 'app-recipi',
  templateUrl: './recipi.component.html',
  styleUrls: ['./recipi.component.css']
})
export class RecipiComponent implements OnInit {

selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
