import { DataService } from './../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  name : string ='';

  myDate = new Date();

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
  //  console.log(this.dataService.response.name)
  //  this.name = this.dataService.response.name
  }

}
