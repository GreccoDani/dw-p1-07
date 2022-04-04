let nro1 = null,
    nro2 = null
    resultado = null;

    function obtenerNumero1(){

        do{
           
          nro1 =  parseInt(prompt('Ingrese primer valor'))
        }while(isNaN(nro1));
 
        console.log(`El primer numero es ${nro1}`);
    }

function obtenerNumero2(){
    do{
           
        nro2 =  parseInt(prompt('Ingrese primer valor'))
      }while(isNaN(nro2));

      console.log(`El segundo numero es ${nro2}`);
    }


    function operacion(operacion){
        if(nro1 == null || nro2 == null){
            alert `Imposible realizar operación, faltan datos`;
        } else {
            switch(operacion) {
                    case 'sumar':
                        resultado = nro1 + nro2;
                        console.log('Seleccionaste suma')
                        break;
                    case 'restar':
                        resultado = nro1 - nro2;
                        console.log('Seleccionaste resta')
                        break;
                    case 'multiplicar':
                        resultado = nro1 * nro2;
                        console.log('Seleccionaste multiplicacion')
                        break;
                    case 'dividir':
                        resultado = nro1 / nro2;
                        console.log('Seleccionaste division')
                        break;
                }
            }
    }
        
        function mostrar(){
            if(resultado == null){
                alert ` Imposible mostrar resultado, NO se a realizado ninguna operación`;
            } else{
                alert('El resultado de la operacion es ' + resultado) ;
            }
        }