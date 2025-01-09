# Interface de Filmes

Este é um projeto simples de uma interface de filmes que exibe uma lista de filmes em formato de cards. Cada card apresenta a imagem do filme, seu título, uma descrição resumida e uma classificação em forma de estrelas. A aplicação utiliza a API TMDB (“The Movie Database”) para obter os dados.

## Funcionalidades

- **Exibição de lista de filmes:**
  Uma lista de filmes é apresentada em um layout limpo e responsivo.

- **Detalhes resumidos:**
  Cada card inclui:
  - Pôster do filme.
  - Título do filme.
  - Classificação (em estrelas, baseada na nota).
  - Descrição resumida (com limite de 100 caracteres).

- **Tecnologias utilizadas:**
  - **Next.js**: Framework React para renderização e otimização de performance.
  - **TMDB API**: Para buscar os filmes e suas informações.
  - **SCSS**: Para estilização customizada dos componentes.

## Requisitos

- **Node.js** v14 ou superior
- **NPM** ou **Yarn** para gerenciar dependências
- Chave de API do TMDB (necessário se registrar em [TMDB](https://www.themoviedb.org/)).

## Instalação e Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/interface-filmes.git
   cd interface-filmes
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure a chave da API TMDB:**

   Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=sua_chave_da_api
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O aplicativo estará disponível em: [http://localhost:3000](http://localhost:3000).

## Estrutura de Pastas

```plaintext
src/
 |-- componentes/
 |     |-- MovieCard/    # Componente para exibir os cards de filmes
 |-- pages/
 |     |-- index.tsx     # Página inicial com a lista de filmes
 |-- styles/             # Arquivos SCSS para estilização
```

## Estilização
O projeto utiliza SCSS para estilização. Os estilos dos cards incluem:

- Layout responsivo.
- Destaque para o pôster do filme.
- Classificação visual em estrelas com base na nota.

## API TMDB
Para consumir os dados do TMDB:

1. Crie uma conta no site [TMDB](https://www.themoviedb.org/).
2. Obtenha sua chave de API em “Configurações de API”.
3. Substitua a chave no arquivo `.env.local`.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch para suas alterações:

   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m "Descrição das alterações"
   ```

4. Faça o push para a branch:

   ```bash
   git push origin feature/nome-da-sua-feature
   ```

5. Abra um Pull Request no repositório original.

**Divirta-se explorando a interface de filmes!**

