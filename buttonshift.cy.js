/// <reference types="cypress" />

describe('Buttonshift assignment', () => {

  it('Sign Up', () => {
    cy.visit('https://dev-fe.buttonshift.com')
    cy.contains('Sign up').click()
    cy.get("input[placeholder=\"Enter email address\"]").type('Johnse@yopmail.com').type("{enter}")
    cy.get("input[placeholder=\"Enter password\"]").type('f@yopmail.com').type("{enter}")
    cy.get("input[placeholder=\"Retype password\"]").type('f@yopmail.com').type("{enter}")
    cy.get(`[aria-label="Please enter OTP character 1"]`).click().type('1')
    cy.get(`[aria-label="Please enter OTP character 2"]`).click().type('2')
    cy.get(`[aria-label="Please enter OTP character 3"]`).click().type('3')
    cy.get(`[aria-label="Please enter OTP character 4"]`).click().type('4')
    cy.get(`[aria-label="Please enter OTP character 5"]`).click().type('5')
    cy.get(`[aria-label="Please enter OTP character 6"]`).click().type('6').type("{enter}")
    cy.get("input[placeholder=\"enter your phone number\"]").type('0123456789').type("{enter}")
    cy.get("input[placeholder=\"choose location\"]").type('Uk').type("{enter}")
    cy.contains('Community')
  })

  it('Login', () => {
     cy.visit('https://dev-fe.buttonshift.com')
     cy.contains('Log in').click()
     cy.get("input[placeholder=\"Enter email address\"]").type('doe@yopmail.com').type("{enter}")
     cy.get("input[placeholder=\"Enter password\"]").type('f@yopmail.com').type("{enter}")
     cy.get("input[placeholder=\"enter your phone number\"]").type('0123456789').type("{enter}")
     cy.get("input[placeholder=\"choose location\"]").type('Uk').type("{enter}")
     cy.contains('Community')
  })

  it('Error message is displayed when email is dosent contain @ symbol', () => {
    cy.visit('https://dev-fe.buttonshift.com')
    cy.contains('Log in').click()
    cy.get("input[placeholder=\"Enter email address\"]").type('dyopmail.com').type("{enter}")
    cy.contains('Please enter a valid email address')
  })
  
  it('Error message is displayed when incorrect password', () => {
    cy.visit('https://dev-fe.buttonshift.com')
    cy.contains('Log in').click()
    cy.get("input[placeholder=\"Enter email address\"]").type('doe@yopmail.com').type("{enter}")
    cy.get("input[placeholder=\"Enter password\"]").type('dyopmail.com').type("{enter}")
    cy.contains('Unable to log in with provided credentials')
  })
})
