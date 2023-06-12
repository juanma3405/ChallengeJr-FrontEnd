
import { Component } from '@angular/core';
import { Cobertura } from '../coberturas/cobertura';
import { CoberturasService } from '../coberturas/coberturas.service';

@Component({
    selector: 'app-coberturas',
    templateUrl: './coberturas.component.html',
    styleUrls: ['./coberturas.component.css']
})
export class CoberturasComponent {
    //nuevaCobertura: Cobertura;
    //coberturas: Cobertura[];

    constructor(private coberturasService: CoberturasService) {
        //this.nuevaCobertura = new Cobertura();
        //this.coberturas = [];
    }

    /*crearCobertura() {
        this.coberturasService.crearCobertura(this.nuevaCobertura).subscribe(() => {
            // Cobertura creada exitosamente, puedes realizar alguna acción adicional si es necesario
            console.log('Cobertura creada exitosamente');
            this.nuevaCobertura = new Cobertura();
        }, error => {
            // Ocurrió un error al crear la cobertura, puedes manejar el error según tus necesidades
            console.error('Error al crear la cobertura', error);
        });
    }*/

    /*agregarCobertura() {
        const nuevaPolizaCobertura: PolizasCoberturas = {
            id: 0,
            polizaId: this.polizaSeleccionada.id,
            coberturaId: this.nuevaCoberturaId,
            poliza: null,
            cobertura: null,
            montoAsegurado: this.nuevoMontoAsegurado
        };

        this.polizasService.agregarCobertura(nuevaPolizaCobertura).subscribe(() => {
            this.obtenerPolizas();
            this.nuevaCoberturaId = 0;
            this.nuevoMontoAsegurado = 0;
        });
    }

    borrarCobertura(this.nuevaCobertura) {
        this.coberturasService.borrarCobertura(nuevaCobertura).subscribe(() => {
            this.obtenerCoberturas();
        });
    }*/
}