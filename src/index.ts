import express from "express"
import { MoradorRepositorio, TarefaRepositorio } from "./repositories";

import { handleAtualizaTarefa, handleCriaTarefa, handleDeletaTarefa, handleLerPorId, handleLeTarefa } from "./handlers/tarefas";
import { handleAtualizaMorador, handleCriaMorador, handleDeletaMorador, handleLerMorador, handleLerTodosMoradores } from "./handlers/morador";

const moradorRepo = new MoradorRepositorio()

const tarefaRepo = new TarefaRepositorio()

const app = express()
app.use(express.json())

app.post("/tarefas", handleCriaTarefa(tarefaRepo))
app.get("/tarefas", handleLeTarefa(tarefaRepo))
app.get("/tarefas/:id", handleLerPorId(tarefaRepo))
app.patch("/tarefas/:id", handleAtualizaTarefa(tarefaRepo))
app.delete("/tarefas/:id", handleDeletaTarefa(tarefaRepo))

// Moradores 

app.post("/moradores", handleCriaMorador(moradorRepo))
app.get("/moradores/:id", handleLerMorador(moradorRepo))
app.get("/moradores", handleLerTodosMoradores(moradorRepo))
app.patch("/moradores/:id", handleAtualizaMorador(moradorRepo))
app.delete("/moradores/:id",handleDeletaMorador((moradorRepo)))

app.listen("3000")
 