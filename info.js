
export const render = async(data)=>{
    let mostrar = document.getElementById("element")
    mostrar.innerHTML += `
    <h1>${data.name}</h1>
    `
}




