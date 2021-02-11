# TiaGoiNsaNy JavaScript - Auxilio no Desenvolvimento

## Gerador de Senhas

Função para gerar senhas e retorna em formato `String` no seu projeto, veja os passos para o uso da Função.

### `1` **|** Instalação
```shell
$ npm install tiagoinsany.js
```

### `2.1` **|** Modo de Uso

#### `generatePassword([Options])`:

O parâmetro `Options` são todas as opções de geração da sua senha, como o uso de Numero, Letras Minúsculas ou Minúsculas, Simbolus, Remoção de Letras e Quantidades de Caracteris.

```javascript
const TiaGoiNsaNy = require("tiagoinsany.js");

let options = {
    length: 10, // --> 1 a 256
    numbers: true, // --> 0123456789
    symbols: true, // --> !@#$%^&*()+_-=}{[]|:;"/?.><,`~
    lowercase: true, // --> abcdefghijklmnopqrstuvwxyz
    uppercase: true, // --> ABCDEFGHIJKLMNOPQRSTUVWXYZ
    exclude: "abc" // --> remove a, b e c
};

async function teste () {
    let content = await TiaGoiNsaNy.generatePassword(options);

    console.log(content);
};

teste() // Retorna --> vJm1q2-1sm
```

#### `DiscordJS.InviteBlock([Options], Message)`:

O parâmetro `Options` são as opções de mensagens, como o Abilitador, Lista de Permissões em Array e Mensagem de Notificação ao autor. E o parâmetro `Message` é o parâmetro da sua função de mensagem.

```javascript
const TiaGoiNsaNy = require("tiagoinsany.js");
const Discord = require("discord.js");
const client = new Discord.Client();

let Options = {
    ability: true, // --> true ou false
    permissions: ["ADMINISTRATOR"] // --> Lista de permissões em array
    replyMessage: "{user}, você não pode convidar aqui!" // --> Placeholders: {user} = Menção do Autor e {user-name} = Username do Autor
};

client.on("message", Message => {
    TiaGoiNsaNy.DiscordJS.InviteBlock(Options, Message);
});

client.login("TOKEN-GOSTOSO");
```

### `3` **|** Parâmetros Disponiveis

#### `generatePassword:`

|Parâmetro|Tipo|Descrição|
|:--------|:---|:--------|
|length|`Number`|Numero de caracteris na senha gerada, com o numero maximo de `256` caracteris.|
|numbers|`Boolean`|Ativa a adição de Numeros na sua senha.|
|symbols|`Boolean` ou `String`|Ativa a adição de simbolus na sua senha, que pode ser alterada usando o metodo de `String` e colocando apenas os simbolus que você deseja que seja gerado na sua senha randomicamente.|
|lowercase|`Boolean`|Ativa a adição de letras minúsculas na sua senha.|
|uppercase|`Boolean`|Ativa a adição de letras maiuscolas na sua senha.|
|exclude|`String`|Remove todos as letras dentro da `String` a sua escolha.|

#### `DiscordJS.InviteBlock:`

|Parâmetro|Tipo|Descrição|
|:--------|:---|:--------|
|ability|`Boolean`|Ativa o InviteBlock na mensagem, e pode receber valores booleanos de seu Banco de Dados.|
|permissions|`Array`|Define uma lista de permissões para filtrar os membros que pode passar pelo InviteBlock.|
|replyMessage|`String`|Define a mensagem que será enviada para notificar o autor da mensagem, que possui placeholders para configurações.|