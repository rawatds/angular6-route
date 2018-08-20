import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  
  department = null;
  deptID = 0;
  
  constructor(private aRoute: ActivatedRoute, private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {

      // snapshot is not good if we navigate to same component
      //let id = parseInt(this.aRoute.snapshot.paramMap.get("id"));
      //console.log(this.aRoute.snapshot);
      //console.log(this.aRoute.snapshot.paramMap);

      this.aRoute.paramMap.subscribe( (params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.deptID = id;
        this.department = this.departmentService.getDepartmentDetails(id);
      });


      //console.log("got id: ", id);
      //console.log("got obj: " , this.department);

  }

  goToDepartments() {

    let selectedId = this.deptID  ? this.deptID : null;
    this.router.navigate(["/departments",  {"id": selectedId}  ]);
  }

}
