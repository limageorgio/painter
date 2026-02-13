# 🚀 INÍCIO RÁPIDO - Seus Primeiros Passos

Siga este guia passo-a-passo para customizar e publicar seu site em 30 minutos.

---

## ⏱️ Passo 1: Customizar Informações (5 min)

### 1.1 - Abra o arquivo `index.html` com um editor de texto

Use VS Code, Notepad++ ou qualquer editor.

### 1.2 - Busque e Substitua seu Telefone

**Use Ctrl+H (Buscar e Substituir):**
- Procure: `5511999999999`
- Substitua por: Seu número com código de país
  - Exemplo: `5511987654321` (55 = Brasil, 11 = SP, resto é seu número)

### 1.3 - Busque e Substitua seu Email

- Procure: `contato@pinturaprofissional.com.br`
- Substitua por: Seu email

### 1.4 - Busque e Substitua seu Telefone Formatado

- Procure: `(11) 99999-9999`
- Substitua por: Seu telefone formatado
  - Exemplo: `(11) 99999-9999`

### 1.5 - Busque e Substitua Localização

- Procure: `São Paulo, SP`
- Substitua por: Sua cidade/estado
  - Exemplo: `Curitiba, PR`

---

## ⏱️ Passo 2: Adicionar Suas Imagens (10 min)

Se quiser adicionar imagens reais (recomendado):

### 2.1 - Crie uma pasta `images`

```
painter/
├── images/        ← Crie esta pasta
│   └── seu-arquivo.jpg
├── index.html
├── styles.css
└── script.js
```

### 2.2 - Coloque suas fotos lá

- Foto do portfolio (3 melhores)
- Foto do sobre (opcional)
- Logo (se tiver)

### 2.3 - Edite o HTML para adicionar as fotos

Procure por `image-placeholder` no `index.html` e substitua por:

```html
<img src="images/sua-foto.jpg" alt="Descrição da foto" loading="lazy">
```

**Mais fácil?** Para agora, deixe os placeholders (ícones) - adicione fotos depois!

---

## ⏱️ Passo 3: Testar Localmente (5 min)

### Opção A - Abrir direto no navegador (mais simples)
1. Clique com botão direito em `index.html`
2. Selecione "Abrir com" > Seu navegador

### Opção B - Com Python (melhor)
1. Abra terminal na pasta do projeto
2. Digite: `python -m http.server 8000`
3. Acesse: `http://localhost:8000`

### Teste o Site:
- ☐ Menu funciona?
- ☐ Links de WhatsApp abrem conversa?
- ☐ Layout fica bom em mobile?
- ☐ Pode scrollar tudo normalmente?

---

## ⏱️ Passo 4: Publicar Online (10 min)

### Opção A: Vercel (RECOMENDADO - Mais fácil)

1. Acesse: https://vercel.com
2. Clique em "Sign Up" (ou use GitHub)
3. Clique em "Create New Project"
4. Clique em "Import Project"
5. Faça upload dos arquivos (arraste e solte)
6. Clique "Deploy"
7. Pronto! Você recebe uma URL como: `seu-projeto.vercel.app`

**Tempo:** 2-3 minutos

### Opção B: Netlify

1. Acesse: https://netlify.com
2. Clique em "Sign Up"
3. Clique em "Deploy manually"
4. Arraste a pasta `painter` inteira
5. Pronto! URL automática gerada

**Tempo:** 1-2 minutos

### Opção C: GitHub Pages (GRÁTIS - Se souber usar Git)

1. Crie repositório `seu-usuario.github.io`
2. Faça push dos arquivos
3. Acesse: `seu-usuario.github.io`

**Tempo:** 5 minutos

---

## ⏱️ Passo 5: Compartilhar (5 min)

Depois de publicado, divulgue:

✅ **WhatsApp**
- Mande link para contatos
- Peça feedback

✅ **Google My Business** (CRÍTICO)
1. Acesse: https://www.google.com/business
2. Crie sua ficha
3. Adicione link do site
4. Coloque fotos dos trabalhos
5. Isso aparece no Google Maps!

✅ **Instagram**
- Coloque link na bio
- Compartilhe com seguidores
- Poste fotos dos projetos

✅ **Facebook**
- Crie página profissional
- Compartilhe link
- Comece a anunciar

---

## ❓ Perguntas Comuns

**P: Devo adicionar imagens agora?**  
R: Não é obrigatório para começar. O site funciona com os ícones. Muitos visitantes virão ver o layout primeiro.

