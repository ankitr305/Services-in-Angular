import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService{
    getEmployees(){
        return  [
            {"id":1,"name": "Ankit","gender":"Male"},
            {"id":2,"name":"Brandon","gender":"Male"},
            {"id":3,"name":"Christina","gender":"Female"},
            {"id":4,"name":"Elena","gender":"Female"}
        ]
    }
}