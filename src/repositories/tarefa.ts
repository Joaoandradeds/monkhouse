import { Tarefa } from "../entities"

export class TarefaRepositorio {
    tarefas: Record<number, Tarefa>

    constructor() {
        this.tarefas = {}
    }


    criarTarefa(nome: string) {
        const id = Object.keys(this.tarefas).length
        this.tarefas[id] = {
            id: id,
            nome: nome
        }

    }

    lerTarefa(id: number): Tarefa | undefined {
        return this.tarefas[id]
    }

    lerTarefas(): Tarefa[] {
        return Object.values(this.tarefas)
    }

    verificaTarefaAleatoria(): Tarefa | undefined {
        if (this.tamanhoLista() == 0) {
            return
        }
        const index = Math.floor(Math.random() * 10 % this.tamanhoLista()) 
        return Object.values(this.tarefas)[index]
    }



    atualizaTarefa(tarefa: Tarefa) : Tarefa {
        if (tarefa.nome == "") {
            throw new Error("nome da tarefa é obrigatorio!")
        }

        if (!(tarefa.id in this.tarefas)) {
            throw new Error("ID de tarefa inexistente")
        }
        this.tarefas[tarefa.id] = tarefa
        return tarefa
    }

    deletaTarefa(id: number) : Tarefa | undefined{
        const tarefaDeletada = this.lerTarefa(id)
        delete this.tarefas[id]
        return tarefaDeletada
    }

    tamanhoLista(): number {
        return Object.keys(this.tarefas).length
    }
}

