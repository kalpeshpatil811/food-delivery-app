import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Dish } from '../../entities/dish';
import { DishService } from '../../services/dish.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})

export class DishesListComponent implements OnInit {

  dishes: Dish[];
  searchText = '';
  dataSource = new MatTableDataSource();


  constructor(private dishService: DishService, private dialog: MatDialog,) { }

  ngOnInit(): void {


    this.getDishes();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Get Dishesh list
  private getDishes() {
    this.dishService.getAllDishes().subscribe(data => {
      this.dishes = data;
      console.log(data);
    })
  }

  setDishes = (data: any) => {
    this.dishes = data;
  }
  // Add dish dialog
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '40%'
    }).afterClosed().subscribe(val => {
      this.getDishes();
    })
  }

  // Update Dish dialog
  editDish(dish: Dish) {
    this.dialog.open(DialogComponent, {
      width: "40%",
      data: {
        dish: dish
      }
    }).afterClosed().subscribe(val => {
      this.getDishes();
    })
  }

  //Delete Dish
  deleteDish(dishId: number) {
    this.dishService.deleteDish(dishId).subscribe({
      next: (res) => {
        alert("Dish deleted successfully");
        this.getDishes();
      },
      error: () => {
        alert("Error while deleting dish")
      }
    })
  }


}
