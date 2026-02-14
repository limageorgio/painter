# Guia de Imagens - Pintura Profissional

## Estrutura de Pastas Atual

```
painter/
├── images/                  # Pasta com todas as imagens do site
│   ├── hero-painter.jpg              # Imagem hero (800x600px)
│   ├── portfolio-sala-modern.jpg     # Sala renovada (600x400px)
│   ├── portfolio-fachada.jpg         # Fachada pintada (600x400px)
│   ├── portfolio-quarto.jpg          # Quarto decorado (600x400px)
│   ├── about-pintor.jpg              # Pintor profissional (600x600px)
│   └── README.md                     # Documentação das imagens
├── index.html
├── styles.css
├── script.js
└── config.js
```

## Imagens Utilizadas no Site

### 1. Hero Section - hero-painter.jpg
- **Localização:** `images/hero-painter.jpg`
- **Dimensões:** 800x600px
- **Descrição:** Pintor profissional aplicando tinta em parede com rolo
- **Tema:** Pintura interna profissional em residência
- **URL Unsplash:** https://images.unsplash.com/photo-1589939705066-5a101c481b47

### 2. Portfolio 1 - portfolio-sala-modern.jpg
- **Localização:** `images/portfolio-sala-modern.jpg`
- **Dimensões:** 600x400px
- **Descrição:** Sala de estar renovada com paredes pintadas em tons claros
- **Tema:** Casa Sobrados - Pintura Residencial Completa
- **URL Unsplash:** https://images.unsplash.com/photo-1581684900099-5492f59df025

### 3. Portfolio 2 - portfolio-fachada.jpg
- **Localização:** `images/portfolio-fachada.jpg`
- **Dimensões:** 600x400px
- **Descrição:** Fachada de residência pintada profissionalmente com acabamento impecável
- **Tema:** Fachada Comercial - Pintura de Fachada
- **URL Unsplash:** https://images.unsplash.com/photo-1566073771259-6a8506099945

### 4. Portfolio 3 - portfolio-quarto.jpg
- **Localização:** `images/portfolio-quarto.jpg`
- **Dimensões:** 600x400px
- **Descrição:** Quarto moderno com parede pintada em cor sofisticada
- **Tema:** Apto com Efeitos Especiais - Pintura Decorativa
- **URL Unsplash:** https://images.unsplash.com/photo-1556731617-7f42eaf58e2d

### 5. About Section - about-pintor.jpg
- **Localização:** `images/about-pintor.jpg`
- **Dimensões:** 600x600px
- **Descrição:** Pintor profissional aplicando tinta em parede com precisão e qualidade
- **Tema:** Sobre - Mostra profissionalismo da equipe
- **URL Unsplash:** https://images.unsplash.com/photo-1599027945480-8d8f18fdf6b3

## Como Baixar as Imagens

### Opção 1: Download Manual via Navegador
1. Copie a URL Unsplash correspondente (listada acima)
2. Cole no navegador
3. Clique em "Download" ou pressione Ctrl+S
4. Salve na pasta `images/` com o nome exato especificado

### Opção 2: Download via PowerShell (Windows)
Abra o PowerShell na pasta raiz do projeto (`e:\apps\painter`) e execute:

```powershell
# Hero Image
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1589939705066-5a101c481b47?w=800&h=600&fit=crop', './images/hero-painter.jpg')

# Portfolio Sala Moderna
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1581684900099-5492f59df025?w=600&h=400&fit=crop', './images/portfolio-sala-modern.jpg')

# Portfolio Fachada
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', './images/portfolio-fachada.jpg')

# Portfolio Quarto
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1556731617-7f42eaf58e2d?w=600&h=400&fit=crop', './images/portfolio-quarto.jpg')

# About Pintor
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1599027945480-8d8f18fdf6b3?w=600&h=600&fit=crop', './images/about-pintor.jpg')
```

### Opção 3: Download via PowerShell (MacOS/Linux)
Use curl para fazer o download das imagens:

```bash
curl -o ./images/hero-painter.jpg https://images.unsplash.com/photo-1589939705066-5a101c481b47?w=800&h=600&fit=crop
curl -o ./images/portfolio-sala-modern.jpg https://images.unsplash.com/photo-1581684900099-5492f59df025?w=600&h=400&fit=crop
curl -o ./images/portfolio-fachada.jpg https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop
curl -o ./images/portfolio-quarto.jpg https://images.unsplash.com/photo-1556731617-7f42eaf58e2d?w=600&h=400&fit=crop
curl -o ./images/about-pintor.jpg https://images.unsplash.com/photo-1599027945480-8d8f18fdf6b3?w=600&h=600&fit=crop
```

## Referências Atuais no HTML

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
