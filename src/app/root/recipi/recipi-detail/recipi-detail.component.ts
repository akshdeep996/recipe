import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../recipi.model';


@Component({
  selector: 'app-recipi-detail',
  templateUrl: './recipi-detail.component.html',
  styleUrls: ['./recipi-detail.component.css']
})
export class RecipiDetailComponent implements OnInit {

@Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
