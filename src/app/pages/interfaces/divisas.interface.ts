export interface divisas {

    codigo?: string,
    nombre?: string,
    unidad_medida?: string
    fecha?: string,
    valor?: number

}

export interface detalle {
    version?: string,
    autor?: string,
    codigo?: string,
    nombre?: string,
    unidad_medida?: string,
    serie?: [
        {
            fecha?: string,
            valor?: number
        }
    ]
}