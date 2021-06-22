const persona = {
    nome: "Ivan", 
    cognome: "De Vita", 
    età: 25,
    calcolaDiffEtà: function (tuaEtà) {
        if (tuaEtà > this.età) {
            return tuaEtà - this.età;
        } else {
            return this.età - tuaEtà;
        }
    }
}

var nome = persona.nome;
var etàUtente = 0; 
console.log("Ciao il mio nome è: ", nome);
function inputEtà(){
    document.getElementById("myText").value;
    console.log("prova", document.getElementById("myText").value);
    var etàUtente = document.getElementById("myText").value;
    console.log("La differenza delle nostre età è: ");
    console.log(persona.calcolaDiffEtà(etàUtente));

}

// console.log("età utente", etàUtente);





