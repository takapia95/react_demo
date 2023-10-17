describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://3000-takapia95-reactdemo-cm8m006wd8a.ws-us105.gitpod.io/')
      cy.get(".navbar-brand").contains('Navbar')
    })
    it('fails', () => {
      cy.visit('https://3000-takapia95-reactdemo-cm8m006wd8a.ws-us105.gitpod.io/')
      cy.get(".navbar-brand").contains('Navbars')
    })
  })