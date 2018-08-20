import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  private curDeptId = 0;
  departments = [];

  constructor(private router: Router, private departmentService: DepartmentService, private aRoute:ActivatedRoute) { }

  ngOnInit() {
    this.departments  = this.departmentService.getDepartmentList();

    this.aRoute.paramMap.subscribe( (params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.curDeptId = id;
      //console.log(this.curDeptId);

      if (isNaN(this.curDeptId)) {
        this.curDeptId = 0;
      }
      console.log(this.curDeptId);
    });

  
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department) {
    //console.log("isSelected: ", department.id, this.curDeptId,  department.id === this.curDeptId);
    return department.id === this.curDeptId;
  }

}
