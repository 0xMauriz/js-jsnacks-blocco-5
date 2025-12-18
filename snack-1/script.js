const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

names.forEach ((name, index, names) => {console.log(`${name} in posizione ${index + 1}°`);});