# EcoTrack 🌍

EcoTrack é uma API RESTful que incentiva ações sustentáveis relacionadas ao ODS 12 (Consumo e Produção Sustentável). A API permite que os usuários registrem ações sustentáveis, ganhem pontos e acompanhem seu progresso em direção a um estilo de vida mais sustentável.

## ✨ Funcionalidades Principais

- **Autenticação JWT**: Registro e login de usuários com autenticação segura.
- **CRUD de Ações Sustentáveis**: Criação, leitura, atualização e exclusão de ações sustentáveis.
- **Sistema de Pontuação**: Cada ação gera pontos para incentivar hábitos sustentáveis.
- **Categorias de Ações**:
  - Reciclagem
  - Energia
  - Água
  - Mobilidade
- **Documentação com Swagger**: Facilita a interação com a API.
- **Frontend Simples**: Uma página web mínima para testar a API.

## 💻 Tecnologias Utilizadas

### Backend:
- Node.js
- Express.js
- MongoDB (com Mongoose)
- JSON Web Tokens (JWT) para autenticação
- Swagger/OpenAPI para documentação

### Frontend:
- HTML
- CSS
- JavaScript (para interação com a API)

## ⚙️ Como Executar o Projeto

### ⚡ Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- MongoDB (local ou MongoDB Atlas)
- Git (opcional, para clonar o repositório)

### 🚶 Passos para Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/EcoTrack.git
cd EcoTrack
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
```env
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=seu_segredo_jwt
PORT=5000
```

4. Inicie o servidor:
```bash
npm start
```

5. Acesse a aplicação:
   - API: [http://localhost:5000](http://localhost:5000)
   - Swagger UI: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
   - Frontend: [http://localhost:5000](http://localhost:5000) (abrir o arquivo `public/index.html`)

## 🛠️ Endpoints da API

### 🔐 Autenticação
- **POST** `/api/auth/register`: Registra um novo usuário.
- **POST** `/api/auth/login`: Realiza o login e retorna um token JWT.

### 🌱 Ações Sustentáveis
- **POST** `/api/actions`: Cria uma nova ação sustentável (requer autenticação).
- **GET** `/api/actions`: Lista todas as ações do usuário (requer autenticação).
- **PUT** `/api/actions/:id`: Atualiza uma ação existente (requer autenticação).
- **DELETE** `/api/actions/:id`: Exclui uma ação (requer autenticação).

## 🌟 Exemplos de Uso

### Registro de Usuário
**Requisição:**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "usuario123",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Criação de Ação Sustentável
**Requisição:**
```bash
POST /api/actions
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Economizei 10 litros de água",
  "description": "Fechei a torneira enquanto escovava os dentes.",
  "category": "Água",
  "points": 50
}
```

**Resposta:**
```json
{
  "_id": "64f1b2c3e4b0a1a2b3c4d5e6",
  "title": "Economizei 10 litros de água",
  "description": "Fechei a torneira enquanto escovava os dentes.",
  "category": "Água",
  "points": 50,
  "createdAt": "2023-09-01T12:00:00.000Z",
  "userId": "64f1b2c3e4b0a1a2b3c4d5e6"
}
```

## ✨ Como Contribuir

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um **Pull Request**.

## 📚 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## 📞 Contato
- **Nome**: [Duarte Gauss]
- **Email**: [joaquimmateus0404@gmail.com]
- **GitHub**: [https://github.com/joaquimmateus04](https://github.com/joaquimmateus04)

## 🌐 Link da Aplicação Online
- **API**: [https://ecotrack-api.exemplo.com](https://ecotrack-api.exemplo.com)
- **Swagger**: [https://ecotrack-api.exemplo.com/api-docs](https://ecotrack-api.exemplo.com/api-docs)
- **Frontend**: [https://ecotrack.exemplo.com](https://ecotrack.exemplo.com)

