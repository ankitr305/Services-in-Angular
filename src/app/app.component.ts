import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  template : `
  <h1>Random Company</h1>
  <employee-list></employee-list>
  <employee-detail></employee-detail>
  `,
  providers : [EmployeeService]
})
export class AppComponent {
  
}
