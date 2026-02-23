describe('template spec', () => {
  it('başarılı bir sipariş oluşuturabiliyor', () => {
    cy.visit('localhost:5173/siparis')
    cy.get('input[name="additions"]').each(($el, index) => {
      if (index < 4)
        cy.wrap($el).check();
    })
    cy.get('input[name="size"]').first().check({force: true});
    cy.get('select[name="hamur"]').first().select('ince');
    cy.get('button[type="submit"]').click();
    cy.contains('SİPARİŞ ALINDI');
  })
})