var saluto = "Buongiorno";
var visualizzaSaluti;
function saluta(persone) {
	var nomeCognome;
	var saluti = [];
	for (var i in persone) {
		nomeCognome = persone[i].nome + " " + persone[i].cognome;
		saluti.push(function() {
			console.log(saluto + " " + nomeCognome);
		});
	}
	return saluti;
}
visualizzaSaluti = saluta([{nome: "Mario", cognome: "Rossi"},
                           {nome: "Marco", cognome: "Neri"}]);
for (var i in visualizzaSaluti) {
	visualizzaSaluti[i]();
}