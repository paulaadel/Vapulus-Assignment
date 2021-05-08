import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WookieServiceService } from './../wookie-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchItem:any = [];
  constructor( private route: ActivatedRoute,
    private wookie: WookieServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.wookie
        .searchMovie(params['searchItem'])
        .subscribe((response) => {
          this.searchItem = response.movies;
        });
    });
  }
}



