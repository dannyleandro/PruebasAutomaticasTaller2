describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		//Lineas nuevas  
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

describe('Los estudiantes login ok', function() {
    it('Visits los estudiantes and login', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("leandro@hurtado.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('Salir')
    })
})

describe('Los estudiantes create account and fails', function() {
    it('Visits los estudiantes and register', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("leandro")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("hurtado")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("leandro@hurtado.com")
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación')
		cy.get('.cajaSignUp').find('input[name="acepta"]').not('[disabled]').check().should('be.checked')
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Ya existe un usuario registrado')
    })
})
describe('Los estudiantes search ok', function() {
    it('Visits los estudiantes and searches', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.get('.Select-placeholder').click()
		cy.get('.Select-input').find('input').click({force: true}).type("Pruebas automaticas").wait(1000).type('{enter}')
		cy.contains('Pruebas Automáticas - MISO4208')
    })
})
describe('Los estudiantes teacher click ok', function() {
    it('Visits los estudiantes and clicks on professor', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Alfabético').click()
		cy.get('.profesor').contains('Adolfo Jose Quiroz Salazar').click()
		cy.contains('Adolfo Jose Quiroz Salazar')
    })
})
describe('Los estudiantes clicks on professor and filter by subject', function() {
    it('Visits los estudiantes, clicks on prefessor and filter', function() {
        cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		cy.contains('Alfabético').click()
		cy.get('.profesor').contains('Adolfo Jose Quiroz Salazar').click()
		cy.get('.materias').find('input[name="id:MATE1214C"]').check()
		cy.contains('Aveces es muy aburrido')
    })
})