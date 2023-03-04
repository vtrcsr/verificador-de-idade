function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value == 0 || Number(fano.value) > ano) {
    window.alert("Tente Novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = "masculino"
      if (idade <= 12) {
        img.setAttribute('src','imgs/menino.jpg')
      } else if (idade <= 24) {
        img.setAttribute('src','imgs/adolescentehomem.jpg')
      } else if (idade <= 60) {
        img.setAttribute('src','imgs/homemadulto.jpg')
      } else {
        img.setAttribute('src','imgs/idoso.jpg')
      }
    } else {
      genero = "feminino";
      if (idade <= 12) {
        img.setAttribute('src','imgs/menina.jpg')
      } else if (idade <= 24) {
        img.setAttribute('src','imgs/jovemmulher.jpg')
      } else if (idade <= 60) {
        img.setAttribute('src','imgs/mulheradulta.jpg')
      } else {
        img.setAttribute('src','imgs/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Seu gênero é <strong>${genero}</strong> e você tem <strong>${idade} anos</strong>`
    res.appendChild(img)
  }
}