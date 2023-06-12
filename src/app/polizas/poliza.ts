import { Cobertura } from '../coberturas/cobertura';

export class Poliza {
    id: number;
    nombre: string;
    polizasCoberturas: Cobertura[];
    montoTotal: number;
    selectedVer: boolean;
    selectedActualizar: boolean;
    selectedAgregar: boolean;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.montoTotal = 0;
        this.polizasCoberturas = [];
        this.selectedVer = false;
        this.selectedActualizar = false
        this.selectedAgregar = false;
    }
}