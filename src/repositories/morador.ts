import { Morador, Tarefa } from "../entities"

export class MoradorRepositorio {
    moradores: Record<number, Morador>

    constructor() {
        this.moradores = {}
    }

    criaMorador(nome: string) {
        const id = Object.keys(this.moradores).length
        this.moradores[id] = {
            id: id,
            nome: nome
        }

    }

    lerMorador(id: number): Morador | undefined {
        return this.moradores[id]
    }
    lerMoradores(): Morador[] {
        return Object.values(this.moradores) 
    }

    verificaMoradorAleatorio(): Morador | undefined {
        if (this.tamanhoLista() == 0) {
            return
        }

        let morador
        while (morador == undefined) {
            const idMorador = Math.floor(Math.random() % this.tamanhoLista())
            morador = this.lerMorador(idMorador)
        }
        return morador
    }

    atualizaMorador(morador: Morador) {
        if (morador.nome == "") {
            throw new Error("nome do morador é obrigatório")
        }

        if (!(morador.id in this.moradores)) {
            throw new Error("ID INEXISTENTE")
        }

        this.moradores[morador.id] = morador
    }

    deletaMorador(id: number) : Tarefa | undefined {
        const moradorDeletado = this.lerMorador(id)
        delete this.moradores[id]
        return moradorDeletado
    }

    tamanhoLista(): number {
        return Object.keys(this.moradores).length
    }
}
