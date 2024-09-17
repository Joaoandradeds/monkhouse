import express from "express"
import Database from "better-sqlite3"

import { MoradorRepositorio, MemoriaTarefaRepositorio, SqliteTarefaRepositorio } from "./repositories";
import { handleAtualizaTarefa, handleCriaTarefa, handleDeletaTarefa, handleLerPorId, handleLeTarefa } from "./handlers/tarefas";
import { handleAtualizaMorador, handleCriaMorador, handleDeletaMorador, handleLerMorador, handleLerTodosMoradores } from "./handlers/morador";


const monkDB = new Database("monk.db")


const moradorRepo = new MoradorRepositorio()

//const tarefaRepo = new MemoriaTarefaRepositorio()
const tarefaRepo = new SqliteTarefaRepositorio(monkDB)

const app = express()
app.use(express.json())

// Tarefas


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
app.delete("/moradores/:id", handleDeletaMorador((moradorRepo)))

app.listen("3000")
