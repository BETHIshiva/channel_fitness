import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-personaltraining',
  templateUrl: './personaltraining.component.html',
  styleUrls: ['./personaltraining.component.css']
})
export class PersonaltrainingComponent {
  
  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollService.emitScrollEvent();
      }
    });
  }

}

