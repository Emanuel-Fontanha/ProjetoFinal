# Divisão de Tarefas

## Páginas do Frontend
1. [ ] Login: PV
2. [ ] Carrinho: PV
3. [ ] Cadastro: Emanuel
4. [ ] Pijamas: Emanuel
5. [ ] Favoritos: PK
6. [ ] Home: PK
7. [ ] Feedback: Hudson
8. [ ] Pijama: Hudosn

## Backend
1. [X] Fazer config do back (ambientação)
2. [ ] CRUD (endpoints de user e feedback)
3. [ ] Modelagem inicial (p1: pijamas, p2: checkout)
4. [ ] Finalização e polimentos

# Convetional commits (CCs): a padronização dos commits

## Termos-chave dos CCs

- `feat:` criação de algo novo
- `refactor:` pegar algo funcional que já existia e mudar
- `fix:` pegar algo que não funcionava e corrigir
- `style:` mudar algum estilo ou organização de código
- `chore:` mudar arquivos de configuração
- `docs:` mudar arquivos de documentação

## Forma padrão dos commits

- A mensagem deve ser grande o suficiente para conseguirmos entender o grosso da mudança só com ela, mas pequena o suficiente para não ser um texto de 5 linhas. Forma de base: "termo-chave: pequena mensagem explicativa sobre a nova mudança". Exemplos:
- `fix: correção de tipagem de parâmetros na função funcExemplo()`
- `feat: subindo página de login finalizada`

# Padrão declarativo do frontend

- **camelCase**: funções, variáveis, classNames, ids, constantes do front, atributos e métodos de classes/interfaces

        // exemplos
        funcaoExemplo(exParametro: string)
        variávelExemplo
        styles.homePageContainer
        id = "loginInput"
        const [exemplo, setExemplo] = useState()
        const { exUso01, exUso02, exUso03 } = props
        precoPijama: string
        getPrecoPijama()

- **SCREAMING CASE**: constantes de configuração e constantes efetivamente constantes

        // exemplos
        const NODE_ENV = valor
        const PI = 3.1415

- **PascalCase**: classes, interfaces e tipos

        // exemplos
        class ExemploClasse {...}
        interface ExemploInterface {...}
        type ExemploTipo = string | null

- **kebab-case**: nomes de quaisquer arquivos

        // exemplos
        componente-home-page
        serviço-exemplo.ts
        user-icon.png
        carrinho.jpg

## Regras gerais de organização

- Se a interface/classe/tipo é usada apenas em 1 arquivo, deixar no arquivo. Se usar em mais de um, colocar no arquivo "ui-interfaces.ts".
- Antes de dar commit num arquivo, usar o comando do prettier para manter o padrão de organização (shift + alt + f). Caso não saiba usar o prettier, tenha problemas ou não o tenho baixado, fale comigo (Emanuel)
