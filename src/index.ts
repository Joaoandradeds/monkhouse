let moradores: Morador[] = []

/*
    morador
    - id
    - nome
*/

type Morador = {
    id: number
    nome: string
}

function criaMorador(morador: Morador) {
    moradores.push(morador)
}

function verificaMorador(id: number): Morador | undefined {
    for (let m of moradores) {
        if (m.id == id) {
            return m
        }
    }
    return undefined
}

function atualizaMorador(morador : Morador){
    if(morador.nome == "") {
        throw new Error("nome é obrigatorio")
    }
    
    for( let i = 0; i < moradores.length ; i++){
        if (moradores[i].id == morador.id){
            moradores[i] = morador
        }
    } 
}

function deletaMorador(id : number){
    moradores = moradores.filter(function (morador) {
        return morador.id != id
    })    
}


criaMorador({ id: 1, nome: "João" })
verificaMorador(1)
atualizaMorador({id: 1, nome: "lucas"})
deletaMorador(1)

console.log({moradores})



