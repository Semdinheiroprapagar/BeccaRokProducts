# Becca Rok Produtos - Site

Este é o código-fonte do site da Becca Rok Produtos, uma landing page com foco na apresentação de produtos.

## Instruções para Imagens

### Banner Principal
O site requer uma imagem de banner para a seção inicial. Esta imagem deve ser colocada em:
```
/img/banner.png
```

Especificações recomendadas para o banner:
- Resolução: 1920x800 pixels
- Formato: PNG com fundo transparente ou JPG
- Estilo: Imagem que represente os produtos da marca, preferencialmente com tons em preto, branco e cinza escuro
- A imagem deve permitir boa legibilidade do texto sobreposto

### Imagens de Produtos
As imagens de produtos devem ser nomeadas seguindo o padrão abaixo e colocadas na pasta /img/:
```
/img/produto1.png
/img/produto2.png
...até...
/img/produto24.png
```

Especificações recomendadas para as imagens de produtos:
- Resolução: 800x800 pixels
- Formato: PNG com fundo transparente
- Estilo: Fotos profissionais dos produtos sobre fundo neutro

### Logo
A logo da marca deve ser colocada em:
```
/img/logo.png
```

Especificações recomendadas para a logo:
- Formato: PNG com fundo transparente
- Tamanho recomendado: 200x80 pixels

### Favicon (Ícone da Aba)
O site está configurado para usar o arquivo logo.png como favicon (ícone que aparece na aba do navegador). 
Não é necessário criar um arquivo favicon.ico separado, pois o logo.png será usado automaticamente.

O logo deve ter boa visibilidade mesmo em tamanho reduzido (16x16 ou 32x32 pixels).

## Estrutura do Site

O site consiste em:
- Página inicial com banner, carrossel de produtos e informações principais
- Página de produtos com grid de 24 produtos
- Página de contato com formulário que direciona para WhatsApp
- Página de FAQ com perguntas frequentes

Todos os links de ação direcionam para o WhatsApp com o número (16) 99454-9960.

## Cores e Estilo

O site utiliza um esquema de cores minimalista com:
- Preto
- Branco
- Cinza escuro

## Responsividade
O site é totalmente responsivo, adaptando-se a dispositivos móveis, tablets e desktops.

## Características

- Design responsivo
- Carrossel de imagens na página inicial
- Navegação intuitiva entre páginas
- Animações fluidas
- Integração com WhatsApp para contato direto
- Formulário de contato
- Cores: preto, branco e cinza escuro

## Estrutura do Projeto

```
BeccaRokProducts/
├── index.html         # Página inicial (Landing page)
├── produtos.html      # Página de produtos
├── contato.html       # Página de contato
├── styles.css         # Estilos CSS
├── script.js          # Funcionalidades JavaScript
└── img/               # Pasta para imagens dos produtos e logo
    └── logo.png       # Logotipo da empresa
```

## Como Configurar

1. Clone ou baixe este repositório
2. Adicione as imagens dos produtos na pasta `img/` (produto1.jpg, produto2.jpg, etc.)
3. Adicione o logo da empresa como `img/logo.png`
4. Personalize o número de WhatsApp em todos os arquivos HTML (procure por `https://wa.me/5500000000000` e substitua pelo número correto)
5. Personalize os textos, preços e descrições dos produtos nos arquivos HTML
6. Abra os arquivos HTML em um navegador para visualizar o site

## Personalização

### Adicionando Produtos

Para adicionar um novo produto, adicione o seguinte código na seção `products-grid` do arquivo `produtos.html`:

```html
<div class="product-card" data-aos="fade-up">
    <div class="product-image">
        <img src="img/nome-da-imagem.jpg" alt="Nome do Produto">
    </div>
    <div class="product-info">
        <h3>Nome do Produto</h3>
        <p class="product-price">R$ 00,00</p>
        <p class="product-description">Descrição do produto.</p>
        <a href="https://wa.me/5500000000000?text=Olá,%20tenho%20interesse%20no%20Nome%20do%20Produto" class="btn btn-whatsapp">Comprar <i class="fab fa-whatsapp"></i></a>
    </div>
</div>
```

### Alterando Cores

As cores principais do site estão definidas como variáveis CSS no início do arquivo `styles.css`:

```css
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-dark-gray: #333333;
    --color-gray: #666666;
    --color-light-gray: #f5f5f5;
}
```

## Recursos Utilizados

- **Font Awesome** - Para ícones
- **Animate.css** - Para animações
- **Google Fonts** - Para tipografia

## Contato

Para dúvidas ou suporte, entre em contato através do e-mail: contato@beccarok.com 