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

// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato

test('createSlug should throw and error if title is empty or wrongly formatted', ()=> {
    const emptySlug = createSlug(" ");
    const wrongSlug = createSlug(2324);
    expect(createSlug(emptySlug)).toThrow();
    expect(createSlug(wrongSlug)).toThrow();
})

// createSlug dovrebbe lanciare un errore se manca l'array dei post

test('createSlug should throw an error is posts array is missing', ()=> {
    expect(createSlug).toThrow();
})