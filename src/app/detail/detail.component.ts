import { ClrDatagridStateInterface } from '@clr/angular';
import { PeopleService } from 'app/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [PeopleService]
})
export class DetailComponent implements OnInit {
  value = "ez egy value";
  input: string;
  minval = 3;
  maxval = 15
  currentPage = 1;
  myFilter = "";
  total = 0;
  loading: boolean = false;
  selected: any;

  users = [ {id: 1, name: "Alice" } , { id: 2, name: "Bob" } ];
  people = [];

  requests = [
    {id: 1, detail: "detail 1", createDate: "11.4.2020"},
    {id: 2, detail: "detail 2", createDate: "12.4.2020"},
    {id: 3, detail: "detail 3", createDate: "13.4.2020"},
    {id: 4, detail: "detail 4", createDate: "14.4.2020"},
    {id: 5, detail: "detail 4", createDate: "14.4.2020"},
    {id: 6, detail: "detail 4", createDate: "14.4.2020"},
    {id: 7, detail: "detail 4", createDate: "14.4.2020"},
    {id: 8, detail: "detail 4", createDate: "14.4.2020"},
    {id: 9, detail: "detail 4", createDate: "14.4.2020"},
    {id: 10, detail: "detail 4", createDate: "14.4.2020"},
    {id: 11, detail: "detail 4", createDate: "14.4.2020"}
  ]

  log(message: any) {
    console.log(message)
  }

  constructor(private peopleService: PeopleService) {
  }
  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    this.peopleService.get(this.currentPage).subscribe(data => {
      this.people = data.results;
      this.total = data.count;
    })
    this.loading = false;
    
  }

  ngOnInit() {
  }

}
