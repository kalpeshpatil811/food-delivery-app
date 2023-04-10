import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from '../../entities/dish';
import { DishService } from 'src/app/services/dish.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dish: Dish = new Dish();
  angForm: FormGroup;
  constructor(private dishService: DishService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private fb: FormBuilder
  ) {
    this.validateForm();
  }

  ngOnInit(): void {

    //To get existing dish data on console for update
    this.dish = this.editData.dish;
    console.log(this.editData);
  }

  saveDish() {
    if (!this.dish) {
      this.dishService.addDish(this.dish).subscribe({
        next: (data) => {
          alert("Dish added successfully")
          console.log("add");
          this.goToDishList();
        },
        error: (error) => console.log(error)
      });
    }
    if (this.dish) {
      // this.actionBtn ="Update";
      this.dishService.updateDish(this.dish).subscribe({
        next: (data) => {
          alert("Dish updated successfully");
          console.log("update");
          this.goToDishList();
        },
        error: (error) => console.log(error)
      })
    }
  }
  goToDishList() {
    this.router.navigate(['/dishes-list']);
  }

  onSubmit() {
    console.log(this.dish);
    this.saveDish();
  }

  validateForm() {
    this.angForm = this.fb.group({
      dishName: ['', Validators.required],
      dishType: ['', Validators.required],
      dishImage: ['', Validators.required],
      dishDescription: ['', Validators.required],
      dishPrice: ['', Validators.required]
    });
  }
}

