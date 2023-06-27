import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject: Subject<void> = new Subject<void>();

  get scrollEvents(): Observable<void> {
    return this.scrollSubject.asObservable();
  }

  emitScrollEvent(): void {
    this.scrollSubject.next();
  }
}
