

class RegisterPage {
    
    elements = {
        inputNombre: () => cy.get('#firstName'),
        inputApellido: () => cy.get('#lastName'),
        inputEmail: () => cy.get('#userEmail'),
        inputCelular: () => cy.get('#userNumber'),
        inputDireccion: () => cy.get('#currentAddress'),
        btnSubmit: () => cy.get('#submit'),
        tituloRegistro: () => cy.get('#example-modal-sizes-title-lg')
    };

    ingresoPagina(url) {
        cy.visit(url);
    }

    ingresoNombre(nombre) {
        this.elements.inputNombre().type(nombre);
    }

    ingresoApellido(apellido) {
        this.elements.inputApellido().type(apellido);
    }

    ingtesoEmail(email) {
        this.elements.inputEmail().type(email);
    }

    seleccionGenero() {
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    }

    ingresoCelular(celular) {
        this.elements.inputCelular().type(celular);
    }

    ingresoFechaNacimiento() {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('2');  
        cy.get('.react-datepicker__year-select').select('1990');
        cy.get('.react-datepicker__day--015').click();  
    }

    seleccionHobbie() {
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    }

    ingresoDireccion(direccion) {
        this.elements.inputDireccion().type(direccion);
    }

    clickBoton() {
        this.elements.btnSubmit().click({ force: true });
    }

    validarRegistro(titulo) {
        this.elements.tituloRegistro().should('have.text', titulo);
    }
}

export default new RegisterPage();







