
class BusquedaDeProductoPage {

    elements = {

        inputBusqueda: () => cy.get('#search_product'),
        btnBusqueda: () => cy.get('#submit_search'),
        tituloResultado: () => cy.get('.lighter'),
    };      

    ingresoPagina(url) {

        cy.visit(url);
    }   
    
    botonProducto() {

        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    }

    busquedaProducxto(producto) {

        this.elements.inputBusqueda().type(producto);
        this.elements.btnBusqueda().click();
    }

    obtenerPrecioProducto(callback) {

        cy.get('.productinfo > h2').should('exist').then(($precio) => {
            const precioText = $precio.text();
            if (callback) {
                callback(precioText);
            }
        });
    }

    botonViewProduct() {

        cy.get('.choose > .nav > li > a').click();   
    }

    validarInformacionProducto(producto, callback) {
        
        cy.get('.product-information > h2').should('have.text', producto);
        cy.get(':nth-child(5) > span').then(($precio)  => {
            const precioText = $precio.text();
            if (callback) {
                callback(precioText);
            }
        });   
    }       

    compararPrecios(precioBusqueda, precioVista) {
        
        expect(precioBusqueda).to.equal(precioVista);       
    }
}


export default new BusquedaDeProductoPage();



    






