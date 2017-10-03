import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipi.model';

@Component({
  selector: 'app-recipi-list',
  templateUrl: './recipi-list.component.html',
  styleUrls: ['./recipi-list.component.css']
})
export class RecipiListComponent implements OnInit {

recipes: Recipe[] = [

new Recipe('A test Recipe','This is simply to test','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
new Recipe('A second Recipe','This is simply to test','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')


];
  constructor() { }

  ngOnInit() {
  }

}
