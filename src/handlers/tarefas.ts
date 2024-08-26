
import { Request, RequestHandler, Response } from "express"
import { TarefaRepositorio } from "../repositories"
import { Tarefa } from "../entities"

export function handleCriaTarefa(repo: TarefaRepositorio): RequestHandler {
  return (req: Request, res: Response) => {
    // pegar infos das reuqest
    const nome = req.body.nome

    // criar no banco
    repo.criarTarefa(nome)

    // responder usuario
    res.json({ message: "Tarefa criada com sucesso!" })
  }
}

export function handleLeTarefa(repo: TarefaRepositorio): RequestHandler {
  return (req: Request, res: Response) => {

    const todasTarefas = repo.lerTarefas()

    res.json(todasTarefas)

  }
}

export function handleAtualizaTarefa(repo: TarefaRepositorio): RequestHandler {
  return (req: Request, res: Response) => {
    //Ler as informações da request 
    const id = parseInt(req.params.id)
    const nome = req.body.nome
    //interagrir com o banco
    try {
      const retornaTarefa = repo.atualizaTarefa({ nome, id })

      //retornar tudo 
      res.json(retornaTarefa)

    } catch (error) {
      res.status(400).json({ message: "Tarefa inexistente!" })
      return
    }
  }
}
export function handleDeletaTarefa(repo: TarefaRepositorio): RequestHandler {
  return (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    // interagir com o banco 
    const deletaTarefa = repo.deletaTarefa(id)

    if (!deletaTarefa) {
      res.status(404).json({ message: "Tarefa inexistente!" })
      return
    }

    // retornar tudo 
    res.json(deletaTarefa)

  }
}

export function handleLerPorId(repo: TarefaRepositorio): RequestHandler {
  return (req: Request, res: Response) => {
    const id = req.params.id
    const tarefa = repo.lerTarefa(parseInt(id))

    if (!tarefa) {
      res.status(404).json({ message: "Tarefa inexistente!" })
      return
    }
    res.json(tarefa)
  }
}