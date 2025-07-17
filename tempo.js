<script>
function atualizarWidgetTempo() {
  const agora = new Date();
  const saudacao = document.getElementById("saudacao");
  const dataEl = document.getElementById("data");

  const diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');

  let hora = agora.getHours();
  if (hora < 12) saudacao.textContent = "Bom dia,";
  else if (hora < 18) saudacao.textContent = "Boa tarde,";
  else saudacao.textContent = "Boa noite,";

  dataEl.textContent = ${diaSemana}, ${dia}/${mes};
}

atualizarWidgetTempo();
setInterval(atualizarWidgetTempo, 60 * 1000); // atualiza a cada 1 minuto
</script>