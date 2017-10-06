import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

@Output() newNameAdded = new EventEmitter<{NameofIng: string,AmtofIng: number}>();
@ViewChild('amountInput') amountInput: ElementRef;

onNameAdded(ingName: HTMLInputElement){

this.newNameAdded.emit({
NameofIng: ingName.value,
AmtofIng: this.amountInput.nativeElement.value
});

}

}
