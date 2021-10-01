// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


    Cypress.Commands.add('register_user', (user, firstName, lastName) => { 

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                id: user.id,
                username: user.username,
                firstName: firstName,
                lastName: lastName,
                email: user.email,
                password: user.password,
                phone: user.phone,
                userStatus: user.status  
            }
        })
        
    })

    Cypress.Commands.add('register_pet', (pet, pet_name, category_name, status) => { 

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                id: pet.id,
                category: {
                    id: pet.category_id,
                    name: category_name
                },
                name: pet_name,
                photoUrls: [
                pet.image
                ],
                tags: [
                    {
                        id: pet.tags_id,
                        name: pet.tags_name
                    }
                ],
                status: status
            }
        })
    })


    Cypress.Commands.add('sell_pet', (sell, quantity, petId, shipDate, sell_status, complete) => { 

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/store/order',
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                id: sell.id,
                petId: petId,
                quantity: quantity,
                shipDate: shipDate,
                status: sell_status,
                complete: complete
            }
        })
    })
    

    Cypress.Commands.add('change_status_pet', (formdata, petId) => { 

        cy.request({
            method: 'POST',
            url: `https://petstore.swagger.io/v2/pet/${petId}`,
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formdata
        })
    })






