# Perfume Store

Full-stack demo (Express + Mongo + Vanilla JS) com frontend responsivo e backend com rotas de produtos, usuários e vendas.

## Rodar localmente

1. Configurar variáveis

Crie/edite `.env` (já existe um template):

```
PORT=5000
MONGO_URI=<sua_uri_do_mongo>
JWT_SECRET=<um_segredo_forte>
```

2. Instalar e iniciar

```
npm install
npm run seed   # opcional: popula 30 produtos
npm run dev
```

Acesse: http://localhost:5000

## Endpoints

- Produtos
  - GET /api/products?promo=true&page=1&limit=12&sort=price&meta=true (suporta cache TTL 30s)
  - POST /api/products (auth)
  - PATCH /api/products/:id (auth)
  - DELETE /api/products/:id (auth)
- Usuários
  - POST /api/users (criar)
  - GET /api/users (listar)
  - POST /api/users/login (retorna JWT)
- Vendas (protegido com Bearer token)
  - POST /api/sales (calcula total e gera invoiceNumber)
  - PATCH /api/sales/:id/status (atualiza paymentStatus)
- Uploads (protegido)
  - POST /api/uploads (multipart/form-data campo `image`) retorna `{ path }`

## Frontend
- Pasta: `frontend/`
- Responsivo (grid fluido, menu mobile, imagens lazy, badge de promoção)
- Exibe preço com desconto (finalPrice) e preço original riscado quando aplicável

### Painel Admin

- URL: `/admin`
- Login por e-mail (se usuário não existe, cria automaticamente como "Admin")
- Criação de produto (upload de imagem opcional). Upload exige token.
- Editar / Remover produtos (PATCH / DELETE com auth)
- Filtro de promoção

## Testes

Rodando:

```
npm test
```

Stack:
- Node Test Runner + Supertest
- MongoDB em memória (`mongodb-memory-server`)
- Cobertura atual: produtos (list & promo), login, criação de venda protegida.

## Cache

- Middleware simples in-memory com TTL (30s) apenas para GET /api/products.
- Cabeçalho `X-Cache: HIT|MISS` indica resultado.

## Uploads

- Usa `multer` disco local em `/uploads` (ignorada no git).
- Limite de 2MB, aceita png/jpeg/jpg/webp.
- Retorna caminho público para ser usado como `image` nos produtos.

## Segurança / Auth

- JWT via header `Authorization: Bearer <token>`.
- Rotas protegidas: criar/editar/remover produtos, criar venda, atualizar status de venda, upload.
- Segredo definido em `JWT_SECRET`.

## Próximos Passos Sugeridos

- Adicionar roles (admin vs user)
- Paginação no painel admin
- Busca textual / filtro por estoque
- Testes adicionais (upload, PATCH status, cache HIT)
- Rate limiting básico

## Notas
- Evite commitar `.env` (está no `.gitignore`).
- Ajuste a whitelist de IP no MongoDB Atlas para permitir sua máquina.
