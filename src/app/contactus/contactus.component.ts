import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  template: `
      <div> 

        <p><b>Contact us:</b></p>
        <p>Email: dharmender.rawat.uk@gmail.com</p>
        <p>Contact: +44 1234567890 </p>

        <br>
        Template Reference Variables:

        <input #t1 type="text">  &nbsp; 
        <button (click)="logMsg(t1.value)">Log Value</button> &nbsp;
        <button (click)="logMsg(t1)">Log Element</button>

      </div>
      
  `,
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMsg(value) {
    console.log(value);
    alert(value);
  }

}
