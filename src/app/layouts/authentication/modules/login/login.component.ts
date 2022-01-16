import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/components/header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private headerService: HeaderService) {
    headerService.headerData={
      title: 'Login',
      icon: 'input'
    }
   }

  ngOnInit(): void {
  }

}
