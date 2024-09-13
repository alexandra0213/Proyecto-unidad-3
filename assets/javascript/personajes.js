function generateUrl() {
  let id = Math.round(Math.random() * 500);
  return `https://narutodb.xyz/api/character/${id}`;
}
function getPersonajes() {
  $.ajax({
    type: "GET",
    url: generateUrl(),
    dataType: "json",
    async: true,
    success: function (data) {
      renderPersonajes(data);
    },
  });
}
function renderPersonajes(data) {
  let div = $("<div></div>").addClass("ficha");
  let img = $("<img />").attr("src", data.images);
  let name = $(`<h3>${data.name}</h3>`).addClass("nombre");
  let debut = $(`<h3>${data.debut.anime}</h3>`).addClass("debut");
  let jutsu = $(`<h3>${data.jutsu.slice(0, 2)}</h3>`).addClass("jutsu");
  div.append(img, name, debut, jutsu);
  $("#card").append(div);
}

$(document).ready(function () {
  for (let i = 0; i < 100; i++) {
    getPersonajes();
  }
});

// hay muchos errores :c
