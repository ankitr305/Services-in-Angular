import { Component,OnInit  } from "@angular/core";
import { EmployeeService } from './employee.service';

@Component({
    selector : 'employee-detail',
    template :`
    <h2>Employee Details</h2>
    <ul *ngFor = "let employee of employees">
        <li>{{employee.name}} _ {{employee.id}} _ {{employee.gender}}</li>
    </ul>
    `

})

export class EmployeeDetailsComponent implements OnInit{
    employees = [];
    constructor(private _employeeService : EmployeeService){}
    ngOnInit(){
        this.employees = this._employeeService.getEmployees();

    }
}
