import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { ToasterService } from 'src/app/_services/toaster.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  showAddEditEmployee: boolean = false;
  employees: Employee[] = [];
  id: string = "";
  showConfirmBox = false;

  constructor(private employeeService: EmployeeService, private router: Router, private toaster: ToasterService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  editEmp(id: string): void {
    this.id = id;
    this.showAddEditEmployee = true;
  }

  deleteEmp(id: string): void {
    this.id = id;
    this.showConfirmBox = true;
  }

  onConfirmDelete(event: any) {
    this.employeeService.deleteEmployee(this.id).subscribe(res => {
      console.log(res);
      this.showConfirmBox = false;
      this.toaster.error("Success", "Deleted successfully.");
    },
      (error) => {
        this.toaster.error("Error", "Failed to delete.");
      });

  }

  onConfirmCancel(event: any) {
    this.showConfirmBox = false;
  }

  showList(event: any): void {
    this.getEmployees();
    this.showAddEditEmployee = !event;
  }

  showAddEmployee(): void {
    this.id = '';
    this.showAddEditEmployee = true;
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }
}
