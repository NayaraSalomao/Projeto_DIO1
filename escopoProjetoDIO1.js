//Após usuário logar no jogo 
console.log ("Olá! Seja bem-vindo ao desafio herói do pomar!")
//O usuário deve selecionar um dos heróis abaixo
let fichaHeroiFruta = [["Super laranja"], ["Incrível banana"], ["Mister Kiwi"], ["Limão Invisível"], ["Abacaxi mortal"], ["Poderosa Pera"]]
//Após selecioando informar ao usuário o nome do herói escolhido
//Informar ao usuário o nível do seu herói
console.log("Nome: " + fichaHeroiFruta[3][0]) 



console.log ("O jogo começou! Ganhe experiência para subir de nível!")
//contabilizando os pontos de experiência após cada ação do jogador

let experienciaXP = 100

for(let contadorXP = 100; contadorXP <11000; contadorXP += 100 )
{experienciaXP = experienciaXP +100
console.log ("Você passou de fase e ganhou 100 pontos de XP!" + contadorXP)}
console.log (experienciaXP + "XP Totais")

console.log (experienciaXP)
//Validar o nível do herói conforme padrão pré estabelecido
if(experienciaXP <=1000){
console.log("Está no nível de: Ferro")
}else if(experienciaXP >= 1001 && experienciaXP <= 2000){
console.log("Está no nível de: Bronze")}
else if(experienciaXP >= 2001 && experienciaXP <= 5000){
console.log("Está no nível de: Prata")
}else if(experienciaXP >= 5001 && experienciaXP <= 7000){
console.log("Está no nível de: Ouro")
}else if(experienciaXP >= 7001 && experienciaXP <= 8000){
console.log("Está no nível de: Platina")
}else if(experienciaXP >= 8001 && experienciaXP <= 9000){
console.log("Está no nível de: Ascendente")
}else if(experienciaXP >= 9001 && experienciaXP <= 10000){
console.log("Está no nível de:  Imortal")
}else if(experienciaXP >= 10001){
console.log ("O herói de" + " " + ("Nome: " + fichaHeroiFruta[3][0]))
console.log("Está no nível de:  Radiante")}
else{
console.log("Sinto muito, parece que estamos com problemas. Tente novamente mais tarde.")
}
 