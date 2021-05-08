import { WookieServiceService } from './../wookie-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies:any = [];
  genress:any=[];
  constructor(private _wookieServiceService:WookieServiceService) { }

  ngOnInit(): void {
    this.allMovies = this._wookieServiceService.Movies().subscribe(all => this.allMovies = all.movies);

  }
 
}
