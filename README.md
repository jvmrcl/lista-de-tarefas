# Lista de Tarefas com React e Material UI

Este é um projeto de lista de tarefas simples, desenvolvido com React e estilizado com a biblioteca Material UI. Ele oferece uma maneira fácil e intuitiva de gerenciar suas tarefas diárias, permitindo que você as adicione, marque como concluídas, edite ou exclua conforme necessário. O projeto é uma ótima introdução ao desenvolvimento web com React, destacando a integração de componentes do Material UI para uma interface de usuário moderna e responsiva.

## Motivações do Projeto

As motivações por trás deste projeto surgiram da necessidade de melhorar a qualidade e a legibilidade do código-fonte de uma aplicação de lista de tarefas anteriormente existente. O código legado estava extremamente desorganizado e complexo do meu ponto de vista. Em suma, as motivações por trás desta refatoração visam tornar o código mais simples, facilitar a manutenção contínua e melhorar a experiência geral do desenvolvedor e do usuário final.

## Detalhes sobre o Projeto
### Pattern "Container and Presentation"

O padrão "Container and Presentation" é uma abordagem arquitetural comumente utilizada em projetos de médio e pequeno porte, que visa separar as responsabilidades de lógica de negócios e de apresentação dentro de um aplicativo.

#### Funcionamento do Pattern

1. **Containers (Componentes de Lógica):** Os containers são responsáveis por conter a lógica de negócios do aplicativo. Eles geralmente são componentes de nível superior que lidam com a recuperação e manipulação de dados, bem como a comunicação com APIs externas, serviços ou estado global do aplicativo. Os containers são responsáveis por buscar os dados necessários e passá-los para os componentes de apresentação.

2. **Presentation (Componentes de Apresentação)**: Os componentes de apresentação, como o nome sugere, são responsáveis por exibir a interface do usuário e interagir com o usuário. Eles são geralmente componentes de baixo nível que se concentram em exibir informações e responder a eventos do usuário. Os componentes de apresentação recebem dados e funções de manipulação de eventos por meio de props, permitindo que sejam reutilizados e mantidos de forma independente da lógica de negócios.

### Vantagens desse Pattern

- **Separação de Responsabilidades**: Ao separar a lógica de negócios da interface do usuário, torna-se mais fácil entender, testar e dar manutenção ao código.
- **Reutilização de Componentes**: A divisão entre containers e componentes de apresentação promove a reutilização de código, uma vez que os componentes de apresentação podem ser facilmente reutilizados em diferentes contextos.
- **Melhoria de Legibilidade**: A clara distinção entre containers e componentes de apresentação melhora a legibilidade do código, facilitando a identificação de onde a lógica está sendo aplicada e onde a interface do usuário está sendo renderizada.

## Instalação

Antes de começar, certifique-se de ter o Node.js e o Git instalados em sua máquina.

1. **Node.js:** Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/en). Siga as instruções de instalação adequadas para o seu sistema operacional.
2. **Git**: Git: Se você ainda não tem o Git instalado, você pode baixá-lo e instalá-lo a partir do [site oficial do Git](https://git-scm.com). Novamente, siga as instruções de instalação para o seu sistema operacional.

Com o Node.js e o Git instalados, siga as etapas abaixo para configurar e executar o projeto:

1. **Baixando ou Clonando:** Você pode baixar os arquivos do projeto e colocá-los em uma pasta de sua escolha, ou clonar o repositório usando o Git. Utilize o seguinte comando para clonar o repositório:

```
git clone https://github.com/jvmrcl/lista-de-tarefas.git
```

2. **Instalando Dependências e Iniciando o Projeto:** Após baixar ou clonar o repositório, navegue até o diretório do projeto em seu terminal. Em seguida, execute os seguintes comandos:

```
npm install
npm start
```

Se tudo estiver configurado corretamente, você verá a página inicial do projeto aberta em seu navegador padrão. Agora você está pronto para começar a usar a aplicação de lista de tarefas!

## Links Oficiais das Bibliotecas Utilizadas

Para saber mais sobre as tecnologias utilizadas neste projeto, você pode acessar os seguintes links:

- **React:** O React é uma biblioteca JavaScript para a construção de interfaces de usuário. Para obter mais informações e recursos, visite o [site oficial do React](https://react.dev/).
- **Material UI:** O Material UI é uma biblioteca de componentes React que implementa o design de materiais do Google. Para explorar os componentes disponíveis e aprender como usá-los em seus próprios projetos, visite o [site oficial do Material UI](https://mui.com/material-ui/).
