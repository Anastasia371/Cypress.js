describe('Тестирование Login формы', function () {
    
    it('Найти элемент', function () {
        cy.visit('https://login.qa.studio/');
        })

    //1

    it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get("#loginButton").click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
        })

    //2    

    it('Позитивный кейс восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
        })

    //3

    it ('Правильный логин, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get("#pass").type('iloveqa');
        cy.get('#loginButton').should('be.enabled');
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    
    //4

    it ('Неправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('grm@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    //5

    it ('Логин без @, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get("#loginButton").click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })

    //6

    it ('Логин без @, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('GerMan@Dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get("#loginButton").click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })


})

