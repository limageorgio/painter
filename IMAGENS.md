# Guia de Imagens - Pintura Profissional

## Estrutura de Pastas Recomendada

```
painter/
├── images/
│   ├── projects/           # Fotos dos projetos
│   │   ├── projeto-1.jpg
│   │   ├── projeto-2.jpg
│   │   └── projeto-3.jpg
│   ├── team/               # Fotos da equipe (opcional)
│   │   ├── chefe.jpg
│   │   └── pintor.jpg
│   ├── gallery/            # Galeria de trabalhos
│   │   └── ...
│   ├── bg/                 # Imagens de fundo (opcional)
│   │   └── ...
│   └── logo.png           # Logo da empresa
├── index.html
├── styles.css
└── script.js
```

## Dimensões Recomendadas para Imagens

### Imagens dos Projetos (Portfolio)
- **Dimensões**: 800x600px ou 1200x800px
- **Formato**: JPG ou WebP (para melhor compressão)
- **Peso**: Máximo 200KB por imagem
- **Proporção**: 4:3 ou 3:2 (paisagem)

### Logo da Empresa
- **Dimensões**: 200x80px (cabeçalho) / 300x120px (footer)
- **Formato**: PNG com fundo transparente
- **Peso**: Máximo 50KB

### Imagens do Sobre
- **Dimensões**: 600x600px (quadrada) ou 800x800px
- **Formato**: JPG
- **Peso**: Máximo 150KB

### Avatares dos Depoimentos
- **Dimensões**: 150x150px
- **Formato**: JPG ou PNG
- **Peso**: Máximo 30KB

## Como Substituir as Imagens Placeholder

1. **Crie uma pasta `images`** no mesmo nível de `index.html`

2. **Adicione suas imagens** na pasta correspondente

3. **Edite o HTML** para apontar para suas imagens:

```html
<!-- Antes (placeholder) -->
<div class="image-placeholder">
    <i class="fas fa-paint-roller"></i>
</div>

<!-- Depois (com imagem) -->
<img src="images/hero-hero.jpg" alt="Pintura profissional" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;">
```

4. **Para o Portfolio**, edite o HTML assim:

```html
<div class="portfolio-image">
    <img src="images/projects/projeto-1.jpg" alt="Descrição do projeto">
</div>
```

### Adicione este CSS em `styles.css` para as imagens:

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}

.portfolio-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
}

.hero-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 16px;
}

.about-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 16px;
}

.author-avatar img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}
```

## Fotos Recomendadas

### Para Portfolio (3+ fotos)
1. **Interior antes/depois** - Sala pintada
2. **Fachada** - Exterior de sobrado
3. **Detalhe de trabalho** - Close em pintura decorativa

### Para Sobre (1 foto)
- Foto profissional do proprietário/chefe de equipe
- Ou foto da equipe trabalhando
- Ou ambiente da empresa

### Avatares de Depoimentos
- Pode usar iniciais ou ícones se não tiver fotos reais dos clientes

## Otimização de Imagens

### Ferramentas Recomendadas (Gratuitas):
- **TinyPNG** (https://tinypng.com) - Comprimir sem perder qualidade
- **ImageResizer** (https://imageresizer.com) - Redimensionar
- **Squoosh** (https://squoosh.app) - Converter e otimizar
- **Canva** (https://canva.com) - Criar gráficos e mockups

### Passos para Otimizar:
1. Tire a foto em alta resolução
2. Redimensione para as dimensões recomendadas
3. Comprima com TinyPNG
4. Nomeie o arquivo descritivamente (ex: `pintura-sala-azul.jpg`)
5. Adicione à pasta correta

## Exemplo de Estrutura HTML Completa

```html
<!-- Hero Section com Imagem -->
<section id="inicio" class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <!-- ... -->
            </div>
            <div class="hero-image">
                <img src="images/hero-painting.jpg" alt="Trabalho profissional de pintura" loading="lazy">
            </div>
        </div>
    </div>
</section>

<!-- Portfolio com Imagens -->
<div class="portfolio-grid">
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="images/projects/projeto-1.jpg" alt="Sala pintada profissionalmente" loading="lazy">
        </div>
        <!-- ... -->
    </div>
</div>

<!-- Sobre com Imagem -->
<div class="about-image">
    <img src="images/team-photo.jpg" alt="Equipe de profissionais" loading="lazy">
</div>
```

## Atributo `loading="lazy"`

Para melhor performance, adicione `loading="lazy"` em todas as imagens:

```html
<img src="images/projeto.jpg" alt="Descrição" loading="lazy">
```

Isso faz a imagem carregar apenas quando estiver próxima de entrar na tela.

## Fontes de Imagens Gratuitas

Se precisar de imagens para começar:

### Fotos de Pintura Profissional:
- **Unsplash** - https://unsplash.com (busque "painting", "renovation")
- **Pexels** - https://pexels.com
- **Pixabay** - https://pixabay.com
- **Freepik** - https://freepik.com (algumas com marca d'água)

### Ícones:
- **Font Awesome** - Já está integrado (https://fontawesome.com)
- **Bootstrap Icons** - https://icons.getbootstrap.com
- **Feather Icons** - https://feathericons.com

## Checklist de Imagens

```
☐ Logo da empresa (200x80px)
☐ Foto 1 do Portfolio (800x600px)
☐ Foto 2 do Portfolio (800x600px)
☐ Foto 3 do Portfolio (800x600px)
☐ Foto do Sobre (600x600px)
☐ Avatar cliente 1 (150x150px)
☐ Avatar cliente 2 (150x150px)
☐ Avatar cliente 3 (150x150px)
☐ Foto da equipe (opcional)
☐ Todas as imagens otimizadas
☐ Nomes descritivos em inglês ou português
☐ Atributos alt preenchidos corretamente
```

## Dicas Importantes

1. **Sempre use imagens de boa qualidade** - Reflete profissionalismo
2. **Mantenha consistência visual** - Mesmas cores e estilo
3. **Use fotos reais dos seus projetos** - Aumenta confiança
4. **Otimize para web** - Não envie imagens de câmera diretamente
5. **Adicione textos alt** - Importante para SEO e acessibilidade
6. **Teste em mobile** - Certifique-se que as imagens ficam boas

---

**Precisa de ajuda?** Consulte um desenvolvedor web ou designer gráfico local para fotografia profissional dos seus projetos.
