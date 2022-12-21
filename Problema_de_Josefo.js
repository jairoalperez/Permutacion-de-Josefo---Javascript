/* 

    Quiz Moviles 2022B
    Jairo Perez C.I.28336214

    "LA PERMUTACION DE JOSEPHUS"

*/


/*Aqui se colocan las cifras a manejar, el primer valor es el numero de elementos a manejar, y el segundo valor es el numero de espacios a contar.
En nuestro caso seria:
1er valor = Numero de Prisioneros.
2do valor = Cada cuantos espacios se asesinara un prisionero.*/ 
josefo(40,3)

function josefo(n,k) {
    
    //Se crean los arreglos en donde se guardaran las cifras
    let individuos = []
    let filtro = []
    let contador = k

    //Se llena el arreglo 'individuos' con los elementos iniciales, en este caso seria la lista de prisioneros.
    for (let i=1; i<=n; i++) {
        individuos.push(i)
    }
    console.log('')
    console.log('la lista de prisioneros es: ['+individuos+']')


    //Se sigue ejecutando hasta que no quedan elementos dentro del arreglo 'individuos', en este caso se ejecuta hasta que ya no quedan prisioneros vivos.
    while (individuos.length > 0) {

        for (let i=0; i<individuos.length; i++) {
            contador--
    
            if (contador === 0) {
                filtro.push(individuos[i])
                contador = k
            }
        }

        individuos = individuos.filter(individuo => {
            return !filtro.includes(individuo)
        })

    }

    console.log('')
    console.log('El orden de prisioneros asesinados seria el siguiente: ['+filtro+']')
    console.log('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
    
    return individuos[0]

}

