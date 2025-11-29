# Como Configurar e Executar os Testes

## Incialização 
      npm init playwright@latest //Instala o Playwright no projeto
      npx playwright test //Executa todos os testes do projeto

## Testes
### Teste 1 — Carregamento Inicial  
  - A página abre corretamente
  - Campos e botões principais estão visíveis

### Teste 2 — Validação dos Campos Obrigatórios
  - Ao clicar em Enviar com campos vazios:
  - Uma mensagem de erro é exibida

### Teste 3 — Cadastro Bem-Sucedido
  - Ao preencher os dados e clicar em Enviar:
  - O usuário aparece na lista de cadastros

### Teste 4 — Evitar Cadastros Duplicados
  - Ao enviar os mesmos dados duas vezes:
  - Um alert é disparado informando "Usuário já cadastrado!"

### Teste 5 — Limpar Lista de Usuários
  - Ao clicar em Limpar Cadastros:
  - Todos os itens da lista desaparecem

## Observações 
Os testes acessam a página local via:

    const caminho = file:///C:/Users/.../index.html //Mude conforme seu caminho

