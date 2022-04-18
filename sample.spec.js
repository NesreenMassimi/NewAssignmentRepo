/// <reference types="Cypress" />

describe("fisr Test Suite",function(){

    it("Visit the first Page",function()
    {

        cy.visit("https://www.samsung.com/in")
        cy.url().should("eq","https://www.samsung.com/in/")
    })

    it("Select and Configure a hardware device", function(){
        cy.url().should("include","samsung.com")
        cy.get('.gnb__menu-btn > .icon').click() //open menu
        cy.get('.gnb__main > .gnb__depth1 > :nth-child(1) > .gnb__depth1-link').click() // sleect mobiles cat
        cy.get('[data-type-code="20010000"] > .gnb__depth2-link > .gnb__depth2-link-text').click() // select smartphones
        cy.get('.open > .gnb__depth3-wrap > .gnb__depth3-inner > .gnb__depth3 > :nth-child(2) > .gnb__depth3-link > .gnb__depth3-link-text').click()// glaxy z products
        cy.url().should("include","galaxy-z")

        // choose the configuration
         
           cy.get('.js-buy-now').eq(1).click() // click on buy now to configure dev
           cy.url().should("include","galaxy-z-fold3-5g")

           cy.get("input[type='radio']").check("OPT-007_2").should("be.checked")// slecet storage 512GB
    
  })  

    it("add product to cart", function(){
        cy.url().should("include","samsung.com")

         cy.get('.price-bar-cart-btn').click() // continue button

         cy.get("#addon_skip").click() // again click continue

         cy.get("#addon_skip").click() // last time click continue to card

         cy.get("#cart-continue-id").click() 

         cy.get("#b2C_Continue_Guest").click() 
})



    it("shipping wiht no data", function(){
        cy.url().should("include","checkout")

       cy.get(".btn-black").eq(1).force(true).click() // click disabled next
        cy.get('.input-error-msg').should('be.visible') // shloud return true


    })

    it("shipping wiht data", function(){
        cy.url().should("include","checkout")


        cy.get('input[name="firstName"]').type("Nesreen")
        cy.get('input[name="lastName"]').type("Mosimi")
        cy.get('input[name="line1"]').type("2002 Oakmound Drive")
        cy.get('input[name="postalCode"]').type("60605")
        cy.get('input[name="city"]').type("Chicago")
        cy.get('input[name="state"]').type("United State")
        cy.get('input[name="email"]').type("nesreen@gmail.com")
        cy.get('input[name="phone"]').type("+1516-830-9833")
        cy.get('.input-error-msg').should('be.visible') // should return false

         
     })




})