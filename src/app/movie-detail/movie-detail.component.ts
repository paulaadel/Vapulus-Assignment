import { WookieServiceService } from './../wookie-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: any;
  movie:any;
  ratee = 0;
  constructor(private _activatedRoute:ActivatedRoute,
    private _wookie:WookieServiceService) {
    this.id = this._activatedRoute.snapshot.paramMap.get("id")
    this.movie = this._wookie.Movies().subscribe(movie => this.movie = movie.movies[this.id])
         }

  ngOnInit(): void {
  }

}
