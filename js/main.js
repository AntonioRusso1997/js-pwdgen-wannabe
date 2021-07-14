var nome = prompt ("Iserisci il tuo nome");
console.log (nome);

var cognome = prompt ("Inserisci il tuo cognome");
console.log (cognome);

var colore = prompt ("Inserisci il tuo colore preferito");
console.log (colore);

var password = nome + cognome + colore;

document.getElementById("your_password").innerHTML = ("La tua password è: " + password + "21");