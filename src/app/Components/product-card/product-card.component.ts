import { Component, OnInit ,Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any;
  constructor(public dialog:MatDialog) { }
  ngOnInit(): void {}
  openDialog(){
    this.dialog.open(ProductDetailComponent,{
      data:this.product
    });
  }
}
