import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VirusTrackerData} from '../../shared/models/dataset.model';

@Injectable({
  providedIn: 'root'
})
export class CoronaDataService {

  private thevirustrackerUrl = 'https://api.thevirustracker.com/free-api?countryTotal=AT';
  private http: HttpClient;

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
  }

  getCurrentCoronaDataVirusTracker(): Observable<VirusTrackerData> {
    return this.http.get<VirusTrackerData>(this.thevirustrackerUrl);
  }
}
