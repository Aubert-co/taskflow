##  Requisitos do Projeto

### 🔹 1. Requisitos Funcionais

1. O usuário deve poder **criar uma conta e fazer login** usando autenticação JWT.  
2. O usuário deve poder **criar, editar e excluir tarefas**, sendo essas operações processadas em **filas BullMQ**.  
3. O usuário deve poder **listar todas as suas tarefas**, filtrando por status (pendente, concluída, em progresso).  
4. As tarefas devem conter os seguintes campos:

   | Campo       | Tipo      | Descrição                                |
   |--------------|-----------|------------------------------------------|
   | `id`         | `string`  | Identificador único da tarefa            |
   | `title`      | `string`  | Título da tarefa                         |
   | `description`| `string`  | Descrição detalhada da tarefa            |
   | `status`     | `string`  | Estado atual (`pending`, `done`, etc.)   |
   | `deleted`    | `boolean` | Indica se a tarefa foi excluída          |
   | `createdAt`  | `Date`    | Data de criação                          |
   | `updatedAt`  | `Date`    | Data da última atualização               |

5. O usuário deve poder **marcar tarefas como concluídas**.  
6. O sistema deve registrar **logs** das ações do usuário (criação, exclusão, edição).  

---

### 🔹 2. Requisitos Não Funcionais

1. O sistema deve ser desenvolvido em **NestJS com TypeScript**.  
2. O banco de dados deve ser **PostgreSQL**.  
3. O sistema deve utilizar **BullMQ + Redis** para o gerenciamento de filas.  
4. As requisições devem ser protegidas com **CORS** e **JWT**.  
5. O código deve seguir boas práticas de **Clean Code** e **arquitetura modular**.  
6. Devem existir **testes automatizados** (unitários e e2e) com **Jest**.  
7. O sistema deve registrar **logs de erros e eventos importantes**.  
8. A API deve retornar respostas padronizadas em formato **JSON**.  



