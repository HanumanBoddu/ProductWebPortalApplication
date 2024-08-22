import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[],searchText:string): any[] {
    if(!items){
      return [];
    }
    if(!searchText){
      return items;
    }
    searchText=searchText.toLowerCase();
    return items.filter((item:any)=>{
      return item.name.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText) || item.price.toString().includes(searchText)
         || item.seller.toLowerCase().includes(searchText) || item.deliveryDays.toString().includes(searchText) || item.rating.toString().includes(searchText);
    });
  }

}
