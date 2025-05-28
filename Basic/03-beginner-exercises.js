/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

//const { University } = require("lucide-react")

// 1. Escribe un comentario en una línea

// Este es un comentario

// 2. Escribe un comentario en varias líneas

/* este es
 un comentario
 en varias
 lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let name1 = "valeria"
    let age = 28
    let heinght = 1.57
    let email = "community.vlo@gmail.com"
    let isStudent = true
    let isProfesor = false
    let isBootcamp = true
    let isUniversity = false
    let pet
    let partner = null
    let id = Symbol("vlo-dev")
    let followers = 817239871289371986589716389471628379612983761289376129n
// 4. Imprime por consola el valor de todas las variables
console.log(name1)
console.log(email)
console.log(age)
console.log(heinght)
console.log(isProfesor)
console.log(isStudent)
console.log(isBootcamp)
console.log(isUniversity)
console.log (pet)
console.log(partner)
console.log(id)
console.log(followers)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name1)
console.log(typeof age)
console.log(typeof email)
console.log(typeof heinght)
console.log(typeof isProfesor)
console.log(typeof isStudent)
console.log(typeof isBootcamp)
console.log(typeof isUniversity)
console.log(typeof pet)
console.log(typeof partner)
console.log(typeof id)
console.log(typeof followers)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name1 = "Nicolas"
console.log(name1)
age = 25
console.log(age)
heinght = 1.80
console.log(heinght)
email = "nicolas8a2009@gmail.com"
console.log(email)
isStudent = true
console.log(isStudent)
isProfesor = false
console.log(isProfesor)
isBootcamp = false
console.log(isBootcamp)
isUniversity = true
console.log(isUniversity)
pet
console.log(pet)
partner = null
console.log(partner)
id = Symbol("nico-8a")
console.log(id)
followers = 11111111111111111111111111111129n
console.log(followers)
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
 name1 = "40109465"                      //string ---> number
 age = "veintiocho"                     //number ---> string
 heinght = true                        //number ---> boolean
 email = undefined                    //string ---> undefined
 isStudent = "si"                    //boolean ---> string
 isProfesor = null                  //boolean ---> null
 isBootcamp = 73740                //boolean ---> number
 isUniversity = Symbol ("univ")   //boolean ---> symbol
 pet="perro"                    //undefined ---> string
 partner = false                //null ---> boolean
 id = 154862                   //symbol ---> number
 followers = "muchos"         //bigint ---> string
// 4. Imprime por consola el valor de todas las variables
console.log(name1)                     
console.log(age)                     
console.log(heinght)                     
console.log(email)                      
console.log (isStudent)                    
console.log (isProfesor)                    
console.log (isBootcamp)                       
console.log (isUniversity)                    
console.log (pet)                    
console.log (partner)                       
console.log (id)                    
console.log (followers)                    
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const user = "40109465"                      //number
const myage = "veintiocho"                     //string
const Heinght = true                        //boolean
const Email = undefined                    //undefined
const IsStudent = "si"                    //string
const IsProfesor = null                  //null
const IsBootcamp = 73740                //number
const IsUniversity = Symbol ("univ")   //symbol
const Pet="perro"                     //string
const Partner = false                //boolean
const Id = 154862                   //number
const Followers = "muchos"         //string

// 9. A continuación, modifica los valores de las constantes
//❌ No se puede modificar el valor de una variable declarada 
   //  const si es un dato primitivo.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// user = 40109465         // ❌ Error: Assignment to constant variable
// myage = 28              // ❌
// Heinght = 1.60          // ❌
// Email = "vlo@gmail.com" // ❌
// IsStudent = false       // ❌
// IsProfesor = true       // ❌
// IsBootcamp = true       // ❌
// IsUniversity = Symbol("otra") // ❌
// Pet = "gato"            // ❌
// Partner = true          // ❌
// Id = 555                // ❌
// Followers = 10000       // ❌