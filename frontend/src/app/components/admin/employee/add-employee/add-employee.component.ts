import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToasterService } from 'src/app/_services/toaster.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() id: string = '';
  @Output() backToList = new EventEmitter<boolean>();
  employee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    userType: 'Employee',
    branch: '',
    address: '',
    city: '',
    pincode: '',
    country: ''
  };
  isEdit: boolean = false;

  constructor(private employeeService: EmployeeService, private toaster: ToasterService) { }


  ngOnInit(): void {
    if (this.id != '') {
      this.isEdit = true;
      this.getEmployee(this.id);
    }
  }

  gotoList(): void {
    this.backToList.emit(true);
  }

  getEmployee(id: string): void {
    this.employeeService.getEmployee(this.id).subscribe(res => {
      this.employee = res;
    },
      (error) => {
        this.toaster.error("Error", "Failed to get details.");
      });
  }

  save(): void {
    console.log(this.employee);
  }
}
