// [x] Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// [x] Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// [x] Creare un array di oggetti di studenti.
// [x] Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// [x] Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// ----------------------------------------------------------------------------------------
// PARTE 1
// ----------------------------------------------------------------------------------------

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const student = {
    nome: 'michael',
    cognome: 'scarantino',
    eta: 26
};
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for( let key in student ) {
    console.log(key + ': ' + student[key]);
}

// ----------------------------------------------------------------------------------------
// PARTE 2 1/2
// ----------------------------------------------------------------------------------------
// Creare un array di oggetti di studenti.
const students = [
    {
        nome: 'fabio',
        cognome: 'rossi',
        eta: 24
    },
    {
        nome: 'maria',
        cognome: 'silvestri',
        eta: 20
    },
    {
        nome: 'luigi',
        cognome: 'caminiti',
        eta: 19
    },
    {
        nome: 'francesca',
        cognome: 'colombo',
        eta: 23
    },
    {
        nome: 'silvana',
        cognome: 'corello',
        eta: 21
    }

];
// Ciclare su tutti gli studenti 
for( let i = 0; i < students.length; i++ ) {
    const thisStudent = students[i];
    // per ogni studente stampo il nome e il cognome
    for( let key in thisStudent ) {
        if( key !== 'eta' ) {
            console.log(key + ': ' + thisStudent[key]);
        }
    }
}

// ----------------------------------------------------------------------------------------
// PARTE 2 2/2
// ----------------------------------------------------------------------------------------
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// chiedo i 3 valori da inserire all'utente
const userName = prompt('Benvenuto Studente. Inserisci il tuo nome.');
const userLastname = prompt('Inserisci il tuo cognome.');
const userEta = parseInt( prompt('Inserisci la tua età') );

// creo l'oggetto da inserire nell'array studenti
const newStudent = {
    nome: userName,
    cognome: userLastname,
    eta: userEta
};

// inserisco l'oggetto nell'array studenti
students.push(newStudent);
console.log(students);