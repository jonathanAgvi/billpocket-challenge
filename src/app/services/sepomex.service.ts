import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SepomexService {
    private responseSepomex: any;
    constructor(protected http: HttpClient) { }

    public getInfoZipCode(zipCode: string) {
        return this.http.get(`https://api-sepomex.hckdrk.mx/query/info_cp/${zipCode}?type=simplified`).pipe(
            map((request) => {
                return (request as RequestInfoZipCode);
            })
        );

    }

    public getStates () {
        return this.http.get(`https://api-sepomex.hckdrk.mx/query/get_estados`).pipe(
            map((request) => {
                return (request as RequestStates);
            })
        );
    }

    public getCities(state: string){
        return this.http.get(`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}`).pipe(
            map((request) => {
                return (request as RequestCities);
            })
        );
    }

}

export interface RequestInfoZipCode {
    error: string,
    code_error: number,
    error_message: string,
    response?: {
        cp: 09810,
        asentamiento: string[],
        tipo_asentamiento: string,
        municipio: string,
        estado: string,
        ciudad: string,
        pais: string
    }
}

export interface RequestStates {
    error: string,
    code_error: number,
    error_message: string,
    response?: {
        estado: string[]
    }
}

export interface RequestCities {
    error: string,
    code_error: number,
    error_message: string,
    response?: {
        municipios: string[]
    }
}
