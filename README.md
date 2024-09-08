
# Desafio de Automação - Academia Accenture 2024

Este projeto tem como objetivo automatizar o processo de teste do preenchimento de formulários de seguro automotivo utilizando **Cypress**. A aplicação em teste é o simulador de seguros da **Tricentis**, que permite o preenchimento de dados do veículo, do segurado, e das opções de seguro.



## Testes Implementados

### Teste de Preenchimento de Formulário de Seguro Automotivo

Este teste cobre o fluxo de preenchimento das abas do simulador de seguro:

- **Cadastro de veículo**: Testa o preenchimento de dados do veículo.
- **Dados do segurado**: Valida o preenchimento de informações pessoais.
- **Informações do seguro**: Testa o preenchimento de informações do produto de seguro.
- **Seleção de preço**: Valida a seleção da opção de preço.
- **Envio do orçamento**: Testa o envio das informações com sucesso.

![Captura de tela de 2024-09-08 09-27-49](https://github.com/user-attachments/assets/a56d292b-8895-4340-a73e-8dad86888341)


### Teste Negativo: Data de Fabricação Inválida

- **Cenário**: Verifica se o sistema exibe uma mensagem de erro quando uma data de fabricação superior à data atual é inserida.
- **Mensagem esperada**: `"Must be today or somewhere in the past"`

![Captura de tela de 2024-09-08 09-30-20](https://github.com/user-attachments/assets/172942e5-ad4c-4468-9ac6-65b5a6f04e84)

## Estrutura do Projeto

- **e2e**: Contém os cenários de teste em formato Gherkin (.feature), como:
  - `1-info-seguro.feature`: Cenário de preenchimento correto dos dados do seguro.
  - `2-info-data-invalida.feature`: Cenário que valida o preenchimento de uma data inválida (futura).

- **pages**: Scripts JavaScript que encapsulam a interação com os diferentes formulários da aplicação.
  - `0-home.page.js`: Manipulação da página inicial da aplicação.
  - `1-vehicle-data.page.js`: Manipulação da página de dados do veículo.
  - `2-insurant-data.page.js`: Manipulação da página de dados do segurado.
  - `3-product-data.page.js`: Manipulação da página de dados do produto.
  - `4-price-option.page.js`: Manipulação da página de seleção de opções de preço.
  - `5-send-quote.page.js`: Manipulação da página de envio de cotação.
  - `error-date.page.js`: Verificação de mensagens de erro relacionadas à data.


- **step-definitions**: Definições dos passos utilizados nos cenários de teste.
  - `data-invalida.cy.js`: Implementação do teste com data inválida.
  - `preencher-abas.cy.js`: Comandos para preencher as abas do formulário.

- **support**: Contém comandos personalizados usados nos testes, como:  
  - `e2e.js`: Configuração principal para execução dos testes end-to-end no Cypress. Ele gerencia o comportamento global dos testes, incluindo a importação dos arquivos de comando e qualquer configuração antes de cada cenário.


## Como Executar os Testes

1. Para rodar os testes de maneira interativa, utilize o comando:
   ```bash
   npx cypress open
   ```

2. Para executar os testes diretamente no terminal:
   ```bash
   npx cypress run
   ```

Os cenários de teste validam fluxos completos e comportamentos de erro, como o preenchimento de uma data de fabricação do veículo no futuro, o que gera uma mensagem de erro esperada.

