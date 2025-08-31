import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const envi = Cypress.env('ENV');

const url = Cypress.env(`${envi}`).url;

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Given("un usuario ingresa al form de registro", function () {
    cy.visit(`${url}`);
});

When("ingresa el primer nombre", function () {
    cy.get('#firstName').type('Juan');
});

When("ingresa el apellido", function () {
    cy.get('#lastName').type('Perez');
});

When("ingresa el email", function () {
    cy.get('#userEmail').type('juan@gmail.com');
});

When("elige el genero", function () {
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
}); 

When("ingresa el numero de celular", function () {
    cy.get('#userNumber').type('1234567890');
});

When("ingresa la fecha de nacimiento", function () {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('2');  
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();  
});

When("elige un hobbie", function () {
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
});

When("ingresa la direccion actual en donde vive", function () {
    cy.get('#currentAddress').type('Calle Falsa 123');          
});

When("hace click en el boton 'Submit'", function () {
    cy.get('#submit').click({ force: true });
});
    
Then("aparece un cuadro de dialogo con el titulo 'Thanks for submitting the form' que confirma el registro del usuario", function () {
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
});




      