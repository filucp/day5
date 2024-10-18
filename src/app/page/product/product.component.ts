import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private api:ApiService,private route:ActivatedRoute){}
  id:any
  item:any;

  ngOnInit(){
    this.id =this.route.snapshot.paramMap.get('id');

    this.api.getDatById(this.id).subscribe((data) =>{
      this.item=data
    })
  }

}
