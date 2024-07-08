
interface Tarefa {
    id: number
    nome: string
}
class TarefaRepositorio {
    tarefas: Tarefa[]
    constructor() {
        this.tarefas = []
    }


    criarTarefa(nome: string) {
        let tarefa: Tarefa = {
            id: 0,
            nome: nome

        }
        this.tarefas.push(tarefa)

    }

    lerTarefa(id: number): Tarefa | undefined {
        for (let t of this.tarefas) {
            if (t.id == id) {
                return t
            }
        }

    }
    atualizaTarefa(tarefa: Tarefa) {
        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].id == tarefa.id) {
                this.tarefas[i] = tarefa
            }
        }
    }


    deletaTarefa(id: number) {
        this.tarefas = this.tarefas.filter(function (tarefa) {
            return tarefa.id != id
        })

    }



}

