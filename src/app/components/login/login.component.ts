import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  articles: any = null;
  constructor(
    
    private api: ApiCallService
    ) { }

  ngOnInit(): void {
    this.articles = this.api.searchArticles('bitcoin')
      .subscribe(res => console.log(res));
  }

}
