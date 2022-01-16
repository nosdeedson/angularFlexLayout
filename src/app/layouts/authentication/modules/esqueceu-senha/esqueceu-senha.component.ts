import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/components/header/header.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Esqueceu Senha',
      icon: 'reply_all'
    }
   }

  ngOnInit(): void {
  }

}
