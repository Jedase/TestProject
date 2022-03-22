describe('My First Test', () => {
  it('Авторизация через Метамаск', () => {
      cy.visit('https://stage-secretum.wsdemo.online/')
      cy.pause()
      cy.contains('Metamask').click()
      cy.wait(5000)
    })
  

  it('Создание чата', () => {
    const newAdress = '0x228c3c67491d0e78f5b0a40caf83339806f25e4f'
    cy.get('.circle-button__icon').click()
    cy.get('[data-selector=ACTION-USER-ADDRESS]').type(`${newAdress}{enter}`)
    cy.get('.base-modal__buttons > .base-button_white').click()
    cy.contains('Close').click()
    cy.wait(5000)
  })


  it('Отправка сообщения в созданный чат', () => {
    const newText = "Привет, это проверка чата!"
    cy.get('.contacts__bottom > :nth-child(1)').click()
    cy.get('#id-Message').type(`${newText}{enter}`)
    cy.get('.base-textarea > .circle-button > .circle-button__icon').click()
  })


  it('Отправка оффера для созданного чата', () => {
    const newDecimal = '1'
    cy.get('[data-selector=ACTION-OPEN-OFFER-CREATION]').click()
    cy.get(':nth-child(3) > .base-dropdown > .base-dropdown__input').click()
    cy.wait(6000)
    cy.get('.base-modal__tokens > :nth-child(1)').click()
    cy.get('[data-selector=ACTION-SENDING-AMOUNT]').type(`${newDecimal}{enter}`)
    cy.get('.fields > .base-dropdown > .base-dropdown__input').click()
    cy.wait(5000)
    cy.get('.base-modal__tokens > :nth-child(1)').click()
    cy.get('[data-selector=ACTION-GETTING-AMOUNT]').type(`${newDecimal}{enter}`)
    cy.get('.base-button_blue').click()
    cy.get('.base-modal__btns > .base-button_blue').click()
    cy.get('.base-modal__btn').click()
  })


  it('Дисконект кошелька', () => {
    cy.get('.header__wrap > .header__button').click()
    cy.get('.dropdown__disconnect').click()
  })
})