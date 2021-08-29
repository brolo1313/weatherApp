import { DataService } from './../../services/data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {

  @ViewChild('nameText')
  nameParagraph!: ElementRef;

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
  }


    addCity(){
      console.log(
        this.nameParagraph.nativeElement.textContent
      )
    }
}
