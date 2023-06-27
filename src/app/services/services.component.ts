import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../scroll.service';
  

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  
  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollService.emitScrollEvent();
      }
    });
  }


}
