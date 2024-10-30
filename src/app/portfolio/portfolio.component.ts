import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
 imgSrc:string="assets/images/front.jfif"
 box:string="d-none"
 lightBox:string="lightBox"
 showImage(data:any){
this.imgSrc=(data.target.src)
this.box = "d-flex"

}
closeImg(data:any){
  if (this.lightBox != (data.target)){
 this.box = "d-none"
  }
}



  }

