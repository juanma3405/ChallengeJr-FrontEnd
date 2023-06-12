import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poliza } from '../polizas/poliza';

@Injectable({
    providedIn: 'root'
})
export class PolizasService {
    private apiUrl = 'http://localhost:5073/api/polizas';

    constructor(private http: HttpClient) { }

    obtenerPolizas(): Observable<Poliza[]> {
        return this.http.get<Poliza[]>(this.apiUrl);
    }

    crearPoliza(poliza: Poliza): Observable<Poliza> {
        return this.http.post<Poliza>(this.apiUrl, poliza);
    }

    actualizarPoliza(poliza: Poliza): Observable<void> {
        const url = `${this.apiUrl}/${poliza.id}`;
        return this.http.put<void>(url, poliza);
    }

    borrarPoliza(poliza: Poliza): Observable<void> {
        const url = `${this.apiUrl}/${poliza.id}`;
        return this.http.delete<void>(url);
    }
}