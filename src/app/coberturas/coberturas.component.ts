import { Component, OnInit } from '@angular/core';
import { Cobertura } from '../coberturas/cobertura';
import { CoberturasService } from '../coberturas/coberturas.service';

@Component({
    selector: 'app-coberturas',
    templateUrl: './coberturas.component.html',
    styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent implements OnInit {
    nuevaCobertura: Cobertura;
    coberturas: Cobertura[];
    coberturaSeleccionada: Cobertura;
    coberturaParaEditar: boolean;

    constructor(private coberturasService: CoberturasService) {
        this.nuevaCobertura = new Cobertura();
        this.coberturas = [];
        this.coberturaSeleccionada = new Cobertura;
        this.coberturaParaEditar = false;
    }

    ngOnInit() {
        this.obtenerCoberturas();
    }

    obtenerCoberturas(): void {
        this.coberturasService.obtenerCoberturas().subscribe(coberturas => {
            this.coberturas = coberturas;
        });
    }

    crearCobertura() {
        this.coberturasService.crearCobertura(this.nuevaCobertura).subscribe(() => {
            this.obtenerCoberturas();
        });
        this.nuevaCobertura = new Cobertura
    }

    editarCobertura(cobertura: Cobertura) {
        this.coberturaSeleccionada = new Cobertura;
        this.coberturaSeleccionada = cobertura;
        this.coberturaParaEditar = !this.coberturaParaEditar
    }

    actualizarCobertura() {
        this.coberturasService.actualizarCobertura(this.coberturaSeleccionada).subscribe(() => {
            this.coberturaSeleccionada = new Cobertura;
            this.obtenerCoberturas();
        });
        this.coberturaParaEditar = !this.coberturaParaEditar
    }

    borrarCobertura(cobertura: Cobertura) {
        this.coberturasService.borrarCobertura(cobertura).subscribe(() => {
            this.obtenerCoberturas();
        });
    }
}