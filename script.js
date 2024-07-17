    // Lista de heróis com nome e XP
    let herois = [
        { nome: "Aatrox", xp: 999 },
        { nome: "Garen", xp: 1001 },
        { nome: "Lux", xp: 2001 },
        { nome: "Teemo", xp: 5001 },
        { nome: "Rammus", xp: 7001 },
        { nome: "Nasus", xp: 8001},
        { nome: "Vayne", xp: 9001},
        { nome: "Singed", xp: 100000}
    ];
    
    // Função para classificar o nível de um herói com base no XP
    function classificarNivel(xp) {
        if (xp < 1000) {
        return "Ferro";
        } else if (xp >= 1000 && xp <= 2000) {
        return "Bronze";
        } else if (xp > 2000 && xp <= 5000) {
        return "Prata";
        } else if (xp > 5000 && xp <= 7000) {
        return "Ouro";
        } else if (xp > 7000 && xp <= 8000) {
        return "Platina";
        } else if (xp > 8000 && xp <= 9000) {
        return "Ascendente";
        } else if (xp > 9000 && xp <= 10000) {
        return "Imortal";
        } else if (xp > 10000) {
        return "Radiante";
        }
    }
    
    // Laço de repetição
    for (let i = 0; i < herois.length; i++) {
        let heroi = herois[i];
        let nivel = classificarNivel(heroi.xp);
        console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
    }
    