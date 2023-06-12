export class Cobertura {
    coberturaId: number;
    coberturaNombre: string;
    montoAsegurado: number;
    polizasCoberturas: [];
    selected: boolean;

    constructor() {
        this.coberturaId = 0;
        this.coberturaNombre = '';
        this.montoAsegurado = 0;
        this.polizasCoberturas = [];
        this.selected = false;
    }
}