// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Track WhatsApp Events (analytics integration)
function trackEvent(eventName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName);
    }
    console.log('Event tracked:', eventName);
}

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards, portfolio items, etc.
document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .methodology-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form validation (if you add a contact form)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
});

// Lazy load images (for future implementation)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Counter animation (for stats)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Salvar preferência do usuário
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Carregar preferência salva do usuário
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

function initPaletteFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const paletteCards = document.querySelectorAll('.palette-card');

    if (!filterButtons.length || !paletteCards.length) {
        return;
    }

    const applyFilter = (floorTone) => {
        paletteCards.forEach(card => {
            const tones = (card.dataset.floor || '').split(' ');
            const shouldShow = floorTone === 'all' || tones.includes(floorTone);
            card.classList.toggle('is-hidden', !shouldShow);
        });
        window.currentFloorType = floorTone;
        document.dispatchEvent(new CustomEvent('floorTypeChange', { detail: { floorType: floorTone } }));
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('is-active');
                btn.setAttribute('aria-pressed', 'false');
            });

            button.classList.add('is-active');
            button.setAttribute('aria-pressed', 'true');
            applyFilter(button.dataset.floor || 'all');
        });
    });
}

function initColorSimulator() {
    const paletteCards = document.querySelectorAll('.palette-card');
    const selectA = document.getElementById('paletteSelectA');
    const selectB = document.getElementById('paletteSelectB');
    const compareToggle = document.getElementById('compareToggle');
    const compareControls = document.getElementById('compareControls');
    const comparePreview = document.getElementById('comparePreview');
    const favoritesList = document.getElementById('favoritesList');
    const floorTypeA = document.getElementById('floorTypeA');
    const floorTypeB = document.getElementById('floorTypeB');

    if (!paletteCards.length || !selectA || !selectB) {
        return;
    }

    const palettes = Array.from(paletteCards).map(card => {
        const name = card.querySelector('.palette-name')?.textContent?.trim() || 'Paleta';
        const swatches = Array.from(card.querySelectorAll('.color-swatch'))
            .slice(0, 3)
            .map(swatch => swatch.style.backgroundColor || '#ffffff');
        return { name, swatches };
    });

    const floorTypeColors = {
        claro: '#e8e0d6',
        medio: '#cbbba5',
        escuro: '#6b5a4a',
        cinza: '#c2c5c8',
        'madeira-clara': '#d9c3a2',
        'madeira-media': '#b08a63',
        'madeira-escura': '#6f4b32',
        carvalho: '#caa778',
        nogueira: '#6a4a35',
        'concreto-claro': '#d9dde1',
        'concreto-escuro': '#6f757d',
        'cimento-queimado': '#8e9499',
        'marmore-claro': '#f1eeea',
        'pedra-clara': '#e3dfd6',
        'pedra-escura': '#7a746b',
        'porcelanato-acetinado': '#e6e3de'
    };

    const buildOptions = (select) => {
        select.innerHTML = '';
        palettes.forEach((palette, index) => {
            const option = document.createElement('option');
            option.value = String(index);
            option.textContent = palette.name;
            select.appendChild(option);
        });
    };

    const getLuminance = (color) => {
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.fillStyle = color;
        const rgb = ctx.fillStyle;
        const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if (!match) {
            return 1;
        }
        const [r, g, b] = match.slice(1, 4).map(Number).map(value => {
            const channel = value / 255;
            return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const updateContrast = (group, wallColor, ceilingColor) => {
        const status = document.querySelector(`.contrast-status[data-contrast="${group}"]`);
        if (!status) {
            return;
        }
        const contrast = Math.abs(getLuminance(wallColor) - getLuminance(ceilingColor));
        status.textContent = contrast >= 0.2 ? 'Contraste: adequado' : 'Contraste: baixo';
    };

    const applyPalette = (group) => {
        const select = group === 'A' ? selectA : selectB;
        const preview = document.querySelector(`.room-preview[data-preview="${group}"]`);
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${group}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${group}"]`);
        const floorTypeSelect = group === 'A' ? floorTypeA : floorTypeB;
        if (!preview) {
            return;
        }

        const paletteIndex = Number(select.value) || 0;
        const palette = palettes[paletteIndex];
        const toneMap = {};

        document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(selectEl => {
            toneMap[selectEl.dataset.target] = palette.swatches[Number(selectEl.value) - 1];
        });

        if (customFloorCheck && customFloorInput) {
            const floorSelect = document.querySelector(`.tone-select[data-group="${group}"][data-target="floor"]`);
            const useCustom = customFloorCheck.checked;
            if (floorSelect) {
                floorSelect.disabled = useCustom;
            }
            if (useCustom) {
                toneMap.floor = customFloorInput.value;
            }
        }

        if (floorTypeSelect && floorTypeSelect.value) {
            const mappedColor = floorTypeColors[floorTypeSelect.value];
            if (mappedColor && customFloorCheck && customFloorInput) {
                customFloorCheck.checked = true;
                customFloorInput.value = mappedColor;
                toneMap.floor = mappedColor;
            }
        }

        preview.querySelector('[data-part="floor"]').style.backgroundColor = toneMap.floor;
        preview.querySelector('[data-part="wall"]').style.backgroundColor = toneMap.wall;
        preview.querySelector('[data-part="ceiling"]').style.backgroundColor = toneMap.ceiling;
        preview.querySelector('[data-part="accent"]').style.backgroundColor = toneMap.accent;

        updateContrast(group, toneMap.wall, toneMap.ceiling);
    };

    const buildSnapshot = (group) => {
        const paletteIndex = Number((group === 'A' ? selectA : selectB).value) || 0;
        const palette = palettes[paletteIndex];
        const preset = document.getElementById(`roomPreset${group}`)?.value || 'sala';
        const tones = {};
        document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(selectEl => {
            tones[selectEl.dataset.target] = selectEl.value;
        });
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${group}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${group}"]`);
        return {
            id: `${Date.now()}-${group}`,
            group,
            paletteIndex,
            paletteName: palette.name,
            preset,
            tones,
            customFloor: customFloorCheck?.checked || false,
            customFloorColor: customFloorInput?.value || '#cbbba5'
        };
    };

    const applySnapshot = (snapshot) => {
        const targetGroup = snapshot.group || 'A';
        const select = targetGroup === 'A' ? selectA : selectB;
        select.value = String(snapshot.paletteIndex || 0);
        const presetSelect = document.getElementById(`roomPreset${targetGroup}`);
        if (presetSelect) {
            presetSelect.value = snapshot.preset || 'sala';
        }
        document.querySelectorAll(`.tone-select[data-group="${targetGroup}"]`).forEach(selectEl => {
            const target = selectEl.dataset.target;
            selectEl.value = snapshot.tones?.[target] || selectEl.value;
        });
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${targetGroup}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${targetGroup}"]`);
        if (customFloorCheck && customFloorInput) {
            customFloorCheck.checked = Boolean(snapshot.customFloor);
            customFloorInput.value = snapshot.customFloorColor || customFloorInput.value;
        }
        applyPalette(targetGroup);
    };

    const saveFavorites = (favorites) => {
        localStorage.setItem('paletteFavorites', JSON.stringify(favorites));
    };

    const loadFavorites = () => {
        try {
            return JSON.parse(localStorage.getItem('paletteFavorites') || '[]');
        } catch (error) {
            return [];
        }
    };

    const renderFavorites = (favorites) => {
        if (!favoritesList) {
            return;
        }
        favoritesList.innerHTML = '';
        if (!favorites.length) {
            favoritesList.innerHTML = '<p class="favorite-empty">Nenhum favorito salvo ainda.</p>';
            return;
        }
        favorites.forEach(snapshot => {
            const item = document.createElement('div');
            item.className = 'favorite-item';

            const title = document.createElement('div');
            title.className = 'favorite-title';
            title.textContent = snapshot.paletteName;

            const meta = document.createElement('div');
            meta.className = 'favorite-meta';
            meta.textContent = `Ambiente: ${snapshot.preset} • Grupo ${snapshot.group}`;

            const actions = document.createElement('div');
            actions.className = 'favorite-actions';

            const applyButton = document.createElement('button');
            applyButton.type = 'button';
            applyButton.textContent = 'Aplicar';
            applyButton.addEventListener('click', () => applySnapshot(snapshot));

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                const updated = loadFavorites().filter(item => item.id !== snapshot.id);
                saveFavorites(updated);
                renderFavorites(updated);
            });

            actions.appendChild(applyButton);
            actions.appendChild(removeButton);

            item.appendChild(title);
            item.appendChild(meta);
            item.appendChild(actions);
            favoritesList.appendChild(item);
        });
    };

    const applyPreset = (group, preset) => {
        const map = {
            sala: { floor: '3', wall: '2', ceiling: '1', accent: '3' },
            quarto: { floor: '2', wall: '1', ceiling: '1', accent: '2' },
            cozinha: { floor: '2', wall: '1', ceiling: '1', accent: '3' },
            corredor: { floor: '2', wall: '1', ceiling: '1', accent: '2' },
            fachada: { floor: '1', wall: '2', ceiling: '1', accent: '3' }
        };
        const targetMap = map[preset] || map.sala;
        document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(selectEl => {
            const key = selectEl.dataset.target;
            selectEl.value = targetMap[key];
        });
        applyPalette(group);
    };

    const bindGroup = (group) => {
        const select = group === 'A' ? selectA : selectB;
        const presetSelect = document.getElementById(`roomPreset${group}`);
        const buttons = document.querySelectorAll(`.simulator-btn[data-group="${group}"]`);
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${group}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${group}"]`);
        const floorTypeSelect = group === 'A' ? floorTypeA : floorTypeB;

        select.addEventListener('change', () => applyPalette(group));
        presetSelect.addEventListener('change', () => applyPreset(group, presetSelect.value));
        document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(selectEl => {
            selectEl.addEventListener('change', () => applyPalette(group));
        });

        if (customFloorCheck && customFloorInput) {
            customFloorCheck.addEventListener('change', () => applyPalette(group));
            customFloorInput.addEventListener('input', () => {
                if (customFloorCheck.checked) {
                    applyPalette(group);
                }
            });
        }

        if (floorTypeSelect) {
            floorTypeSelect.addEventListener('change', () => applyPalette(group));
        }

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const action = button.dataset.action;
                if (action === 'swap') {
                    document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(selectEl => {
                        const value = selectEl.value;
                        selectEl.value = value === '1' ? '3' : value === '3' ? '1' : value;
                    });
                    applyPalette(group);
                }
                if (action === 'reset') {
                    presetSelect.value = 'sala';
                    applyPreset(group, 'sala');
                }
                if (action === 'save') {
                    const favorites = loadFavorites();
                    const snapshot = buildSnapshot(group);
                    favorites.unshift(snapshot);
                    saveFavorites(favorites.slice(0, 6));
                    renderFavorites(loadFavorites());
                }
            });
        });

        applyPreset(group, presetSelect.value || 'sala');
    };

    buildOptions(selectA);
    buildOptions(selectB);
    bindGroup('A');
    bindGroup('B');
    renderFavorites(loadFavorites());

    if (window.currentFloorType && window.currentFloorType !== 'all') {
        if (floorTypeA) {
            floorTypeA.value = window.currentFloorType;
        }
        if (floorTypeB) {
            floorTypeB.value = window.currentFloorType;
        }
        applyPalette('A');
        applyPalette('B');
    }

    document.addEventListener('floorTypeChange', (event) => {
        const floorType = event.detail?.floorType;
        if (!floorType || floorType === 'all') {
            return;
        }
        if (floorTypeA) {
            floorTypeA.value = floorType;
        }
        if (floorTypeB) {
            floorTypeB.value = floorType;
        }
        applyPalette('A');
        applyPalette('B');
    });

    compareToggle.addEventListener('change', () => {
        const isActive = compareToggle.checked;
        compareControls.classList.toggle('is-hidden', !isActive);
        comparePreview.classList.toggle('is-hidden', !isActive);
        if (isActive) {
            applyPalette('B');
        }
    });

    const downloadButtons = document.querySelectorAll('.simulator-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const group = button.dataset.download || 'A';
            const preview = document.querySelector(`.room-preview[data-preview="${group}"]`);
            if (!preview) {
                return;
            }

            const paletteIndex = Number((group === 'A' ? selectA : selectB).value) || 0;
            const paletteName = palettes[paletteIndex]?.name || 'paleta';
            const preset = document.getElementById(`roomPreset${group}`)?.value || 'ambiente';

            const getColor = (part) => {
                const el = preview.querySelector(`[data-part="${part}"]`);
                return el ? getComputedStyle(el).backgroundColor : '#ffffff';
            };

            const canvas = document.createElement('canvas');
            canvas.width = 1000;
            canvas.height = 700;
            const ctx = canvas.getContext('2d');

            const ceiling = getColor('ceiling');
            const wall = getColor('wall');
            const accent = getColor('accent');
            const floor = getColor('floor');

            ctx.fillStyle = ceiling;
            ctx.fillRect(0, 0, canvas.width, canvas.height * 0.25);

            ctx.fillStyle = wall;
            ctx.fillRect(0, canvas.height * 0.25, canvas.width, canvas.height * 0.5);

            ctx.fillStyle = accent;
            ctx.fillRect(canvas.width * 0.82, canvas.height * 0.25, canvas.width * 0.18, canvas.height * 0.5);

            ctx.fillStyle = floor;
            ctx.fillRect(0, canvas.height * 0.75, canvas.width, canvas.height * 0.25);

            ctx.strokeStyle = 'rgba(0,0,0,0.08)';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            const labelItems = [
                { label: 'Piso', color: floor },
                { label: 'Parede', color: wall },
                { label: 'Teto', color: ceiling },
                { label: 'Destaque', color: accent }
            ];

            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.fillRect(20, 20, 300, 150);
            ctx.strokeStyle = 'rgba(0,0,0,0.08)';
            ctx.strokeRect(20, 20, 300, 150);

            ctx.fillStyle = '#1a2332';
            ctx.font = 'bold 20px Segoe UI, Arial';
            ctx.fillText(`${paletteName} - ${preset}`, 36, 52);

            ctx.font = '16px Segoe UI, Arial';
            labelItems.forEach((item, index) => {
                const y = 80 + index * 22;
                ctx.fillStyle = item.color;
                ctx.fillRect(36, y - 12, 18, 18);
                ctx.fillStyle = '#1a2332';
                ctx.fillText(item.label, 62, y + 2);
            });

            const link = document.createElement('a');
            const safeName = paletteName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            link.download = `simulacao-${preset}-${safeName}-${group.toLowerCase()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Pintura Profissional website loaded successfully');
    
    // Carregar dark mode preference
    loadDarkModePreference();

    // Inicializar filtro de paletas por tom do piso
    initPaletteFilter();

    // Inicializar simulador de piso, parede e teto
    initColorSimulator();
    
    // Add any initialization code here
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.remove('active');
    }
});

// Utility function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Handle dynamic service redirects if needed
function redirectToWhatsApp(service = '') {
    const phone = '5511999999999';
    const message = service 
        ? `Gostaria%20de%20saber%20mais%20sobre%20${service}!` 
        : 'Gostaria%20de%20solicitar%20um%20orçamento%20para%20pintura!';
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(url, '_blank');
}

// Export functions for use in HTML onclick handlers
window.trackEvent = trackEvent;
window.redirectToWhatsApp = redirectToWhatsApp;
