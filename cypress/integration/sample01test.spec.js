describe('Hackathon 2 Test', () => {
  // 1st test
  it('[Grid_9x9] Load the game correctly (30%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-1*2"]').should('have.text', '4')
    cy.get('div[id="grid-0*4"]').should('have.text', '2')
    cy.get('div[id="grid-2*6"]').should('have.text', '1')
    cy.get('div[id="grid-4*1"]').should('have.text', '9')
    cy.get('div[id="grid-4*4"]').should('have.text', '')
    cy.get('div[id="grid-3*8"]').should('have.text', '7')
    cy.get('div[id="grid-8*0"]').should('have.text', '4')
    cy.get('div[id="grid-8*5"]').should('have.text', '1')
    cy.get('div[id="grid-6*6"]').should('have.text', '8')
  })

  // 2nd test
  it('[Grid_9x9] Grid_1x1 border (10%)', () => {
      cy.visit('/')
      cy.get('#demo-simple-select-outlined').click()
      cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    // pure left transparent
    cy.get('div[id="grid-1*0"]').should('have.css', 'border-left', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="grid-1*0"]').should('have.css', 'border-right', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-1*0"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-1*0"]').should('have.css', 'border-bottom', '1.5px solid rgb(153, 153, 153)')

    // right and top transparent
    cy.get('div[id="grid-6*8"]').should('have.css', 'border-left', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-6*8"]').should('have.css', 'border-right', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="grid-6*8"]').should('have.css', 'border-top', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="grid-6*8"]').should('have.css', 'border-bottom', '1.5px solid rgb(153, 153, 153)')

    // right and bottom transparent
    cy.get('div[id="grid-8*5"]').should('have.css', 'border-left', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-8*5"]').should('have.css', 'border-right', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="grid-8*5"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-8*5"]').should('have.css', 'border-bottom', '1.5px solid rgba(0, 0, 0, 0)')

    // left and bottom transparent
    cy.get('div[id="grid-5*3"]').should('have.css', 'border-left', '1.5px solid rgba(0, 0, 0, 0)')
    cy.get('div[id="grid-5*3"]').should('have.css', 'border-right', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-5*3"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-5*3"]').should('have.css', 'border-bottom', '1.5px solid rgba(0, 0, 0, 0)')
    
    // central no transparent
    cy.get('div[id="grid-4*4"]').should('have.css', 'border-left', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-4*4"]').should('have.css', 'border-right', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-4*4"]').should('have.css', 'border-top', '1.5px solid rgb(153, 153, 153)')
    cy.get('div[id="grid-4*4"]').should('have.css', 'border-bottom', '1.5px solid rgb(153, 153, 153)')
  })

  // 3rd test
  it('[Grid_9x9] Make the empty grid selectable (10%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-5*4"]').click()
    cy.get('div[id="grid-5*4"]').should('have.css', 'background-color', 'rgb(51, 51, 51)')
    cy.get('div[id="grid-5*4"]').should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  // 4th test
  it('[Input Functions] Complete the key board inupt function (20%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()
    
    cy.get('div[id="grid-4*4"]').click().type('7').should('have.text', '7')
    cy.get('div[id="grid-5*4"]').click().type('5').should('have.text', '5')
  })

  // 5th test
  it('[Input Functions] Complete the screen keyboard input function (10%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-4*4"]').click()
    cy.get('div[id="keyboard-input-7"]').click()
    cy.get('div[id="grid-4*4"]').should('have.text', '7')

    cy.get('div[id="grid-5*4"]').click()
    cy.get('div[id="keyboard-input-5"]').click()
    cy.get('div[id="grid-5*4"]').should('have.text', '5')
  })

  // 6th test
  it('Check If the input is valid (20%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-4*4"]').click().type('6').should('have.text', '')
    cy.get('div[id="grid-4*4"]').click().type('3').should('have.text', '')
    cy.get('div[id="grid-4*4"]').click().type('7').should('have.text', '7')
  })

  // 7th test
  it('Highlight conflicts grids (5%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-4*4"]').click().type('9')
    cy.get('div[id="grid-4*1"]').should('have.css', 'background-color', 'rgb(238, 119, 119)')
    cy.get('div[id="grid-5*3"]').should('have.css', 'background-color', 'rgb(238, 119, 119)')
    cy.get('div[id="grid-7*4"]').should('have.css', 'background-color', 'rgb(238, 119, 119)')
  })

  // 8th test
  it('Add error effect to the game board boarder (3%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-4*4"]').click().type('9')
    cy.wait(300)
    cy.get('div[id="game-board"]').should('have.css', 'border', '8px solid rgb(238, 119, 119)')
  })

  // 9th test
  it('Set off Firework effect when the user win (2%)', () => {
    cy.visit('/')
    cy.get('#demo-simple-select-outlined').click()
    cy.get('.MuiMenuItem-root').contains('sample01.json').click()

    cy.get('div[id="grid-4*4"]').click().type('7').should('have.text', '7')
    cy.get('div[id="grid-5*4"]').click().type('5').should('have.text', '5')
    cy.get('.react-fireworks').should('exist')
  })
})
