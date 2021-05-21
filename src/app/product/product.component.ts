import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//Import for Dynamic-Routing

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  photoId = 0;
  productId = 0;

  constructor(private activatedRoute: ActivatedRoute) {//Inject an instance of ActivatedRoute
    this.activatedRoute.params.subscribe((params)=>{
      const Values = params;
      this.photoId = Values.photoId;
      this.productId = Values.id;
    });

   }

  ngOnInit(): void {
  }

}
