function atualizarWidgetTempo() {
  const agora = new Date();
  const saudacao = document.getElementById("saudacao");
  const dataEl = document.getElementById("data");

  const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');

  const horas = agora.getHours();

  // Saudação
  if (horas < 12) saudacao.textContent = "Bom dia,";
  else if (horas < 18) saudacao.textContent = "Boa tarde,";
  else saudacao.textContent = "Boa noite,";

  // Data
  dataEl.textContent = `${diaSemana}, ${dia}/${mes}`;
}

atualizarWidgetTempo();
setInterval(atualizarWidgetTempo, 60 * 1000);