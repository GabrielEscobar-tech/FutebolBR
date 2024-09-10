function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p class='texto-branco'>Nenhum Clube foi encontrado ou se encontra na Série B</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let Time = "";
let Estadio = "";


for (let dado of dados) {
    Time = dado.Time.toLocaleLowerCase()
    Estadio = dado.Estadio.toLocaleLowerCase()
    if (Time.includes(campoPesquisa) || Estadio.includes(campoPesquisa)) {
        resultados += `
    <div class="item-resultado">
        <h2>                    
            <a href="${dado.Instagram}" target="_blank">${dado.Time}</a>
        </h2>
        <p class="descricao-meta">${dado.Sobre}</p>
        <p class="estadio"><strong>Estádio:</strong> ${dado.Estadio}</p>
        <p class="curiosiade"><strong>Curiosiade:</strong> ${dado.Curiosidade}</p>
            <a href="${dado.SiteOficial}" target="_blank">Site Oficial</a>
    </div>
`;
}

    
}

section.innerHTML = resultados;
}



