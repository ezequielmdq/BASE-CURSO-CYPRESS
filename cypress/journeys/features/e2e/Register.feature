Feature: Frontend - Registro de usuario



Scenario: Ingresar los datos de un usuario nuevo y registrarlo
    Given un usuario ingresa al form de registro
    When ingresa el primer nombre
    And ingresa el apellido
    And ingresa el email
    And elige el genero
    And ingresa el numero de celular
    And ingresa la fecha de nacimiento
    And elige un hobbie
    And ingresa la direccion actual en donde vive
    And hace click en el boton 'Submit'
    Then aparece un cuadro de dialogo con el titulo 'Thanks for submitting the form' que confirma el registro del usuario
