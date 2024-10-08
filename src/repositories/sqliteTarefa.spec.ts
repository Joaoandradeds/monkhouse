import Database, { Database as DatabaseType } from 'better-sqlite3'
import { SqliteTarefaRepositorio } from './SqliteTarefa'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { Tarefa } from '../entities'



describe("SQLITE tarefa", () => {
    let repo: SqliteTarefaRepositorio
    let db: DatabaseType

    beforeEach(() => {
        db = new Database('monkDbTest.db')
        repo = new SqliteTarefaRepositorio(db)
    })

    afterEach(() => {
        db.exec("DROP TABLE tarefas")
    })

    describe("cria tarefa", () => {
        test('teste de criar tarefa', () => {
            const expected = { nome: 'lavar a louça', id: 1 }
            repo.criarTarefa(expected.nome)
            const actual = db.prepare('SELECT * FROM tarefas WHERE nome = @nome').get({ nome: expected.nome })
            expect(actual).toEqual(expected)
        })

        test('Criar tarefa com o mesmo nome', () => {
            const expected = { nome: 'lavar a garagem', id: 1 }
            repo.criarTarefa(expected.nome)
            expect(() => repo.criarTarefa(expected.nome)).toThrow()

            const actual = db.prepare('SELECT COUNT(*) count FROM tarefas WHERE nome = @nome')
                .get({ nome: expected.nome }) as { count: number }
            expect(actual.count).toEqual(1)
        })
    })

    describe("ler tarefa", () => {

        test("ler tarefa com id valido", () => {
            const expected = { nome: 'lavar a louça', id: 1 }
            db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({ nome: expected.nome })

            const actual = repo.lerTarefa(1)
            expect(actual).toEqual(expected)
        })

    })

    describe("atualiza tarefa", () => {
        test("atualiza tarefa que exitse no banco", () => {
            //o que eu espero que seja no valor final esperado
            const expected = { nome: 'atualização final', id: 1 }

            //cria tarefas 
            db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({ nome: "lavar a louça" })

            //atualiza a tarefa
            const returned = repo.atualizaTarefa(expected)

            // verifica tarefa atualizada no banco
            const actual = db.prepare('SELECT * FROM tarefas where id = @id').get({id: 1})

            expect(actual).toEqual(expected)
            expect(returned).toEqual(expected)
        })

        test('atualiza tarefa que nao existe no banco', () => {
            
        
            const returnedTask = repo.atualizaTarefa({nome: 'nova tarefa', id : 1})
            expect(returnedTask).toBeUndefined()
            

        })

        test('atuliza tarefa com nome duplicado', () => {
  

            /** Antes de chamar o repo 
             *  ID |  NOME
             *  1    lavar a louca
             *  2    estender roupa 
             *  
             */

            db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({ nome: "lavar a louca" })
            db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({ nome: "estender roupa" })
            
            expect(() => repo.atualizaTarefa({nome: 'lavar a louca', id : 2})).toThrow()

            /** Depois de chamar o repo
             *  ID |  NOME
             *  1     lavar a louca   
             *  2     estender roupa
             */

            
        })
    })


    // })
    // const expected = {nome: 'limpar na frente', id: 1}


    // // db.prepare('UPDATE tarefas set nome = @nome where id = @id').run()
    // db.prepare('INSERT INTO tarefas (nome) VALUES (@nome)').run({nome: "lavar a louça"})


    // const actual = repo.atualizaTarefa(expected)
    // expect(actual).toEqual(expected)

    // describe("deleta tarefa", () => {

    // })

})
