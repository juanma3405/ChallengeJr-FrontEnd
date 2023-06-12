export class Poliza {
    id: number;
    nombre: string;
    montoTotal: number;
    polizasCoberturas: [
        {
            idPolizaCobertura: number,
            coberturaId: number,
            coberturaNombre: string,
            montoAsegurado: number
        }
    ];


    constructor() {
        this.id = 0;
        this.nombre = '';
        this.montoTotal = 0;
        this.polizasCoberturas = [
            {
                idPolizaCobertura: 0,
                coberturaId: 0,
                coberturaNombre: '',
                montoAsegurado: 0
            }
        ];


    }
}
