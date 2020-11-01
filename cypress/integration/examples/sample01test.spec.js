describe('Hackathon 2 Test', () => {
  // 1st test
  it('Show correct Grid_1x1 value', () => {
    // test 9 cubes value
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="1*2"]').should('have.text', '4')
    cy.get('div[id="0*4"]').should('have.text', '2')
    cy.get('div[id="2*6"]').should('have.text', '1')
    cy.get('div[id="4*1"]').should('have.text', '9')
    cy.get('div[id="4*4"]').should('have.text', '')
    cy.get('div[id="3*8"]').should('have.text', '7')
    cy.get('div[id="8*0"]').should('have.text', '4')
    cy.get('div[id="8*5"]').should('have.text', '1')
    cy.get('div[id="6*6"]').should('have.text', '8')
  })

  // 2nd test
  it('Correct Grid_1x1 border', () => {
      cy.visit('/')
      cy.get('#demo-simple-select-outlined').click()
      cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    // pure left transparent
    cy.get('div[id="1*0"]').should('have.css', 'border-left', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="1*0"]').should('have.css', 'border-right', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="1*0"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="1*0"]').should('have.css', 'border-bottom', '1.5px solid rgb(153, 153, 153)')

    // right and top transparent
    cy.get('div[id="6*8"]').should('have.css', 'border-left', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="6*8"]').should('have.css', 'border-right', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="6*8"]').should('have.css', 'border-top', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="6*8"]').should('have.css', 'border-bottom', '1.5px solid rgb(153, 153, 153)')

    // right and bottom transparent
    cy.get('div[id="8*5"]').should('have.css', 'border-left', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="8*5"]').should('have.css', 'border-right', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="8*5"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="8*5"]').should('have.css', 'border-bottom', '1.5px solid rgba(0, 0, 0, 0)')

    // left and bottom transparent
    cy.get('div[id="5*3"]').should('have.css', 'border-left', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="5*3"]').should('have.css', 'border-right', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="5*3"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="5*3"]').should('have.css', 'border-bottom', '1.5px solid rgba(0, 0, 0, 0)')
    
    // central no transparent
    cy.get('div[id="4*4"]').should('have.css', 'border-left', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="4*4"]').should('have.css', 'border-right', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="4*4"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="4*4"]').should('have.css', 'border-bottom', '1.5px solid rgb(153, 153, 153)')
  })

  // 3rd test
  it('Show black background color after clicking Grid_1x1', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="5*4"]').click()
    cy.get('div[id="5*4"]').should('have.css', 'background-color', 'rgb(51, 51, 51)')
    cy.get('div[id="5*4"]').should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  // 4th test
  it('Show correct keyboard input', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()
    
    cy.get('div[id="4*4"]').click().type('7').should('have.text', '7')
    cy.get('div[id="5*4"]').click().type('5').should('have.text', '5')
  })

  // 5th test
  it('Show correct small keyboard input', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="4*4"]').click()
    cy.get('.input-keyboard>div').eq(6).click()
    cy.get('div[id="4*4"]').should('have.text', '7')

    cy.get('div[id="5*4"]').click()
    cy.get('.input-keyboard>div').eq(4).click()
    cy.get('div[id="5*4"]').should('have.text', '5')
  })

  // 6th test
  it('Check function isInputValid', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="4*4"]').click().type('6').should('have.text', '')
    cy.get('div[id="4*4"]').click().type('3').should('have.text', '')
    cy.get('div[id="4*4"]').click().type('7').should('have.text', '7')
  })

  // 7th test
  it('Check conflict highlight', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="4*4"]').click().trigger('keydown', { keyCode: 1, which: 49 }).should('have.css', 'background-color', 'rgb(51, 51, 51)')
    cy.get('div[id="4*4"]').click().trigger('keydown', { keyCode: 3, which: 51 }).should('have.css', 'background-color', 'rgb(51, 51, 51)')
  })

  // 8th test
  it('Check fireworks', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="4*4"]').click().type('7').should('have.text', '7')
    cy.get('div[id="5*4"]').click().type('5').should('have.text', '5')
    cy.get('.react-fireworks').should('exist')
  })
})
