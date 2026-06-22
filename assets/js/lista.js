async function carregarUsuarios() {

    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let usuarios = await response.json()

    let areaDosContatos = document.querySelector(".users")
    areaDosContatos.innerHTML = ""//apagar tudo e mostrar apenas o último

    for (let i in usuarios) {//percorre arrays
        areaDosContatos.innerHTML += //mantem o que ja existe e add mais um card
        `<div>
            <h3>Nome: ${usuarios[i].name} </h3>
            <p>Email: ${usuarios[i].email} </p>
            <p>Empresa: ${usuarios[i].company.name}</p>
            <p>Endereço: ${usuarios[i].address.city}</p>
        </div>
        <hr>`
    }

}

carregarUsuarios()

/*Array
↓
Loop
↓
HTML
↓
Tela*/