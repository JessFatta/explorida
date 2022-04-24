describe('Nav', () => {
  it('As a user, I should visit the page and see a title', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('div[class="title"]')
    .contains("Explorida")
  })

  it('As a user, I should visit the page and see a drop down', () => {
    cy.intercept('GET', "https://developer.nps.gov/api/v1/parks?*", {
      statusCode: 200,
      fixture: 'parks.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('label')
    .contains('Browse By Park Designation')
    .get('select')
    .contains('National Park')
  })
})