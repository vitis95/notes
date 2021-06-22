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
var età = persona.età;
var etàUtente = 0; 
console.log("Ciao il mio nome è: ", nome);
function inputEtà(){
    document.getElementById("myText").value;
    console.log("prova", document.getElementById("myText").value);
    var etàUtente = document.getElementById("myText").value;
    console.log("La differenza delle nostre età è: ");
    var diffEtà = persona.calcolaDiffEtà(etàUtente); 
    console.log(persona.calcolaDiffEtà(etàUtente));
    document.getElementById('diffEtà').innerHTML=diffEtà;

}

// console.log("età utente", etàUtente);


document.getElementById('età').innerHTML=età;
document.getElementById('diffEtà').innerHTML=diffEtà;





