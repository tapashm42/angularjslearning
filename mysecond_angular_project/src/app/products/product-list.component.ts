import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  providers: [ProductService],
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List'
  imageWidth: number = 50
  imageMargin = 2
  showImage = false
  private _searchFilter: string = 'cart' //Backing variable

  get searchFilter(): string {
    return this._searchFilter
  }
  set searchFilter(value: string) {
    this._searchFilter =  value
    this.filteredProducts = this.performFilter(this.searchFilter)
    console.log('In Setter: ', value)
  } 

  filteredProducts: IProduct[] = []

   products: IProduct[] = []
//   [
//     {"productId": 2,
//     "productName": "Garden Cart",
//     "productCode": "GDN-0023",
//       "releaseDate": "March 18, 2021",
//       "description": "15 gallon capacity rolling garden cart",
//       "price": 32.99,
//       "starRating": 4.2,
//       "imageUrl": "assets/images/garden_cart.png"
//   },
//   {"productId": 5,
//   "productName": "Hammer",
//   "productCode": "TBX-0048",
//   "releaseDate": "May 21, 2021",
//   "description": "Curved claw steel hammer",
//   "price": 8.9,
//   "starRating": 4.8,
//   "imageUrl": "assets/images/hammer.png"
// }
 
//   ]

  constructor(private productService: ProductService) {
    console.log('constructor')
   }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product: IProduct) => 
    product.productName.toLocaleLowerCase().includes(filterBy))
  }

  ngOnInit(): void { ///Perform the component initialization, retrieve data
    console.log('ngOnInit')
    // this.searchFilter = 'cart'
    this.products = this.productService.getProducts()
    this.filteredProducts = this.products
  }

  onRatingClicked(message: string) { 
    this.pageTitle = 'Product list ' + message
  }
  // onChanges(): void { ///Perform action after change to input properties
  //   console.log('onChanges')
  // }
}
