import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/components/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private headerService: HeaderService) {
    headerService.headerData={
      title: 'Home',
      icon: 'home'
    }
   }

  ngOnInit(): void {
  }

}
