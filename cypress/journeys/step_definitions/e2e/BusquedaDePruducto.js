import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const envi = Cypress.env('ENV');

const url2 = Cypress.env(`${envi}`).url2;

var precioBusqueda = '';
var precioVista = '';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Given("el usuario abre la web de automation exercise", function () {
    cy.visit(`${url2}`);
});

When("el usuario hace clic en el boton products", function () {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
});

When("el usuario realiza la busqueda del producto Blue Top", function () {
    cy.get('#search_product').type('Blue Top');
    cy.get('#submit_search').click();
});

When("el usuario obtiene el precio del producto", function () {    
    cy.get('.productinfo > h2').then(($precio) => {
        precioBusqueda = $precio.text();
    });
    
});

When("el usuario hace clic en en el boton view product", function () {    
   cy.get('.choose > .nav > li > a').click();   

});

Then("el sistema muestra la informacion del producto Blue Top", function () { 
    cy.get('.product-information > h2').should('have.text', 'Blue Top');
    cy.get(':nth-child(5) > span').then(($precio) => {
        precioVista = $precio.text();
    });   
});

When("el sistema muestra el mismo precio del producto que se obtuvo en la busqueda", function () {    
    expect(precioBusqueda).to.equal(precioVista);       
});