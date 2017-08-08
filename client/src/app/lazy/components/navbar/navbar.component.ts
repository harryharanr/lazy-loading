import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  logout(){
    this.router.navigateByUrl('http://localhost:4200');
  }

  

  ngOnInit() {
  }

}
