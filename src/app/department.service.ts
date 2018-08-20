import { Injectable } from '@angular/core';
import { elementStart } from '../../node_modules/@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  private departments = [
    { "id": 1, "name": "Java", "hod": "Dharmender", "capacity": 15 },
    { "id": 2, "name": "Angular", "hod": "Pratap", "capacity": 12 },
    { "id": 3, "name": "Mongo", "hod": "Randhir", "capacity": 25 },
    { "id": 4, "name": "Oracle", "hod": "Gurupreet", "capacity": 5 },
    { "id": 5, "name": "Javascript", "hod": "Tarun", "capacity": 4 }
  ];

  getDepartmentList() {
    return this.departments;
  }

  getDepartmentDetails(departmentId) {

    /*
    this.departments.filter(department => {
      return department.id === departmentId;
    }
  );
  */

    let result = null;

    this.departments.forEach(element => {
      console.log(element, departmentId, element.id === departmentId );
      if (element.id === departmentId) {
        result = element;
      }
    });
    
    return result;
    
    
    /*for (var dept in this.departments) {
        if (dept.id == departmentId) {
          return dept;
        }
        return null;
    }*/



  }
}
