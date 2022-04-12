// Exercicio 1
const recebeString = (nome: string, data: string): string =>  {
    
    const dia = data.split('/')[0]
    const mes = data.split('/')[1]
    const ano = data.split('/')[2]
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`
}



//Exercicio 2

const qualquer = (param: any) => {
    return typeof param
}

//Exercicio 3

enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}
type filmes = {

    nome: string,
    anoDeLancamento: number,
    genero: GENERO,
    pontuacao?: number 
}


const filme = (nome: string, anoDeLancamento: number, genero: GENERO, pontuacao?: number ): filmes => {
    if(pontuacao){
        return {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero,
            pontuacao: pontuacao
        }
    } else {
        return {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero,
        }
    }
}

// Exercicio 4 

enum Setores {
    marketing= "marketing",
    vendas= "vendas",
    financeiro= "financeiro"
}

type pessoas = {
    nome: string,
    salário: number,
    setor: Setores,
    presencial: boolean
}



const marketingPresencial = (array: pessoas[]) => {
    const filtrarPorSetor = array.filter((pessoa) => {
            return pessoa.setor === Setores.marketing && pessoa.presencial
        })

        return filtrarPorSetor
}

const array: pessoas[] = [
	{ nome: "Marcos", salário: 2500, setor: Setores.marketing, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.vendas, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.financeiro, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.marketing, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.financeiro, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.vendas, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.marketing, presencial: true }
]

// Exercicio 5
type TypePessoas = {
    name: string,
    email: string,
    role: EnumPessoas
}

enum EnumPessoas {
    user = "user",
    admin = "admin"
}

const arrayDePessoas: TypePessoas[] = [
	{name: "Rogério", email: "roger@email.com", role: EnumPessoas.user },
	{name: "Ademir", email: "ademir@email.com", role: EnumPessoas.admin},
	{name: "Aline", email: "aline@email.com", role: EnumPessoas.user},
	{name: "Jéssica", email: "jessica@email.com", role: EnumPessoas.user},  
	{name: "Adilson", email: "adilson@email.com", role: EnumPessoas.user},  
	{name: "Carina", email: "carina@email.com", role: EnumPessoas.admin}      
] 

const emailAdmin = (array: TypePessoas[]) => {
    const filtrarAdmin = array.filter(pessoa => {
        if(pessoa.role === EnumPessoas.admin)
        return pessoa.email 
    }).map(pessoa => {
        return pessoa.email
    })
    return filtrarAdmin
}


// Exercicio 6

[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
