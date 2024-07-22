import { RotacaoTarefa } from "../entities/rotacaoTarefa";

export class RotacaoTarefaRepositorio {
    private rotacoes : RotacaoTarefa[]
    constructor(){
        this.rotacoes = []
    }

    criaTarefa(idMorador : number, idTarefa : number, data : Date){
        const tarefa = {
            idMorador: idMorador,
            idTarefa: idTarefa,
            data: data,
            fezTarefa: false
        }
        this.rotacoes.push(tarefa)
    }
} 



const repo = new RotacaoTarefaRepositorio()

repo.criaTarefa(1, 2, new Date())
