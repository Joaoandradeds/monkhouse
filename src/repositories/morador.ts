import { Morador } from "../entities"

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

    verificaMorador(id: number): Morador | undefined {
        return this.moradores[id]
    }

    verificaMoradorAleatorio(): Morador | undefined {
        if (this.tamanhoLista() == 0) {
            return
        }

        let morador
        while (morador == undefined) {
            const idMorador = Math.floor(Math.random() % this.tamanhoLista())
            morador = this.verificaMorador(idMorador)
        }
        return morador
    }

    atualizaMorador(morador: Morador) {
        if (morador.nome == "") {
            throw new Error("nome é obrigatorio")
        }

        if (!(morador.id in this.moradores)) {
            throw new Error("ID INEXISTENTE")
        }

        this.moradores[morador.id] = morador
    }

    deletaMorador(id: number) {
        delete this.moradores[id]
    }

    tamanhoLista(): number {
        return Object.keys(this.moradores).length
    }
}
