import { MoradorRepositorio, TarefaRepositorio } from "./repositories";
import {TarefaService} from "./services"

const moradorRepo = new MoradorRepositorio() 

// const tarefaRepo = new TarefaRepositorio()

// const tarefaServices = new TarefaService()


 /*
    MORADORES

  Create -> POST /moradores
  Read -> GET /moradores/:id
  Read all -> GET /moradores?limit=10
  Update -> PATCH /moradores/:id
  Delete -> DELETE /moradores/:id

 */


  