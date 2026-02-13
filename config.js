/**
 * Arquivo de Configuração do Site
 * Edite este arquivo para customizar informações principais
 */

const siteConfig = {
    // Informações Básicas da Empresa
    company: {
        name: "Pintura Profissional",
        tagline: "Transformando ambientes com qualidade profissional",
        description: "Serviços de pintura residencial, comercial e reparo de casas e sobrados",
        logo: "Pintura Profissional"
    },

    // Contato
    contact: {
        whatsapp: "5511999999999",  // Formato: 55 + DDD + número
        phone: "(11) 99999-9999",
        email: "contato@pinturaprofissional.com.br",
        location: "São Paulo, SP",
        fullAddress: "São Paulo, São Paulo, Brasil"
    },

    // Redes Sociais
    social: {
        facebook: "#",
        instagram: "#",
        whatsapp: "https://api.whatsapp.com/send?phone=5511999999999"
    },

    // Cores (Paleta de cores do site)
    colors: {
        primary: "#0066cc",      // Azul principal
        secondary: "#0052a3",    // Azul mais escuro
        accent: "#ff6b35",       // Laranja para destaques
        darkBg: "#1a2332",       // Fundo escuro
        lightBg: "#f5f7fa",      // Fundo claro
        lightGray: "#e8ecf1",    // Cinza claro
        darkText: "#1a2332",     // Texto escuro
        grayText: "#6c757d",     // Texto cinza
        white: "#ffffff"         // Branco
    },

    // Serviços oferecidos
    services: [
        {
            id: "residencial",
            name: "Pintura Residencial",
            icon: "fas fa-home",
            description: "Pintura completa de interiores com acabamento profissional em todos os cômodos de sua casa."
        },
        {
            id: "fachadas",
            name: "Pintura de Fachadas",
            icon: "fas fa-building",
            description: "Renovação de fachadas com pintura de qualidade, protegendo e valorizando seu imóvel."
        },
        {
            id: "reparo",
            name: "Reparo e Manutenção",
            icon: "fas fa-tools",
            description: "Reparos em paredes, impermeabilização e preparo de superfícies para pintura impecável."
        },
        {
            id: "decorativa",
            name: "Pintura Decorativa",
            icon: "fas fa-palette",
            description: "Efeitos especiais, texturas e designs personalizados para ambientes únicos e modernos."
        },
        {
            id: "comercial",
            name: "Pintura Comercial",
            icon: "fas fa-spray-can",
            description: "Serviços de pintura para comércios e sobrados, respeitando prazos e minimizando interrupções."
        },
        {
            id: "impermeabilizacao",
            name: "Impermeabilização",
            icon: "fas fa-water",
            description: "Proteção completa contra infiltrações com produtos de alta durabilidade e garantia."
        }
    ],

    // Metodologia (4 pilares)
    methodology: [
        {
            step: 1,
            title: "Diagnóstico Profissional",
            description: "Análise detalhada do espaço, verificação de possíveis problemas e recomendações de materiais."
        },
        {
            step: 2,
            title: "Preparação Impecável",
            description: "Limpeza, lixamento e preparo completo das superfícies para melhor aderência da tinta."
        },
        {
            step: 3,
            title: "Execução de Qualidade",
            description: "Pintura com técnicas profissionais utilizando materiais de primeira linha e acabamento perfeito."
        },
        {
            step: 4,
            title: "Inspeção Final",
            description: "Vistoria completa do trabalho realizado garantindo satisfação total do cliente."
        }
    ],

    // Portfólio / Projetos
    portfolio: [
        {
            title: "Casa Sobrados - Zona Sul",
            type: "Pintura Residencial Completa",
            description: "Transformação completa de um sobrado com pintura de interiores em 3 cores diferentes, acabamento profissional em todas as dependências.",
            image: "/images/projeto-1.jpg"
        },
        {
            title: "Fachada Comercial - Centro",
            type: "Pintura de Fachada",
            description: "Renovação completa da fachada de prédio comercial com impermeabilização e pintura em 2 tons, agregando valor ao imóvel.",
            image: "/images/projeto-2.jpg"
        },
        {
            title: "Apto com Efeitos Especiais",
            type: "Pintura Decorativa",
            description: "Aplicação de técnicas decorativas e efeitos especiais em apartamento de alto padrão, criando ambientes únicos e modernos.",
            image: "/images/projeto-3.jpg"
        }
    ],

    // Depoimentos de Clientes
    testimonials: [
        {
            name: "Maria Silva",
            role: "Proprietária - Zona Sul",
            rating: 5,
            text: "Excelente trabalho! A equipe foi muito profissional, pontual e cuidadosa. Minha casa ficou belíssima. Recomendo muito!"
        },
        {
            name: "João Santos",
            role: "Gerente Comercial",
            rating: 5,
            text: "Muito bom mesmo! Profissionais competentes, pontuais e presttativos. Minha fachada ficou impecável. Voltaria a contratar com certeza!"
        },
        {
            name: "Carlos Oliveira",
            role: "Proprietário - Sobrado",
            rating: 5,
            text: "Profissionalismo de primeira! Explicaram bem cada etapa, usaram materiais de qualidade e o resultado superou expectativas. Muito satisfeito!"
        }
    ],

    // FAQ - Perguntas Frequentes
    faq: [
        {
            question: "Como funciona o orçamento?",
            answer: "O orçamento é realizado através de uma visita técnica no local onde será realizado o trabalho. Nessa visita, avaliamos a área, o estado da superfície, nível de dificuldade e recomendamos os materiais mais adequados. O orçamento é sem compromisso e totalmente gratuito!"
        },
        {
            question: "Qual é o prazo de execução do trabalho?",
            answer: "O prazo varia conforme o escopo do trabalho e o tamanho da área. A maioria dos projetos residenciais leva de 3 a 7 dias úteis. Você receberá um cronograma detalhado no orçamento com uma estimativa precisa."
        },
        {
            question: "Vocês oferecem garantia no trabalho?",
            answer: "Sim! Oferecemos garantia de 12 meses contra defeitos de aplicação. Também recomendamos as melhores marcas de tintas que oferecem garantia adicional de até 5 anos contra desbotamento."
        },
        {
            question: "Qual é o melhor período para pintar?",
            answer: "O ideal é escolher períodos com previsão de tempo seco, pois a umidade afeta a qualidade da pintura. Primavera e verão são períodos mais favoráveis. Mas podemos trabalhar em qualquer época do ano com as devidas precauções."
        },
        {
            question: "Como são as formas de pagamento?",
            answer: "Aceitamos pagamento em dinheiro, transferência bancária, PIX e cartão de crédito. Para projetos maiores, oferecemos parcelamento em até 3x sem juros. O pagamento é feito 50% no início e 50% ao término do trabalho."
        },
        {
            question: "Vocês trabalham com que tipos de tinta?",
            answer: "Trabalhamos com as melhores marcas do mercado como Suvinil, Coral, Tintas Mondini e Sherwin-Williams. Oferecemos diferentes tipos: acrílica, látex, epóxi, poliuretano e especiais para fachadas. Cada projeto recebe a recomendação mais adequada."
        }
    ],

    // Estatísticas
    stats: {
        clientsCount: 150,
        projectsCount: 60,
        yearsExperience: 15,
        satisfactionRate: 98
    },

    // SEO e Meta Tags
    seo: {
        title: "Pintura Profissional - Serviços de Pintura e Reparo de Casas",
        description: "Serviços profissionais de pintura residencial, comercial e reparo. Pintura de fachadas, impermeabilização e acabamento perfeito.",
        keywords: "pintura, pintura residencial, pintura comercial, reparo de casas, impermeabilização, pintor",
        author: "Seu Nome ou Empresa",
        ogImage: "/images/og-image.jpg"
    },

    // Informações da empresa para footer
    company_info: {
        cnpj: "00.000.000/0001-00",
        established: 2009
    },

    // Configurações de Analytics (Google Analytics)
    analytics: {
        googleAnalyticsId: "G-XXXXXXXXXX",  // Substitua pelo seu ID
        trackingEnabled: false               // Mude para true quando implementar
    }
};

// Função para gerar URL WhatsApp com mensagens personalizadas
function generateWhatsAppLink(service = "") {
    const phone = siteConfig.contact.whatsapp;
    let message = "Gostaria de solicitar um orçamento para pintura!";
    
    if (service) {
        const serviceObj = siteConfig.services.find(s => s.id === service);
        if (serviceObj) {
            message = `Gostaria de saber mais sobre ${serviceObj.name}!`;
        }
    }
    
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

// Exportar configurações (para uso em diferentes partes do site)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { siteConfig, generateWhatsAppLink };
}
