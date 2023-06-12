import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cobertura } from '../coberturas/cobertura';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CoberturasService {
    private apiUrl = 'http://localhost:5073/api/coberturas';

    constructor(private http: HttpClient) { }

    obtenerCoberturas(): Observable<Cobertura[]> {
        return this.http.get<any[]>(`${this.apiUrl}`).pipe(
            map((coberturasJson: any[]) => {
                return coberturasJson.map((coberturaJson: any) => {
                    const cobertura = new Cobertura();
                    cobertura.coberturaId = coberturaJson.id;
                    cobertura.coberturaNombre = coberturaJson.nombre;
                    cobertura.montoAsegurado = 0;
                    cobertura.selected = false;
                    return cobertura;
                });
            })
        );
    }

    crearCobertura(cobertura: Cobertura): Observable<Cobertura> {
        const jsonMapping = {
            nombre: cobertura.coberturaNombre
        }
        return this.http.post<Cobertura>(this.apiUrl, jsonMapping);
    }

    actualizarCobertura(cobertura: Cobertura): Observable<void> {
        const jsonMapping = {
            id: cobertura.coberturaId,
            nombre: cobertura.coberturaNombre,
            polizasCoberturas: null
        }
        const url = `${this.apiUrl}/${cobertura.coberturaId}`;
        return this.http.put<void>(url, jsonMapping);
    }

    borrarCobertura(cobertura: Cobertura): Observable<void> {
        const url = `${this.apiUrl}/${cobertura.coberturaId}`;
        return this.http.delete<void>(url);
    }

}
