function positions(firstPlace, secondPlace,lastPlace){
  let podio=[firstPlace, secondPlace,lastPlace]
  if(secondPlace == "Daniel"){
    return  "1ª - Colocado " + podio[1] +
            " 2ª - Colocado " + podio[0] +
            " 3ª - Colocado " + podio[2]
  }else if(lastPlace == "Daniel"){
    return  "1ª - Colocado " + podio[0] +
            " 2ª - Colocado " + podio[2] +
            " 3ª - Colocado " + podio[1] 
  } else{ 
    return  "1ª - Colocado " + podio[0] +
            " 2ª - Colocado " + podio[1] +
            " 3ª - Colocado " + podio[2]

  }


}

/**
 * Criar uma função com três parametros
 * Criar um array com esses três parametros
 * A posição em que o nome for inserido no array define a posição do jogador no pódio
 * Se Daniel for segundo, ele passa a ser primeiro
 * Se Daniel for terceiro, ele passa a ser segundo
 * Se Daniel for primeiro, ele mantém a posição
 * 
 * 
 */
