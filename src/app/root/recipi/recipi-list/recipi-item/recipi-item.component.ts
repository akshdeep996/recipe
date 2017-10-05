import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Recipe} from '../../recipi.model';

@Component({
  selector: 'app-recipi-item',
  templateUrl: './recipi-item.component.html',
  styleUrls: ['./recipi-item.component.css']
})
export class RecipiItemComponent implements OnInit {

@Output() recepieSelected = new EventEmitter<void>();

@Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

onSelected(){

this.recepieSelected.emit();

}

}
