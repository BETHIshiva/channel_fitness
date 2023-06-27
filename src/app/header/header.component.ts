import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isHeaderFixed = false;
  // router: any;
  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollService.emitScrollEvent();
      }
    });
  }
  
}
