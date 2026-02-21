# Pintura Profissional - Website

Um site profissional e responsivo para serviços de pintura, reparo e manutenção de casas e sobrados.

## 📋 Estrutura do Site

### Seções Principais:
1. **Hero/Header** - Seção inicial com CTA (Call-to-Action) via WhatsApp
2. **Serviços** - 6 serviços principais em cards interativos
3. **Portfólio** - Galeria de projetos realizados
4. **Metodologia** - 4 pilares do processo de trabalho
5. **Sobre** - Informações sobre a empresa e habilidades
6. **Depoimentos** - Avaliações de clientes com 5 estrelas
7. **FAQ** - Perguntas frequentes com acordeon
8. **Footer** - Links e informações de contato

## 🎨 Design & Cores

- **Cor Primária**: `#0066cc` (Azul profissional)
- **Cor Secundária**: `#0052a3` (Azul mais escuro)
- **Cor de Destaque**: `#ff6b35` (Laranja para CTAs)
- **Fundo**: Branco e cinza claro para melhor legibilidade
- **Fonte**: Segoe UI, Tahoma, Geneva (sistema)

## 🔧 Customizações Principais

### 1. **Número de WhatsApp**
Substitua `5511999999999` em todos os links de WhatsApp pelo seu número real com código de país:
- Abra `index.html`
- Use Ctrl+H para "Buscar e Substituir"
- Procure: `5511999999999`
- Substitua por: Seu número (ex: `5511987654321`)

### 2. **Nome da Empresa**
Se quiser mudar o nome "Pintura Profissional":
- Procure por `Pintura Profissional` no `index.html`
- Substitua em todos os locais encontrados

### 3. **Email e Telefone**
No footer do `index.html`, procure por:
- `contato@pinturaprofissional.com.br` - Substitua pelo seu email
- `(11) 99999-9999` - Substitua pelo seu telefone
- `São Paulo, SP` - Substitua pela sua localização

### 4. **Textos e Descrições**
Todos os textos podem ser editados diretamente no `index.html` de forma fácil.

### 5. **Cores (Opcional)**
Se quiser mudar as cores do site, edite as variáveis CSS no `styles.css`:
```css
:root {
    --primary-color: #0066cc;      /* Mude para sua cor primária */
    --secondary-color: #0052a3;    /* Mude para sua cor secundária */
    --accent-color: #ff6b35;       /* Mude para sua cor de destaque */
    /* ... outras cores */
}
```

## 📱 Características

- ✅ **Totalmente Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Otimizado para SEO** - Estrutura semântica HTML5
- ✅ **Performance** - Carregamento rápido e otimizado
- ✅ **Acessibilidade** - Navegação clara e intuitiva
- ✅ **JavaScript Puro** - Sem dependências externas (apenas Font Awesome para ícones)
- ✅ **Menu Mobile** - Menu responsivo com toggle
- ✅ **FAQ Interativo** - Acordeon com animações suaves
- ✅ **Animações** - Efeitos hover e scroll suaves
- ✅ **Integração WhatsApp** - CTAs diretos para conversa

## 🚀 Como Usar

### Opção 1: Abrir no Navegador
1. Clique com botão direito em `index.html`
2. Selecione "Abrir com" -> Seu navegador favorito

### Opção 2: Via Servidor Local (Recomendado)
Se você tiver Python instalado:
```bash
cd e:\apps\painter
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

### Opção 3: Servidor com Upload (Recomendado para o Admin)
Para habilitar upload de imagens no painel admin:
```bash
npm install
npm run dev
```
Depois acesse: `http://localhost:3000`

> Observacao: uploads nao funcionam no admin hospedado em HTTPS (ex: GitHub Pages) porque o navegador bloqueia envio para http://localhost. Use o admin local ou um backend HTTPS.

### Opção 4: Usar um Servidor
1. Instale um servidor local (XAMPP, Wamp ou Vercel)
2. Copie os arquivos para a pasta do servidor
3. Acesse via endereço local

## 📦 Arquivos do Projeto

```
painter/
├── index.html        # Estrutura HTML do site
├── styles.css        # Estilos CSS com responsividade
├── script.js         # JavaScript para interatividade
└── README.md         # Este arquivo
```

## 🔗 Integração com Hosting

### Recomendações de Hospedagem:
- **Vercel** - Grátis e muito rápido (https://vercel.com)
- **Netlify** - Ótimo para estáticos (https://netlify.com)
- **GitHub Pages** - Grátis se você usar GitHub
- **Hostinger** - Hospedagem compartilhada econômica
- **Bluehost** - Ótima relação custo-benefício

### Passos para Vercel (Recomendado):
1. Acesse https://vercel.com
2. Clique em "New Project"
3. Suba os arquivos ou conecte seu repositório Git
4. Deploy automático e URL gerada

## 📊 Funcionalidades JavaScript

- **Menu Mobile** - Abre/fecha ao clicar
- **FAQ Acordeon** - Expande/contrai ao clicar
- **Scroll Suave** - Navegação suave entre seções
- **Intersection Observer** - Animações ao fazer scroll
- **Header Dinâmico** - Muda sombra ao scrollar
- **Rastreamento de Eventos** - Google Analytics ready

## 🎯 Próximas Melhorias (Opcional)

1. **Galeria de Fotos** - Adicionar imagens reais dos projetos
2. **Blog** - Artigos sobre pintura e manutenção
3. **Formulário de Contato** - Integrar com email service
4. **Google Analytics** - Rastreamento de visitantes
5. **Chat Bot** - Atendimento automático
6. **Agendamento Online** - Sistema de marcação
7. **Avaliações Google** - Integrar reviews reais
8. **Múltiplos Idiomas** - Versão em inglês/espanhol

## 📧 Suporte

Para dúvidas sobre customizações ou implementações, consulte a documentação do seu servidor de hospedagem.

## ⚠️ Importante

- Substitua os números de telefone fictícios pelos reais
- Adicione suas próprias imagens nos placeholders
- Customize cores e textos conforme sua marca
- Teste em diferentes dispositivos antes de publicar
- Tenha um certificado SSL (HTTPS) na produção

---

**Criado em:** Fevereiro 2026  
**Versão:** 1.0  
**Compatibilidade:** Todos os navegadores modernos (Chrome, Firefox, Safari, Edge)
