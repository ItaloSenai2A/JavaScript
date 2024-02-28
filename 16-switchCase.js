//implementação de condicional em menu

var menuSelecionado = "Home";
switch (menuSelecionado) {
  case "Home":
    console.log(`Voçê clicou no link Home`);
    break;
  case "Quem somos":
    console.log(`Voçê clicou no Quem somos`);
    break;
  case "Contato":
    console.log(`Voçê clicou no link Contato`);
    break;
  default:
    console.log(`Opção invalida`);
    break;
}

var mes = 4;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`Primeiro trimestre`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`Segundo trimestre`);
    break;
  case 7:
  case 8:
  case 9:
    console.log(`Terceiro trimestre`);
  case 10:
  case 11:
  case 12:
    console.log(`Quarto trimestre`);
    break
  default:
    break;
}
