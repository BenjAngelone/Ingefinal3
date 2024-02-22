Feature('Prueba')

const assert = require('assert');

const DOMAIN_URL = 'https://ingefinal3-front-57jpbmfmwa-uc.a.run.app'

Scenario('Preparando Tests.', async ({ I }) => {
    I.wait(5);
    console.log('Estamos listos para los tests');
});

var tries = 0;

Scenario('Flaky scenario', { retries: 2 }, () => {
  setTimeout(() => { tries++ }, 200);
  assert.equal(tries, 1);
});

Scenario('Testing start ', {retries: 2}, async ({ I }) => {
    I.amOnPage(DOMAIN_URL);
    I.see('Palabra');
    //I.fillField('input', "Test");
   // I.click('//button[text()="Enviar al Backend"]');
    // I.click('button.*');
    //I.wait(1);
    //I.seeText('Palabra en espejo:');
    //I.seeText('Tset');
    //I.seeText('Pollo');

});
Scenario('Testing post ', {retries: 2}, async ({ I }) => {
  I.amOnPage(DOMAIN_URL);
  I.fillField('#myinput', "Test")
  //I.fillField('input', "Test");
 // I.click('//button[text()="Enviar al Backend"]');
  // I.click('button.*');
  //I.wait(1);
  //I.seeText('Palabra en espejo:');
  //I.seeText('Tset');
  //I.seeText('Pollo');

});

Scenario('Testing total ', {retries: 2}, async ({ I }) => {
  I.amOnPage(DOMAIN_URL);
  I.fillField('#myinput', "Test")
  I.click('#myboton');
  I.wait(1);
  I.see('tseT');
 

});


