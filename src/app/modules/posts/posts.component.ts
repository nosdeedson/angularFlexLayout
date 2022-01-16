import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/components/header/header.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Posts",
      icon: 'question_answer'
    }
   }

  ngOnInit(): void {
  }

}
