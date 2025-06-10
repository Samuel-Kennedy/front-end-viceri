# 📝 Desafio Frontend - Viceri (To-Do App)

Este projeto é uma aplicação **Angular** para consumir a API de tarefas (To-Do List) desenvolvida no backend. O objetivo é criar uma interface para cadastro, login e gerenciamento de tarefas pendentes do usuário.

---

## 🚀 Tecnologias Utilizadas

- Angular 12+  
- TypeScript  
- CSS básico  
- HttpClientModule (para comunicação com API RESTful)  

### ✅ Pré-requisitos

- Node.js (v14 ou superior)

- npm (geralmente instalado junto com o Node.js)

- Angular CLI (recomendado, pode ser instalado com npm install -g @angular/cli)

### 🧰 Etapas

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Samuel-Kennedy/front-end-viceri.git
   cd front-end-viceri

2. **Instale as dependências:**

- npm install

3. **Inicie a aplicação:**

- ng serve

4. **🤝 Contato**

Em caso de dúvidas, sugestões ou problemas, abra uma issue no repositório do GitHub ou envie um e-mail para: samuel.gomes@aol.com

5. **📜 Licença**

Este projeto está licenciado sob a licença MIT.

6. **E se você precisar disponibilizar essa aplicação na AWS? Descreva brevemente como o faria.** 

Para disponibilizar essa aplicação na AWS, como o projeto é composto por dois lados — o backend em Node.js/Express e o frontend em Angular — a ideia é subir ambos para a AWS, garantindo que eles continuem se comunicando normalmente.

Backend (Node.js/Express)
Eu usaria o AWS Elastic Beanstalk para hospedar o backend. Ele facilita bastante o deploy de aplicações Node.js. Subo a API por lá e configuro as variáveis de ambiente (como a chave JWT e o banco de dados).
Se estiver usando SQLite para testes, trocaria por PostgreSQL ou MySQL em produção, usando o Amazon RDS.

Frontend (Angular)
O Angular gera arquivos estáticos com o comando ng build. Esses arquivos eu colocaria num bucket do Amazon S3 com hospedagem estática ativada. Dá pra apontar um domínio personalizado, ativar HTTPS com o AWS Certificate Manager e, se quiser performance e segurança extra, usar o Amazon CloudFront como CDN.

Integração entre os dois
No código do Angular, o frontend faz requisições para a API do backend. Então, depois que o backend estiver publicado, eu só ajustaria a URL base da API no frontend (geralmente no environment.prod.ts) para apontar para o endereço do Elastic Beanstalk.

Com isso, os dois continuam se comunicando normalmente, só que agora em produção. Essa estrutura funciona bem, é escalável e fácil de manter.

