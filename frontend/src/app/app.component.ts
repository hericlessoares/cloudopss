import { Component ,OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public candidatos: Observable<any> | undefined;

  constructor(private http:HttpClient){

  }

  ngOnInit() {
    this.http.get("http://127.0.0.1:8000/candidatos")
    .subscribe(d=>console.log(d) );

    this.candidatos=this.http.get("http://127.0.0.1:8000/candidatos")  
  }

}
