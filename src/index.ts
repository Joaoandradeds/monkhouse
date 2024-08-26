import express from "express"
import { MoradorRepositorio, TarefaRepositorio } from "./repositories";

import { handleAtualizaTarefa, handleCriaTarefa, handleDeletaTarefa, handleLerPorId, handleLeTarefa } from "./handlers/tarefas";

const moradorRepo = new MoradorRepositorio()

const tarefaRepo = new TarefaRepositorio()

const app = express()
app.use(express.json())

app.post("/tarefas", handleCriaTarefa(tarefaRepo))
app.get("/tarefas", handleLeTarefa(tarefaRepo))
app.get("/tarefas/:id", handleLerPorId(tarefaRepo))
app.patch("/tarefas/:id", handleAtualizaTarefa(tarefaRepo))
app.delete("/tarefas/:id", handleDeletaTarefa(tarefaRepo))

app.listen("3000")
