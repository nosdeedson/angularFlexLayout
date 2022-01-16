import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/components/header/header.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData={
      title: 'Cadastre-se',
      icon: 'assignment'
    }
   }

  ngOnInit(): void {
  }

}
