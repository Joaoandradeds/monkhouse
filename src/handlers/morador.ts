import { Request, RequestHandler, Response } from "express"
import { MoradorRepositorio } from "../repositories"


export function handleCriaMorador(repo: MoradorRepositorio): RequestHandler {
    return (req: Request, res: Response) => {
        // pegar as informações da request 
        const nome = req.body.nome

        //adicionar no banco 

        repo.criaMorador(nome)

        // retornar ao usuário 
        res.json({ message: "Usuário criado com sucesso" })

    }
}


export function handleLerMorador(repo: MoradorRepositorio): RequestHandler {
    return (req: Request, res: Response) => {
        // pegar as informações da request 
        const id = parseInt(req.params.id)
        //adicionar no banco   
        const morador = repo.lerMoradores()
        if (morador == undefined) {
            res.status(404).json({ message: "id inexistente" });
            return
        }
        // retornar ao usuário 
        res.json(morador)


    }
}
export function handleLerTodosMoradores(repo: MoradorRepositorio): RequestHandler {
    return (req: Request, res: Response) => {
        // pegar as informações da request   
        //adicionar no banco   
        const moradores = repo.lerMoradores()
        // retornar ao usuário 
        res.json(moradores)

    }
}
export function handleAtualizaMorador(repo: MoradorRepositorio): RequestHandler {
    return (req: Request, res: Response) => {
        // pegar as informações da request 
        const id = parseInt(req.params.id)
        const nome = req.body.nome
        //adicionar no banco   
        try {
            const retornaMorador = repo.atualizaMorador({ nome, id })

            //retornar tudo 
            res.json({retornaMorador : "Morador Atualizado com suceso!"})

        } catch (error) {
            res.status(400).json({ message: "Morador não existe" })
            return
        }
    }
    // retornar ao usuário 


}


export function handleDeletaMorador(repo: MoradorRepositorio): RequestHandler {
    return (req: Request, res: Response) => {
        // pegar as informações da request 
        const id = parseInt(req.params.id)

        //adicionar no banco  
        const deletaMorador = repo.deletaMorador(id)

        if(!deletaMorador){
            res.status(404).json({message: "Morador Inexistente"})
            return 
        }
        // retornar ao usuário 

            res.json(deletaMorador)


    }
}