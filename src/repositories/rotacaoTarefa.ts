import { RotacaoTarefa } from "../entities/rotacaoTarefa";

export class RotacaoTarefaRepositorio {
   
    private rotacoes: RotacaoTarefa[]
    constructor() {
        this.rotacoes = [
            {
                id: 0,
                criadoEm: new Date(),
                idMorador: 0,
                idTarefa: 1,
                tarefaFeita: false
            }
        ]
    }

    criaTarefa(idMorador: number, idTarefa: number, data: Date) {
        const tarefa: RotacaoTarefa = {
            id: this.rotacoes.length,
            idMorador: idMorador,
            idTarefa: idTarefa,
            criadoEm: data,
            tarefaFeita: false
        }
        this.rotacoes.push(tarefa)
    }


    atualizaTarefa(rotacaoTarefa: RotacaoTarefa) {
        for (let i = 0; i < this.rotacoes.length; i++) {
            if (this.rotacoes[i].id == rotacaoTarefa.id) {
                this.rotacoes[i] = rotacaoTarefa
            }
        }

    }

    lerTarefa(id: number) : RotacaoTarefa | undefined {
        for(let i of this.rotacoes){
            if(i.id == id){
                return i
            }
        }
    }
}


const repo = new RotacaoTarefaRepositorio()

repo.criaTarefa(1, 2, new Date())
