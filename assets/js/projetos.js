/* let projeto = []
const projetoAPI = 'assets/js/json/listaProjetos.json'
geraProjetos()

async function geraProjetos() {
    const imp = await fetch(projetoAPI)
    projetos = await imp.json()
    exibirProjetos(projetos)
}

const inserirProjetos = document.getElementById('projetos')

function exibirProjetos(listaDeProjetos) {
    listaDeProjetos.forEach(projeto => {
        inserirProjetos.innerHTML += `
        <div class="project-card">
			<p class="project-name">${projeto.nome}</p>
			<a href="${projeto.link}"><img src="${projeto.imagem}" alt="${projeto.alt}" class="project-img"></a>
			<p>${projeto.descricao}</p><br>
		</div>
        `
    })
}
*/