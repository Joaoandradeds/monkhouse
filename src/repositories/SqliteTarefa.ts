import { Database } from "better-sqlite3"
import { Tarefa } from "../entities"

export class SqliteTarefaRepositorio {

    db: Database

    constructor(db: Database) {
        this.db = db

        this.db.exec(`CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL UNIQUE 
        );`)
    }


    criarTarefa(nome: string) {
        this.db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({ nome })
    }

    lerTarefa(id: number): Tarefa | undefined {
        return this.db.prepare('SELECT * FROM tarefas WHERE id = @id').get({ id }) as Tarefa | undefined
    }

    lerTarefas(): Tarefa[] {
        return this.db.prepare('SELECT * FROM tarefas').all() as Tarefa[]

    }

    verificaTarefaAleatoria(): Tarefa | undefined {
        return
    }


    atualizaTarefa(tarefa: Tarefa): Tarefa | undefined {
        const resultadoAtualizacao = this.db.prepare('UPDATE tarefas set nome = @nome where id = @id').run(tarefa).changes
        if(resultadoAtualizacao === 0) {
            return 
        }
        return tarefa
       
    }

    deletaTarefa(id: number) {
      const  resultado = this.db.prepare('DELETE FROM tarefas where id = @id').run({id}).changes
        console.log(resultado)
        if(resultado == 0){
            throw new Error("Tarefa não encontrada")
        }
        
    } 


    tamanhoLista(): number {
        return this.db.prepare('SELECT count() from tarefas').get() as number

    }
}

