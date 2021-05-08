import { WookieServiceService } from './../wookie-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
Search:any = new FormControl();
  constructor(private wookie: WookieServiceService, private route: Router) {}
  ngOnInit(): void{}
  Searching() {
    if (this.Search.value) {
      this.route.navigate(['/search'], {
        queryParams: { searchItem: this.Search.value },
      });
    }
    }
}
