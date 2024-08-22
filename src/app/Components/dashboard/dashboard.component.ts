import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchText:string='';
  products:any[]=[];
  filteredProducts:any[]=[];

  constructor(private productservice:ProductService) { }
  ngOnInit(): void {
    this.productservice.getProducts().subscribe({
      next:(res:any)=>{
        this.products=res;
        this.filteredProducts=[...this.products];
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }
  onSearch(){
    console.log(this.searchText);
  }
  onFilterChange(filter:string){
    this.filteredProducts=[...this.products];
    this.filteredProducts.sort((a:any,b:any)=>{
      return a[filter]-b[filter];
    });
  }
}
