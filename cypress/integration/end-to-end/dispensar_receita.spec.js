/// <reference types="cypress"/>



describe('Dispensar receita', () =>{

    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Dispensar receita com sucesso', () => {
        cy.contains('Entrar com código de acesso do paciente').should('be.visible').click()

        cy.get('input[name=validationCode]').should('be.visible').type("NXT6WYD")

        cy.get('#pin-input-2-0').should('be.visible').type("0957")

        cy.get('button[type=submit]').should('be.visible').click()


        cy.contains('OMEPRAZOL').should('be.visible').click()
        cy.contains('STILNOX').should('be.visible').click()
        cy.contains('Dispensar receita').should('be.visible').click()

        cy.contains('Medicamentos dispensados com sucesso!').should('be.visible')

        
    });

})