async function somar(a,b) {
  if(typeof a !== "number")
    throw new Error("Olá")
  return a + b
}

r = somar(2, 3)
// console.log(r)
// para usar a promise
  .then(r => con. sole.log(r))
  .cath(e => console.log(e.message))
  .finally( () => console.log("fim"))

