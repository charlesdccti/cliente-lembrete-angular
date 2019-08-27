import { Injectable } from '@angular/core';
import { Lembrete } from '../interface/lembrete';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]> {
    const url = `${environment.lembretesApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
}
