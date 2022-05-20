export interface Product {
    id_cuenta? : number;
    fk_name_sede? : string;
    fk_num_identificacion? : number;
    fecha_apertura? : Date;
    saldo? : number;
    cuota_manejo? : number;
    transc_virtuales? : string;
    monto_max_retiros? : number;
    estado_cuenta? : string;
}