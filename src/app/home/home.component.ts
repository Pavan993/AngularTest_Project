import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
export interface Person {
  Sno: number;
  name: string;
  weight: number;
  gender: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Sno', 'name', 'weight', 'gender'];
  dataSource: MatTableDataSource<Person>= new MatTableDataSource();
  personForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    weight: new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
    
  }
  addPerson(){
    const data = this.dataSource.data;
    data.push({
      Sno: data.length+1,
      name: this.personForm.value.name,
      gender: this.personForm.value.gender,
      weight: this.personForm.value.weight,
    })
    this.dataSource.data = data;
    this.personForm.reset();
  }
}
