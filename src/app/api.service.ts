
import { Injectable } from '@angular/core';
import{HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  onInsert(val:any){
    return this.http.post('http://localhost/channelfitness/insert.php',val);
  }

}
