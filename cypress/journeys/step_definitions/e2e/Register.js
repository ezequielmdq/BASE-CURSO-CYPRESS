import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import RegisterPage from '../../../pages/RegisterPage';

const envi = Cypress.env('ENV');

const nombre = Cypress.env(`${envi}`).nombre;
const apellido = Cypress.env(`${envi}`).apellido;
const email = Cypress.env(`${envi}`).email;
const celular = Cypress.env(`${envi}`).celular;
const direccion = Cypress.env(`${envi}`).direccion;

const url = Cypress.env(`${envi}`).url;

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Given("un usuario ingresa al form de registro", function () {
    RegisterPage.ingresoPagina(url);
});

When("ingresa el primer nombre", function () {
    RegisterPage.ingresoNombre(nombre);
});

When("ingresa el apellido", function () {
    RegisterPage.ingresoApellido(apellido);
});

When("ingresa el email", function () {
    RegisterPage.ingtesoEmail(email);   
});

When("elige el genero", function () {
    RegisterPage.seleccionGenero();
}); 

When("ingresa el numero de celular", function () {
    RegisterPage.ingresoCelular(celular);   
});

When("ingresa la fecha de nacimiento", function () {
    RegisterPage.ingresoFechaNacimiento(); 
});

When("elige un hobbie", function () {
    RegisterPage.seleccionHobbie();
});

When("ingresa la direccion actual en donde vive", function () {
    RegisterPage.ingresoDireccion(direccion);          
});

When("hace click en el boton {string}", function () {
    RegisterPage.clickBoton();
});
    
Then("aparece un cuadro de dialogo con el titulo {string} que confirma el registro del usuario", function (titulo) {
    RegisterPage.validarRegistro(titulo);
});




      