/// <reference types="cypress"/>



describe('Dispensar receita', () =>{

    
    beforeEach(() => {
        //url base está no arquivo cypress.json, então só necessário usar a rota nas demais parte do código
        cy.visit('/') 
    })

    it('Dispensar receita com sucesso', () => {

        //já que código da receita e código de acesso do paciente são dados sensível
        //visando a segurança e atender a LGPD, esses dados não são versionados no repositório
        //fica armazenados localmente, em um arquivo json "cypress.env.json"
        //também foi utilizado comando customizado para reaproveitamento de código 
        // localizado em "C:\nexodata\cypress\support\commands.js"
        cy.ConsultarReceita(Cypress.env('receita'), Cypress.env('paciente'))

        

        //após consultar a receita
        //selecionar os remédios

        cy.contains('OMEPRAZOL').should('be.visible').click()
        cy.contains('STILNOX').should('be.visible').click()

         //dispensar receita
        cy.contains('Dispensar receita').should('be.visible').click()

        //assert de mensagem de confirmação, para fluxo com sucesso
        cy.contains('Medicamentos dispensados com sucesso!').should('be.visible')

        
    });

})