/**
 * Envia puntaje
 */
const url = 'https://739erc48wj.execute-api.us-east-1.amazonaws.com/prod/puntajes';
function enviarPuntaje(score)
{
  var name=document.getElementById('myForm-Name').value;

    axios.post(url, {
      nickname: name,
      puntos: score
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  $('#myForm').hide();
  $('.enviar').hide();
  document.getElementById('myForm-Name').value="";
}
