async function somar(a, b){
    if (typeof a !== "number")
        throw new Error("Olá")
    return a + b
}

async function calcular(){
    x = await somar(2,3)
    y = await somar(4, 6)
    console.log(x + y)
}

calcular()
console.log("Bom dia!")