**P: Qual hospedagem usar?**  
R: **Vercel ou Netlify** - Ambas são grátis, fáceis e rápidas. Não pense muito, escolha uma.

**P: Posso mudar depois?**  
R: Sim! Os arquivos são simples e portáveis. Pode migrar quando quiser.

**P: Preciso de domínio próprio agora?**  
R: Não! Comece com a URL automática (vercel/netlify). Compre domínio quando houver mais clientes.

**P: Posso editar depois?**  
R: SIM! Edite o HTML, faça novo upload, pronto! Mudanças aparecem imediatamente.

**P: E o formulário de contato?**  
R: Agora usa só WhatsApp (direto). Adicione formulário depois se quiser.

---

## 📋 Checklist 30 Minutos

```
☐ Substituir número WhatsApp (1 min)
☐ Substituir email (1 min)
☐ Substituir telefone (1 min)
☐ Substituir localização (1 min)
☐ Testar em navegador local (3 min)
☐ Verificar menu/responsividade (3 min)
☐ Escolher hospedagem (1 min)
☐ Publicar online (5-10 min)
☐ Testar URL publicada (3 min)
☐ Criar Google My Business (5-10 min)
☐ Compartilhar com conhecidos (2 min)
```

**TOTAL: ~30 minutos!** ✅

---

## 🎯 Próximos 7 Dias

### Dia 1-2: Publicar
- [ ] Site online
- [ ] Google My Business criado
- [ ] Testou em mobile

### Dia 3-4: Compartilhar
- [ ] Compartilhou com família/amigos
- [ ] Postou no Instagram
- [ ] Postou no Facebook
- [ ] Enviou no WhatsApp

### Dia 5-7: Otimizar
- [ ] Ajustou textos (se necessário)
- [ ] Adicionou número do celular em lugar visível
- [ ] Verificou se todos os links de WhatsApp funcionam
- [ ] Fez screenshot do resultado

---

## 🎨 Próximas Melhorias (Semanas 2-3)

### Semana 2: Imagens
- [ ] Tirou fotos dos seus projetos
- [ ] Adicionou ao site
- [ ] Ficou profissional!

### Semana 3: Marketing
- [ ] Postando 3x semana no Instagram
- [ ] Respondendo comentários
- [ ] Fazendo conteúdo antes/depois
- [ ] Começando a receber leads!

---

## 💡 Dicas Pro

### 1. **Teste em Celular NÃO é Opcional**
- Abra a URL em seu smartphone
- Menu funciona?
- Botão de WhatsApp é clicável?
- Texto é legível?

### 2. **Guarde seus Arquivos**
```
Crie uma pasta de backup:
painter-backup/
├── index.html
├── styles.css
├── script.js
└── config.js
```

### 3. **Monitore Visitantes** (depois)
- Google Analytics mostra quem visitou
- Qual página eles mais vêem
- De onde vêm
- Quando visitam

### 4. **Mantenha Atualizado**
- Novos projetos? Atualize portfólio
- Novos clientes? Adicione depoimentos
- Mudou telefone? Atualize em todo lugar

### 5. **Não Desista no Primeiro Mês**
- Site novo leva tempo para gerar leads
- Google precisa 2-4 semanas para indexar
- Compartilhe ativo nas redes
- Paciência = sucesso!

---

## 🚨 Erros Comuns (Evite!)

❌ **ERROS:**
- Esquecer de testar em mobile
- Publicar com número errado
- Não atualizar Google My Business
- Não responder leads
- Desistir antes de 30 dias
- Não adicionar fotos reais depois

✅ **ACERTOS:**
- Testar tudo antes
- Verificar 3x os números
- Completar Google My Business
- Responder RÁPIDO (em minutos!)
- Dar 60 dias antes de avaliar
- Priorizar imagens reais

---

## 📞 Precisa de Ajuda?

### Simples:
- Copiar/colar número → Google ("como usar whatsapp no site")
- Editar HTML → YouTube ("como editar arquivo HTML")
- Publicar → Ver documentação do Vercel/Netlify

### Complexa (contrate alguém):
- Adicionar formulário funcional
- Agendamento automático
- Integração payment
- **Plataforma:** Upwork, 99Freelas, Fiverr

---

## 🎉 Você consegue!

Seu site está pronto para começar a gerar clientes. 

**Próximo passo agora:** Pegue nos passos acima e comece! Você consegue em 30 minutos.

**Dúvida?** Leya, releia a seção específica ou consulte o README.md

---

**Data de Conclusão:** _______________  
**Site URL:** _______________  
**Primeira Lead:** _______________

Boa sorte! 🎨💪
