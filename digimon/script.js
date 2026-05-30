const botao = document.getElementById("buscarBtn");

botao.addEventListener("click", buscarDigimon);


async function buscarDigimon(){


    const nomeDigimon = document
        .getElementById("digimonInput")
        .value
        .toLowerCase();

    const url =
`https://digimon-api.vercel.app/api/digimon/name/${nomeDigimon}`;

    try{

        const resposta = await fetch(url);

        const dados = await resposta.json();

        console.log(dados);


        document.getElementById("digimonNome").textContent =
            dados[0].name;


        document.getElementById("digimonLevel").textContent =
            "Nível: " + dados[0].level;


        document.getElementById("digimonImg").src =
            dados[0].img;


    }catch(error){


        alert("Digimon não encontrado!");
        alert("Tente digitar o nome corretamente.");


        console.log(error);
    }
}