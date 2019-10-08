function aggiungiRiga(id_table){
    var table = document.getElementById(id_table);
    var tbody = table.getElementsByTagName('tbody')[0];
    var colonne = table.getElementsByTagName('th').length;
    var tr = document.createElement('tr'); 
    for( var i=0; i<colonne; i++){
        var td = document.createElement('td');
        var tx = document.createTextNode(prompt(" Inserisci testo per cella " +(i+1),"" ));
        td.appendChild(tx);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
function rimuoviRiga(){
	if(document.removeChild && document.getElementById && document.getElementsByTagName) {
	if(i > 1){
	var table = document.getElementById(id_table);	
    var tbody = table.getElementsByTagName("tbody")[0];
    var lastR = tbody.getElementsByTagName("tr")[(tbody.getElementsByTagName('tr').length)-1];
    tbody.removeChild(lastR);
	i--
	}
    }	
}
/*
   - Preleviamo il riferimento alla tabella e al tbody
   - Calcoliamo il numero di colonne presenti
   - Cicliamo e per ogni cella nuova chiediamo da prompt il testo
   - Nidifichiamo il testo nel td e il td nel tr
   - Aggiungiamo la nuova riga tr nel tbody */