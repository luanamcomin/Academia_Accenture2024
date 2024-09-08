#utf-8
#language: pt

Funcionalidade: preencher-info-seguro-01 - Preenchimento de informações de seguro automobilistico
    Cenário: Cadastro de veículo com data inválida
    Dado que estou na página home
    E seleciono a aba Automobile
    Quando preencho os dados do veículo com data superior a de hoje
    Então deve aparecer uma mensagem de erro 'Must be today or somewhere in the past'
