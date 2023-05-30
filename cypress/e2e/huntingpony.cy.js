describe('Создание заказа на Hunting Pony', function () {
    
    it('Найти элемент', function () {
        cy.visit('https://huntingpony.com/');
        })

    it('Позитивный кейс добавления товара в корзину', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="https://huntingpony.com/collection/povodki"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
        cy.get('[data-product-id="340635872"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn-label').should('be.visible');
        cy.wait(3000);
        cy.get('.add-cart-counter__btn').click();
        cy.get('.header__cart > .icon > .header__control-bage').contains('1')
        cy.get('.header__cart > .icon').click();
        cy.get('.is-count-up > .icon').should('be.visible');
        cy.get('.is-count-up > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');

    })

})