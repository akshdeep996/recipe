import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from '../../recipi.model';

@Component({
  selector: 'app-recipi-item',
  templateUrl: './recipi-item.component.html',
  styleUrls: ['./recipi-item.component.css']
})
export class RecipiItemComponent implements OnInit {

@Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
