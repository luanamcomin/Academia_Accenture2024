#utf-8
#language: pt

Funcionalidade: preencher-info-seguro-01 - Preenchimento de informações de seguro automobilistico
    Cenário: Cadastro de veículo com dados válidos
        Dado que estou na página home
        E seleciono a aba Automobile
        E preencho os dados do veículo
        E clico em Next para informações do seguro
        E preencho as informações do seguro
        E clico em Next para informações do produto
        E preencho as informações do produto
        E clico em Next para opção de preço
        E seleciono a opção de preço
        E clico em Next para informações do orçamento
        E preencho as informações do orçamento
        Quando clico em Send
        Então Deve aparecer a mensagem 'Sending e-mail success!'