import { Morador } from "../entities"

export class MoradorRepositorio {
    moradores: Morador[]

    constructor() {
        this.moradores = []
    }
    
    criaMorador(nome:string) {
        const morador = {
            id: this.moradores.length,
            nome:nome
        }
      
        this.moradores.push(morador)
    }

    verificaMorador(id: number): Morador | undefined {
        for (let m of this.moradores) {
            if (m.id == id) {
                return m
            }
        }
        return undefined
    } 

    verificaMoradorAleatorio() : Morador | undefined{
        if(this.tamanhoLista() == 0){
            return 
        }

        let morador
        while(morador == undefined) {
            const idMorador = Math.floor(Math.random() % this.tamanhoLista())
            morador = this.verificaMorador(idMorador)
        }
        return morador
    }

    atualizaMorador(morador: Morador) {
        if (morador.nome == "") {
            throw new Error("nome é obrigatorio")
        }

        for (let i = 0; i < this.moradores.length; i++) {
            if (this.moradores[i].id == morador.id) {
                this.moradores[i] = morador
            }
        }
    }

    deletaMorador(id: number) {
        this.moradores = this.moradores.filter(function (morador) {
            return morador.id != id
        })
    }

    tamanhoLista() : number{
        return this.moradores.length
    }
}


