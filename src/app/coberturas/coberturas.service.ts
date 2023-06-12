import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cobertura } from '../coberturas/cobertura';

@Injectable({
    providedIn: 'root'
})
export class CoberturasService {
    private apiUrl = 'http://localhost:5073/api/coberturas';

    constructor(private http: HttpClient) { }

    obtenerCoberturas(): Observable<Cobertura[]> {
        return this.http.get<Cobertura[]>(this.apiUrl);
    }

    crearCobertura(cobertura: Cobertura): Observable<Cobertura> {
        return this.http.post<Cobertura>(this.apiUrl, cobertura);
    }
}
