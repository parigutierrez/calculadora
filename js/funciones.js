  var num1 = 0;
  var num2 = 0;
  var operacion;

function mostrar(valor){
  var input = document.getElementById('numeros');
  input.value += valor;
}

function borrar(){
var borrar = document.getElementById('numeros');
 borrar.value = "";
}

//function sumar() {
//	return input.value += valor;
//}



function esIgual(){
            num1 = parseFloat(num1);
            switch (operacion){
                case 1:
                    num1 += num2;
                break;
                case 2:
                    num1 = num2 - num1;
                break;
                case 3:
                    num1 *= num2;
                break;
                case 4:
                    num1 = num2 / num1;
                break;
            }
          }
