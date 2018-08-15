import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private backColor = "green";

  private displayJava:boolean = true;

  private favFood = "Pizza";

  private colors = ['red', 'blue', 'green', 'black'];

  constructor(private elemRef: ElementRef) { }

  ngOnInit() {
  }

  changeBackground() {
    this.elemRef.nativeElement.ownerDocument.body.style.backgroundColor = this.backColor;
  }

}
