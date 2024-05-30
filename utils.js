const posts = require('./db');

const createSlug = (title) => {
    if (!title) {
        throw new Error('Il titolo deve essere presente')
    }
    if(typeof title !== 'string'){
        throw new Error('Il titolo deve essere una stringa!');
    }
    if (!posts || posts.length === 0) {
        throw new Error('Non ci sono post a cui assegnare lo slug')
    }
    const baseSlug = title.replaceAll(' ', '-').toLowerCase().replaceAll('/', '');
    const slugs = posts.map(p => p.slug);
    let counter = 1;
    let slug = baseSlug;
    while (slugs.includes(slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }
    return slug;
}

module.exports = { createSlug }