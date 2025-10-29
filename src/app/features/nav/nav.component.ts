import { Subscription } from 'rxjs';
import { NavService } from './services/nav.service';
import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { Category } from './models/category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone:false
})
export class NavComponent implements OnInit,OnDestroy {
 categories!: Category[];
 defaultCategory:Category={
    'id':'0',
    'title':'ALL',
    'productsNumber':0
  }
 @Output() selectedCategory=new EventEmitter<string>
 subscription!:Subscription
 //services
 navService$ = inject(NavService);

  ngOnInit(): void {
    this.getAllCategories()
  }

  //fetch all categories
  getAllCategories()
  {
    this.subscription=this.navService$.getAllCategories().subscribe({
      next: (res:Category[]) => {
        this.categories = res;
        this.categories.unshift(this.defaultCategory)
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  // select category
  getCatId(catId:string)
  {
    this.selectedCategory.emit(catId)
  }

  //cancel subscription
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}