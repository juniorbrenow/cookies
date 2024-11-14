Popup de Cookies para Website
Este projeto é um popup de cookies moderno, elegante e responsivo, desenvolvido para coletar o consentimento de usuários em relação ao uso de cookies em um site.

📋 Índice
Sobre
Demonstração
Tecnologias Utilizadas
Como Usar
Como Personalizar
Contribuição
Licença

Sobre
O Popup de Cookies para Website é uma solução pronta para implementação em qualquer site que necessite de uma política de cookies em conformidade com a LGPD (Lei Geral de Proteção de Dados).
O projeto inclui uma interface simples, com opções para aceitar ou recusar cookies, além de um link para a página de política de privacidade.

Demonstração
Veja o popup de cookies em ação aqui.

🛠️ Tecnologias Utilizadas
HTML5
CSS3
JavaScript
Google Fonts (Poppins)
Boxicons para ícones

Como Usar
Para utilizar este popup de cookies em seu site:

Clone o repositório:
git clone https://github.com/juniorbrenow/popup-cookies.git

Adicione os arquivos ao seu projeto:

cookies.css
cookies.js
Atualize o arquivo HTML conforme necessário.
Certifique-se de que o código abaixo esteja incluído no cabeçalho do seu site:
<link rel="stylesheet" href="cookies.css">
<script src="cookies.js" defer></script>

nclua o seguinte código no body do seu site:
<div class="wrapper">
    <header>
        <i class="bx bx-cookie"></i>
        <h2>Cookies</h2>
    </header>
    <div class="data">
        <p>Este site utiliza cookies para melhorar a sua experiência. <a href="https://chatflow.click/Freelancer">Política de Privacidade</a></p>
    </div>
    <div class="buttons">
        <button class="button" id="acceptBtn">Aceitar</button>
        <button class="button" id="declineBtn">Recusar</button>
    </div>
</div>

Como Personalizar
Você pode facilmente personalizar a aparência do popup de cookies alterando o arquivo cookies.css:

Para mudar as cores do botão
.buttons .button {
    background: #4070f4;
}
Para alterar o ícone do popup, modifique a linha
<i class="bx bx-cookie"></i>

Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.

Autor
Feito com ❤️ por Junior . Sinta-se à vontade para entrar em contato!
