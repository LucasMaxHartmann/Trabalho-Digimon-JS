const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    buscarDigimon();
});

async function buscarDigimon() {

    const nomeDigimon = document
        .getElementById("digimonInput")
        .value
        .trim();

    if (nomeDigimon === "") {

        alert("Digite o nome de um Digimon!");

        return;
    }

    try {

        const resposta = await fetch(
            `https://digimon-api.vercel.app/api/digimon/name/${nomeDigimon}`
        );

        const dados = await resposta.json();

        document.getElementById("digimonNome").textContent =
            dados[0].name;

        document.getElementById("digimonLevel").textContent =
            "Nível: " + dados[0].level;

        document.getElementById("digimonImg").src =
            dados[0].img;

    } catch (erro) {

        alert("Digimon não encontrado!");
    }
}
