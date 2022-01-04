import { Injectable } from "@angular/core";
import { IProduct } from "./product";



@Injectable({
    providedIn: 'root'
})
export class ProductService {
getProducts(): IProduct[] {
    return [
        {"productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
  },
  {"productId": 5,
  "productName": "Hammer",
  "productCode": "TBX-0048",
  "releaseDate": "May 21, 2021",
  "description": "Curved claw steel hammer",
  "price": 8.9,
  "starRating": 4.8,
  "imageUrl": "assets/images/hammer.png"
},
{"productId": 15,
  "productName": "logo",
  "productCode": "TBX-0098",
  "releaseDate": "May 22, 2021",
  "description": "Logo",
  "price": 18.9,
  "starRating": 5.0,
  "imageUrl": "assets/images/logo.jpg"
}
,
{"productId": 15,
  "productName": "leaf rake",
  "productCode": "TBX-0098",
  "releaseDate": "May 22, 2021",
  "description": "Logo",
  "price": 28.9,
  "starRating": 3.0,
  "imageUrl": "assets/images/leaf_rake.png"
}
,
{"productId": 35,
  "productName": "controller",
  "productCode": "TBX-0118",
  "releaseDate": "May 05, 2021",
  "description": "test controller",
  "price": 83.9,
  "starRating": 3.5,
  "imageUrl": "assets/images/xbox-controller.png"
}
,
{"productId": 45,
  "productName": "Saw",
  "productCode": "TBX-1198",
  "releaseDate": "May 11, 2021",
  "description": "Sharpen thw saw",
  "price": 108.9,
  "starRating": 2.0,
  "imageUrl": "assets/images/saw.png"
}
    ]
}
}