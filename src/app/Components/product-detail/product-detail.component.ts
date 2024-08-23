import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  reviews:string[]=[];
  newReview:string='';
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private productservice:ProductService) { }
  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct(){
    this.productservice.getProduct(this.data.id).subscribe(product=>{
      this.reviews=product.reviews;
    });
  }
  addReview(){
    if(this.newReview.trim()){
      this.reviews.push(this.newReview);
      this.productservice.addReview(this.data.id,this.reviews).subscribe();
      this.newReview='';
    }
  }
}
