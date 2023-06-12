import { Component, OnInit } from '@angular/core';
import { Poliza } from '../polizas/poliza';
import { PolizasService } from '../polizas/polizas.service';
import { Cobertura } from '../coberturas/cobertura';
import { CoberturasService } from '../coberturas/coberturas.service';


@Component({
    selector: 'app-polizas',
    templateUrl: './polizas.component.html',
    styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
    polizas: Poliza[];
    polizaSeleccionada: Poliza;
    nuevaPoliza: Poliza;
    coberturas: Cobertura[];
    nuevoMontoAsegurado: number;
    isDropdownOpen = false;

    constructor(private polizasService: PolizasService, private coberturasService: CoberturasService) {
        this.polizas = [];
        this.polizaSeleccionada = new Poliza();
        this.nuevaPoliza = new Poliza();
        this.coberturas = [];
        this.nuevoMontoAsegurado = 0;
    }

    ngOnInit() {
        this.obtenerPolizas();
        this.obtenerCoberturas();
    }

    obtenerPolizas(): void {
        this.polizasService.obtenerPolizas().subscribe(polizas => {
            this.polizas = polizas;

        });
        console.log(this.polizas);
    }

    crearPoliza() {
        this.polizasService.crearPoliza(this.nuevaPoliza).subscribe(poliza => { //tiene que ser this.nuevaPoliza?
            this.polizas.push(poliza); //esto puede que no sea asi, chequear
            this.nuevaPoliza = new Poliza();
        });
    }

    editarPoliza(poliza: Poliza) {
        this.polizaSeleccionada = poliza;
    }

    actualizarPoliza() {
        this.polizasService.actualizarPoliza(this.polizaSeleccionada).subscribe(() => {
            this.polizaSeleccionada = new Poliza();
            this.obtenerPolizas();
        });
    }

    borrarPoliza(poliza: Poliza) {
        this.polizasService.borrarPoliza(poliza).subscribe(() => {
            this.obtenerPolizas();
        });
    }

    obtenerCoberturas(): void {
        this.coberturasService.obtenerCoberturas().subscribe(coberturas => {
            this.coberturas = coberturas;

        });
        console.log(this.coberturas);
    }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    cambioDeSeleccion() {
        console.log(this.coberturas.filter(cobertura => cobertura.selected));
    }

}