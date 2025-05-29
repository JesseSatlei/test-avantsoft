🔧 BACKEND (NestJS)
1. Estrutura da API
Rotas:

POST /products

GET /products

GET /products/:id

PUT /products/:id

DELETE /products/:id

2. Entidade Product
Campos:

id: number (gerado automaticamente)

name: string (obrigatório, não vazio)

price: number (obrigatório, > 0)

sku: string (único)

Além disso, nos GETs, deve-se retornar:

missingLetter: string (primeira letra do alfabeto ausente no nome)

3. Banco de Dados
Use TypeORM ou Prisma com um SQLite ou PostgreSQL simples. Exemplo com TypeORM + SQLite.

4. Validações
Utilize class-validator para garantir:

name não vazio

price > 0

sku único (checar no service antes de salvar)

5. Função para calcular missingLetter
ts
Copiar
Editar
function getMissingLetter(name: string): string {
  const nameLower = name.toLowerCase().replace(/[^a-z]/g, '');
  const seen = new Set(nameLower.split(''));
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    if (!seen.has(letter)) return letter;
  }
  return '_';
}
🎨 FRONTEND (React)
1. Formulário
Campos:

Nome

Preço

SKU

2. Funcionalidades
Enviar produto para backend

Buscar lista atualizada e exibir ordenada por nome

Deletar produto

Mostrar missingLetter em cada item da lista

3. Ferramentas sugeridas
axios ou fetch

useEffect para buscar os produtos

useState para o formulário e a lista

uuid (se mockado)

Estilo com Tailwind, Bootstrap ou puro

🧪 TESTES (opcional, mas valoriza muito!)
Backend: testes unitários com Jest

Frontend: testes com React Testing Library

✅ JUSTIFICATIVA (sugestão para enviar)
Optei por usar o NestJS no backend por ser a stack indicada na vaga e por fornecer uma arquitetura escalável, modular e testável. Utilizei o TypeORM com SQLite para facilitar a persistência dos dados localmente e garantir que todas as operações seguissem os requisitos mínimos de validação, como SKU único e preço positivo. A lógica da letra ausente foi encapsulada numa função de utilidade para facilitar testes e reuso.

No frontend, utilizei React para criar uma interface responsiva e simples. Os dados são carregados a partir da API real e o estado local é utilizado para atualização reativa da lista. Optei por manter a aplicação leve, com foco na clareza de lógica e experiência do usuário.

Caso a aplicação fosse escalada, pensaria em adicionar autenticação, paginação na listagem, paginação em backend e testes automatizados no CI/CD.