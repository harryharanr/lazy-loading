import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.css']
})

export class EagerComponent implements OnInit {

  

  constructor(
    private router:Router
  ) { }

  
  
  

  goToLazy(){
      this.router.navigate(['lazy']);
  }
  
  ngOnInit() {
  }

}
