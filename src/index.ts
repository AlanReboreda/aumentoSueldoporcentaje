let btnEnv = document.getElementById("btnEnviar");
let sueldoingresado = document.getElementById("sueldoingresado");
btnEnv.addEventListener("click", () => {

  let sueldo1: number = 15000
  let suelto2: number = 20000
  let sueldo3: number = 25000
  if(sueldo1 > suelto2 && sueldo1 > sueldo3){
    console.log("resive 20%")
  }else if(suelto2 > sueldo3 && suelto2 > sueldo3)
  console.log("resive 10%"){
 }else if(sueldo3 > sueldo1 && sueldo3 > suelto2)
 console.log("resive 5%"){
}