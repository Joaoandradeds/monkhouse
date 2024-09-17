import { Database } from "better-sqlite3"
import { Tarefa } from "../entities"

export class SqliteTarefaRepositorio {

    db: Database

    constructor(db: Database) {
        this.db = db

        this.db.exec(`CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL
        );`)
    }


    criarTarefa(nome: string) {
         this.db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({nome})
    }

    lerTarefa(id: number): Tarefa | undefined {
        return this.db.prepare('SELECT * FROM tarefas WHERE id = @id').get({id}) as Tarefa | undefined
    }

    lerTarefas(): Tarefa[] {
        return []
    }

    verificaTarefaAleatoria(): Tarefa | undefined {
        return
    }


    atualizaTarefa(tarefa: Tarefa) : Tarefa {
        return tarefa
    }

    deletaTarefa(id: number) : Tarefa | undefined{
        return
    }

    tamanhoLista(): number {
        return 0
    }
}

