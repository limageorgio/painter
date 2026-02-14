# Pasta de Imagens - Pintura Profissional

Esta pasta contém todas as imagens utilizadas no site profissional de pintura.

## Imagens Necessárias

### 1. hero-painter.jpg
**Localização:** `images/hero-painter.jpg`
**Descrição:** Pintor profissional aplicando tinta em parede com rolo de forma profissional
**Dimensões:** 800x600px
**Fonte sugerida:** Unsplash - https://images.unsplash.com/photo-1589939705066-5a101c481b47

### 2. portfolio-sala-modern.jpg
**Localização:** `images/portfolio-sala-modern.jpg`
**Descrição:** Sala de estar renovada com paredes pintadas em tons claros e moderna
**Dimensões:** 600x400px
**Fonte sugerida:** Unsplash - https://images.unsplash.com/photo-1581684900099-5492f59df025

### 3. portfolio-fachada.jpg
**Localização:** `images/portfolio-fachada.jpg`
**Descrição:** Fachada de residência pintada profissionalmente com acabamento impecável
**Dimensões:** 600x400px
**Fonte sugerida:** Unsplash - https://images.unsplash.com/photo-1566073771259-6a8506099945

### 4. portfolio-quarto.jpg
**Localização:** `images/portfolio-quarto.jpg`
**Descrição:** Quarto moderno com parede pintada em cor sofisticada
**Dimensões:** 600x400px
**Fonte sugerida:** Unsplash - https://images.unsplash.com/photo-1556731617-7f42eaf58e2d

### 5. about-pintor.jpg
**Localização:** `images/about-pintor.jpg`
**Descrição:** Pintor profissional aplicando tinta em parede com precisão e qualidade
**Dimensões:** 600x600px
**Fonte sugerida:** Unsplash - https://images.unsplash.com/photo-1599027945480-8d8f18fdf6b3

## Como Adicionar as Imagens

### Opção 1: Download Manual
1. Acesse os links sugeridos acima
2. Faça o download de cada imagem
3. Copie/renomeie para a pasta `images/` com os nomes especificados acima

### Opção 2: Script de Download (Windows PowerShell)
```powershell
# Hero
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1589939705066-5a101c481b47?w=800&h=600&fit=crop', 'images/hero-painter.jpg')

# Portfolio Sala
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1581684900099-5492f59df025?w=600&h=400&fit=crop', 'images/portfolio-sala-modern.jpg')

# Portfolio Fachada
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', 'images/portfolio-fachada.jpg')

# Portfolio Quarto
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1556731617-7f42eaf58e2d?w=600&h=400&fit=crop', 'images/portfolio-quarto.jpg')

# About Pintor
(New-Object Net.WebClient).DownloadFile('https://images.unsplash.com/photo-1599027945480-8d8f18fdf6b3?w=600&h=600&fit=crop', 'images/about-pintor.jpg')
```

Copie e execute este script no PowerShell na pasta raiz do projeto.

## Referências no HTML

Todas as imagens estão referenciadas no arquivo `index.html` apontando para esta pasta:
- `<img src="./images/hero-painter.jpg" ...>`
- `<img src="./images/portfolio-sala-modern.jpg" ...>`
- `<img src="./images/portfolio-fachada.jpg" ...>`
- `<img src="./images/portfolio-quarto.jpg" ...>`
- `<img src="./images/about-pintor.jpg" ...>`

## Notas Importantes

- Todas as imagens do Unsplash são de uso livre com licença CC0
- As imagens são de profissionais nos Estados Unidos
- Os nomes dos arquivos devem ser exatos conforme especificado
- Certifique-se de manter as dimensões recomendadas para melhor experiência visual
