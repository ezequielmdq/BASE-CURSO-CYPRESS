import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import BusquedaDeProductoPage from '../../../pages/BusquedaDeProductoPage';

const envi = Cypress.env('ENV');

const url2 = Cypress.env(`${envi}`).url2;

let precioBusqueda = '';
let precioVista = '';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Given("el usuario abre la web de automation exercise", function () {
    
    BusquedaDeProductoPage.ingresoPagina(url2);

});

When("el usuario hace clic en el boton products", function () {
    
    BusquedaDeProductoPage.botonProducto();

});

When("el usuario realiza la busqueda del producto {string}", function (producto) {
    
    BusquedaDeProductoPage.busquedaProducxto(producto);

});

When("el usuario obtiene el precio del producto", function () {    
    
    BusquedaDeProductoPage.obtenerPrecioProducto((precio) => {
        precioBusqueda = precio;
    });
   
});

When("el usuario hace clic en en el boton view product", function () {    
   
    BusquedaDeProductoPage.botonViewProduct();   

});

Then("el sistema muestra la informacion del producto {string}", function (producto) { 
    
    precioVista = BusquedaDeProductoPage.validarInformacionProducto(producto, (precio) => {
        precioVista = precio;
    });
    
});

When("el sistema muestra el mismo precio del producto que se obtuvo en la busqueda", function () {    

    BusquedaDeProductoPage.compararPrecios(precioBusqueda, precioVista);           

});