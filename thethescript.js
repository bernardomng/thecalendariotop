function calendario() {
    const mesI = document.getElementById("mes");
    const anoI = document.getElementById("ano");
    const calendarioDiv = document.getElementById("calendario");
    const mes= parseInt(mesI.value);
    const ano = parseInt(anoI.value);

    const diasDoMes = new Date(ano, mes+ 1, 0).getDate();
    const primeiroDia = new Date(ano, mes, 1).getDay();

    let calendarioHTML = "<table>";
    calendarioHTML += "<tr><th>Domingo</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th><th>Sábado</th></tr>";
    let c = 1;

    for (let i = 0; i < 6; i++) {
      calendarioHTML += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < primeiroDia) {
          calendarioHTML += "<td></td>";
        } else if (c > diasDoMes) {
          calendarioHTML += "<td></td>";
        } else {
          calendarioHTML += `<td>${c}</td>`;
          c++;
        }
      }
      calendarioHTML += "</tr>";
    }

    calendarioHTML += "</table>";
    calendarioDiv.innerHTML = calendarioHTML;
  }