import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {

  }
  onIngredientAdded() {
    this.ingredientCreated.emit(
      new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
      // name: this.nameInput.nativeElement.value,
      // amount: this.amountInput.nativeElement.value;
    );
  }

}
