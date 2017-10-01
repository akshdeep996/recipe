import { Component } from '@angular/core'

import {Ingredient} from '../shared/ingredient.model';

@Component({

selector:'app-shop',
templateUrl:'shopping.component.html',
styleUrls:['shopping.component.css']
})

export class ShoppingComponent {

    ingredients: Ingredient[] = [

        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',4),
        
    ];
    
}
