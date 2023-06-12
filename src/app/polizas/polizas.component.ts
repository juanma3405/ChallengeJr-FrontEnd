import { Component, OnInit } from '@angular/core';
import { Poliza } from '../polizas/poliza';
import { PolizasService } from '../polizas/polizas.service';
import { Cobertura } from '../coberturas/cobertura';
import { CoberturasService } from '../coberturas/coberturas.service';
import { Router } from '@angular/router';

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
    coberturasAAgregrar: Cobertura[];
    nuevoMontoAsegurado: number;
    mostrarCrearPoliza: boolean;

    constructor(private polizasService: PolizasService, private coberturasService: CoberturasService, private router: Router) {
        this.polizas = [];
        this.polizaSeleccionada = new Poliza();
        this.nuevaPoliza = new Poliza();
        this.coberturas = [];
        this.coberturasAAgregrar = [];
        this.nuevoMontoAsegurado = 0;
        this.mostrarCrearPoliza = false;
    }

    ngOnInit() {
        this.obtenerPolizas();
        this.obtenerCoberturas();
    }

    obtenerPolizas(): void {
        this.polizasService.obtenerPolizas().subscribe(polizas => {
            this.polizas = polizas;
        });
    }

    obtenerCoberturas(): void {
        this.coberturasService.obtenerCoberturas().subscribe(coberturas => {
            this.coberturas = coberturas;
        });
    }

    verPoliza(poliza: Poliza) {
        poliza.selectedVer = !poliza.selectedVer;
    }

    editarPoliza(poliza: Poliza) {
        this.polizaSeleccionada = new Poliza;
        this.polizaSeleccionada = poliza;
        this.polizaSeleccionada.selectedActualizar = !this.polizaSeleccionada.selectedActualizar;
    }

    actualizarPoliza(polizaSeleccionada: Poliza) {
        polizaSeleccionada.polizasCoberturas = polizaSeleccionada.polizasCoberturas.filter(cobertura => !cobertura.selected);
        polizaSeleccionada.polizasCoberturas.forEach(cobertura => {
            polizaSeleccionada.montoTotal += cobertura.montoAsegurado;
        });
        this.polizasService.actualizarPoliza(polizaSeleccionada).subscribe(() => {
            this.obtenerPolizas();
        });
        this.polizaSeleccionada = new Poliza;
    }

    initAgrerarCoberturasAPoliza(poliza: Poliza) {
        this.polizaSeleccionada = poliza;
        this.polizaSeleccionada.selectedAgregar = !this.polizaSeleccionada.selectedAgregar;
        this.coberturasAAgregrar = this.coberturas.filter(cobertura =>
            !this.polizaSeleccionada.polizasCoberturas
                .some(c => c.coberturaId === cobertura.coberturaId));
    }

    agregarCoberturas(polizaSeleccionada: Poliza) {
        const coberturasFiltradas = this.coberturasAAgregrar.filter(cobertura =>
            cobertura.montoAsegurado > 0 && !polizaSeleccionada.polizasCoberturas.some(c => c.coberturaId === cobertura.coberturaId)
        );

        coberturasFiltradas.forEach(cobertura => {
            polizaSeleccionada.polizasCoberturas.push(cobertura);
            polizaSeleccionada.montoTotal += cobertura.montoAsegurado
        });

        this.polizasService.actualizarPoliza(polizaSeleccionada).subscribe(() => {
            this.obtenerPolizas();
        });
        this.polizaSeleccionada = new Poliza()
    }

    borrarPoliza(poliza: Poliza) {
        this.polizasService.borrarPoliza(poliza).subscribe(() => {
            this.obtenerPolizas();
        });
    }

    mostrarFormulario() {
        this.mostrarCrearPoliza = !this.mostrarCrearPoliza
    }

    crearPoliza(nuevaPoliza: Poliza) {

        this.polizasService.crearPoliza(nuevaPoliza).subscribe(() => {
            this.obtenerPolizas();
        });
        this.mostrarCrearPoliza = !this.mostrarCrearPoliza;
    }

    volver() {
        this.reloadComponent();
    }

    reloadComponent() {
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigateByUrl(currentUrl);
        });
    }
}