Cypress.Commands.add('ConsultarReceita', (receita, paciente) => { 

    cy.contains('Entrar com código de acesso do paciente').should('be.visible').click()

    cy.get('input[name=validationCode]').should('be.visible').type(receita,{log:false})

    cy.get('#pin-input-2-0').should('be.visible').type(paciente,{log:false})

    cy.get('button[type=submit]').should('be.visible').click()

    
})