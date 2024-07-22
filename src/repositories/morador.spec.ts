 import { expect, test } from 'vitest'
 import { MoradorRepositorio } from './morador'
 
 test('should create a resident', () => {
   const repo = new MoradorRepositorio()
   const expected = {nome:"Lucaspicoron" , id : 0}
   repo.criaMorador(expected.nome)
   const actual  = repo.verificaMorador(expected.id) 
   expect(actual).toEqual(expected)
 })

 test("should avoid duplicated id", () =>{
    const repo = new MoradorRepositorio()
    const nome = "Lucaspicoron"
    repo.criaMorador(nome)
    repo.criaMorador(nome)
    const actual = repo.verificaMorador(0)
    expect(actual).toEqual({nome : nome, id : 0})
    expect(repo.tamanhoLista()).toBe(2)
    const actual01 = repo.verificaMorador(1)
    expect(actual01).toEqual({nome : nome, id : 1})

    

  
 })