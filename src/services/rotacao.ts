import { RotacaoTarefa } from "../entities/rotacaoTarefa";
import { MoradorRepositorio, RotacaoTarefaRepositorio, TarefaRepositorio } from "../repositories";

export class TarefaService {

    private rotacaoTarefaRepo: RotacaoTarefaRepositorio
    private moradorRepo: MoradorRepositorio
    private tarefaRepo: TarefaRepositorio


    /* 
    * [ ] tem que criar uma tarefa a cada semana
    * [x] atribuir tarefa a morador
    * [ ] marcar tarefa como concluída 
    */

    constructor(
        rotacaoTarefa: RotacaoTarefaRepositorio,
        moradorRepo: MoradorRepositorio,
        tarefaRepo: TarefaRepositorio
    ) {
        this.rotacaoTarefaRepo = rotacaoTarefa
        this.moradorRepo = moradorRepo
        this.tarefaRepo = tarefaRepo

    }

    criaTarefa() {
        const morador = this.moradorRepo.verificaMoradorAleatorio()
        const tarefa = this.tarefaRepo.tarefaAleatoria()
        if (morador == undefined || tarefa == undefined) {
            throw new Error("tarefa ou morador nâo existente")
        }

        this.rotacaoTarefaRepo.criaTarefa(morador?.id, tarefa?.id, new Date())
    }

    tarefaConcluida(id : number){
        const tarefaASerConcluida =  this.rotacaoTarefaRepo.lerTarefa(id)
        if (tarefaASerConcluida == undefined){
            return
        } 
        tarefaASerConcluida.tarefaFeita = true
        this.rotacaoTarefaRepo.atualizaTarefa(tarefaASerConcluida)


    }
}

