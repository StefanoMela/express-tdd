const { test, expect } = require("@jest/globals");
const { createSlug } = require('./utils');

// createSlug dovrebbe ritornare una stringa

test('createSlug should return a string', () => {

    const slug = createSlug('prova');
    
    expect(typeof slug).toBe('string');
  });

// createSlug dovrebbe ritornare una stringa in lowercase

test('createSlug should return a lowercase string', () => {
    const slug = createSlug('Prova');
    expect(slug).toMatch(slug.toLowerCase());
})

// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -

test('createSlug should return a dashed string', () => {
    const slug = createSlug('Questa è una prova');
    expect(slug).not.toContain(" ");
})

// createSlug dovrebbe incrementare di 1 lo slug quando esiste già

// test('createSlug should increment the slug by one if it already exists', () => {
//     const slug = createSlug('prova', existingSlugs);
  
//     expect(slug).toBe('prova-3');
//   });

// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug should throw an error if there is no title or it is badly formatted', () => {

})

// createSlug dovrebbe lanciare un errore se manca l'array dei post
9