import { RotacaoTarefa } from "../entities/rotacaoTarefa";
import {MoradorRepositorio, RotacaoTarefaRepositorio, TarefaRepositorio  } from "../repositories";

class TarefaServices {
    
    private rotacaoTarefaRepo: RotacaoTarefaRepositorio 
    private moradorRepo : MoradorRepositorio
    private tarefaRepo : TarefaRepositorio
 

    /* 
    * [ ] tem que criar uma tarefa a cada semana
    * [ ] atribuir tarefa a morador
    * [ ] marcar tarefa como concluída 
    */

    constructor(
        rotacaoTarefa : RotacaoTarefaRepositorio , 
        moradorRepo : MoradorRepositorio,
        tarefaRepo: TarefaRepositorio
    ){
        this.rotacaoTarefaRepo = rotacaoTarefa
        this.moradorRepo = moradorRepo
        this.tarefaRepo = tarefaRepo

    }

    criaTarefa(){
        // if (this.moradorRepo.tamanhoLista() == 0 || this.tarefaRepo.tamanhoLista() == 0) {
        //     throw new Error("tarefa ou morador nâo existente")
        // }


        const morador = this.moradorRepo.verificaMoradorAleatorio()
        const tarefa = this.tarefaRepo.tarefaAleatoria()
          if (morador == undefined || tarefa == undefined) {
             throw new Error("tarefa ou morador nâo existente")
         }


         

        this.rotacaoTarefaRepo.criaTarefa(morador?.id, tarefa?.id, new Date())
    }
}

