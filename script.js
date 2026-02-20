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

// Palettes Accordion
const paletteToggles = document.querySelectorAll('.palette-accordion-toggle');
paletteToggles.forEach((toggle, index) => {
    const panel = toggle.nextElementSibling;
    if (panel && panel.classList.contains('palette-accordion-panel')) {
        panel.hidden = index !== 0;
        toggle.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    }

    toggle.addEventListener('click', () => {
        paletteToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                otherToggle.setAttribute('aria-expanded', 'false');
                const otherPanel = otherToggle.nextElementSibling;
                if (otherPanel) {
                    otherPanel.hidden = true;
                }
            }
        });

        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isExpanded));
        if (panel) {
            panel.hidden = isExpanded;
        }
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
    const compareToggle = document.getElementById('compareToggle');
    const compareControls = document.getElementById('compareControls');
    const comparePreview = document.getElementById('comparePreview');
    const favoritesList = document.getElementById('favoritesList');
    const floorTypeA = document.getElementById('floorTypeA');
    const floorTypeB = document.getElementById('floorTypeB');
    const realismToggle = document.getElementById('realismToggle');
    const threeDToggle = document.getElementById('threeDToggle');
    const livePageToggle = document.getElementById('livePageToggle');

    if (!paletteCards.length) {
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

    const buildPaletteSelectors = (group) => {
        const paletteSelects = document.querySelectorAll(`.palette-select-part[data-group="${group}"]`);
        paletteSelects.forEach(select => {
            buildOptions(select);
            select.value = '0'; // Definir primeira paleta como padrão
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

    const threeDScenes = {};
    let currentLiveGroup = 'A';
    let livePageEnabled = false;

    const getContrastColor = (bgColor) => {
        const luminance = getLuminance(bgColor);
        return luminance > 0.5 ? '#1a2332' : '#f5f5f5';
    };

    const applyLiveTheme = (ceiling, wall, floor) => {
        const header = document.querySelector('.header');
        const footer = document.querySelector('.footer');
        const body = document.body;

        if (header) {
            header.style.backgroundColor = ceiling;
            header.style.color = getContrastColor(ceiling);
            header.querySelectorAll('.logo, .nav a, .menu-toggle').forEach(el => {
                el.style.color = getContrastColor(ceiling);
            });
        }

        if (footer) {
            footer.style.backgroundColor = floor;
            footer.style.color = getContrastColor(floor);
            footer.querySelectorAll('h4, p, a, .social-links a').forEach(el => {
                el.style.color = getContrastColor(floor);
            });
        }

        body.style.backgroundColor = wall;
        body.style.color = getContrastColor(wall);

        document.querySelectorAll('.section-title, .section-title-wrapper, .section-subtitle, h1, h2, h3, h4, p, li, a:not(.header a):not(.footer a)').forEach(el => {
            if (!el.closest('.header') && !el.closest('.footer') && !el.closest('.room-preview')) {
                el.style.color = getContrastColor(wall);
            }
        });

        const cardLuminance = getLuminance(wall);
        const cardBg = cardLuminance > 0.5 ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.06)';
        const cardBorder = cardLuminance > 0.5 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.12)';
        
        document.querySelectorAll('.service-card, .palette-card, .methodology-card, .testimonial-card, .faq-item, .simulator-card, .nav-card, .palette-accordion-toggle, .usage-card, .differential-card').forEach(card => {
            card.style.backgroundColor = cardBg;
            card.style.borderColor = cardBorder;
            if (!card.closest('.header') && !card.closest('.footer')) {
                card.style.color = getContrastColor(wall);
            }
        });

        document.querySelectorAll('.btn').forEach(btn => {
            if (!btn.closest('.header') && !btn.closest('.footer')) {
                const btnBg = cardLuminance > 0.5 ? '#1a2332' : '#f5f5f5';
                const btnText = cardLuminance > 0.5 ? '#f5f5f5' : '#1a2332';
                btn.style.backgroundColor = btnBg;
                btn.style.color = btnText;
                btn.style.borderColor = btnBg;
            }
        });
    };

    const applyPalette = (group) => {
        const preview = document.querySelector(`.room-preview[data-preview="${group}"]`);
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${group}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${group}"]`);
        const floorTypeSelect = group === 'A' ? floorTypeA : floorTypeB;
        if (!preview) {
            return;
        }

        const toneMap = {};

        // Para cada parte (floor, wall, ceiling, accent), buscar paleta e tom individuais
        document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(toneSelect => {
            const target = toneSelect.dataset.target;
            const paletteSelect = document.querySelector(`.palette-select-part[data-group="${group}"][data-target="${target}"]`);
            
            if (paletteSelect) {
                const paletteIndex = Number(paletteSelect.value) || 0;
                const palette = palettes[paletteIndex];
                const toneIndex = Number(toneSelect.value) - 1;
                toneMap[target] = palette.swatches[toneIndex];
            }
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

        const sceneData = threeDScenes[group];
        if (sceneData) {
            sceneData.materials.floor.color.set(toneMap.floor);
            sceneData.materials.wall.color.set(toneMap.wall);
            sceneData.materials.leftWall.color.set(toneMap.wall);
            sceneData.materials.rightWall.color.set(toneMap.wall);
            sceneData.materials.ceiling.color.set(toneMap.ceiling);
            sceneData.materials.accent.color.set(toneMap.accent);
            sceneData.renderer.render(sceneData.scene, sceneData.camera);
        }

        if (group === currentLiveGroup && livePageEnabled) {
            applyLiveTheme(toneMap.ceiling, toneMap.wall, toneMap.floor);
        }
    };

    const initThreeDPreview = (group) => {
        const container = document.querySelector(`.room-preview-3d[data-preview3d="${group}"]`);
        if (!container || !window.THREE) {
            return null;
        }

        const scene = new window.THREE.Scene();
        scene.background = new window.THREE.Color('#111820');

        const camera = new window.THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(0, 2.2, 4.5);
        camera.lookAt(0, 1.3, 0);

        const renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.outputColorSpace = window.THREE.SRGBColorSpace;
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        const ambient = new window.THREE.AmbientLight(0xffffff, 0.85);
        const keyLight = new window.THREE.DirectionalLight(0xffffff, 0.9);
        keyLight.position.set(2, 4, 3);
        scene.add(ambient, keyLight);

        const wallMaterial = new window.THREE.MeshStandardMaterial({ color: '#d9d9d9', roughness: 0.6 });
        const floorMaterial = new window.THREE.MeshStandardMaterial({ color: '#bfa98b', roughness: 0.9 });
        const ceilingMaterial = new window.THREE.MeshStandardMaterial({ color: '#f5f5f5', roughness: 0.8 });
        const accentMaterial = new window.THREE.MeshStandardMaterial({ color: '#6b5a4a', roughness: 0.6 });
        const leftWallMaterial = new window.THREE.MeshStandardMaterial({ color: '#d9d9d9', roughness: 0.6 });
        const rightWallMaterial = new window.THREE.MeshStandardMaterial({ color: '#d9d9d9', roughness: 0.6 });

        const floor = new window.THREE.Mesh(new window.THREE.PlaneGeometry(6, 6), floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = 0;

        const wall = new window.THREE.Mesh(new window.THREE.PlaneGeometry(6, 3), wallMaterial);
        wall.position.z = -2.2;
        wall.position.y = 1.5;

        const leftWall = new window.THREE.Mesh(new window.THREE.PlaneGeometry(6, 3), leftWallMaterial);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.position.set(-3, 1.5, 0.8);

        const rightWall = new window.THREE.Mesh(new window.THREE.PlaneGeometry(6, 3), rightWallMaterial);
        rightWall.rotation.y = -Math.PI / 2;
        rightWall.position.set(3, 1.5, 0.8);

        const ceiling = new window.THREE.Mesh(new window.THREE.PlaneGeometry(6, 6), ceilingMaterial);
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.y = 3;

        const accent = new window.THREE.Mesh(new window.THREE.PlaneGeometry(1.2, 3), accentMaterial);
        accent.position.set(2.4, 1.5, -2.1);

        const edgesMaterial = new window.THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.15, transparent: true });
        
        const wallEdges = new window.THREE.EdgesGeometry(wall.geometry);
        const wallLine = new window.THREE.LineSegments(wallEdges, edgesMaterial);
        wall.add(wallLine);

        const leftWallEdges = new window.THREE.EdgesGeometry(leftWall.geometry);
        const leftWallLine = new window.THREE.LineSegments(leftWallEdges, edgesMaterial);
        leftWall.add(leftWallLine);

        const rightWallEdges = new window.THREE.EdgesGeometry(rightWall.geometry);
        const rightWallLine = new window.THREE.LineSegments(rightWallEdges, edgesMaterial);
        rightWall.add(rightWallLine);

        scene.add(floor, wall, leftWall, rightWall, ceiling, accent);

        const resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const { width, height } = entry.contentRect;
                if (width && height) {
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    renderer.setSize(width, height);
                    renderer.render(scene, camera);
                }
            });
        });
        resizeObserver.observe(container);

        renderer.render(scene, camera);

        return {
            scene,
            camera,
            renderer,
            materials: {
                wall: wallMaterial,
                leftWall: leftWallMaterial,
                rightWall: rightWallMaterial,
                floor: floorMaterial,
                ceiling: ceilingMaterial,
                accent: accentMaterial
            }
        };
    };

    const buildSnapshot = (group) => {
        const preset = document.getElementById(`roomPreset${group}`)?.value || 'sala';
        const tones = {};
        const palettes = {};
        
        document.querySelectorAll(`.tone-select[data-group="${group}"]`).forEach(selectEl => {
            const target = selectEl.dataset.target;
            tones[target] = selectEl.value;
        });
        
        document.querySelectorAll(`.palette-select-part[data-group="${group}"]`).forEach(selectEl => {
            const target = selectEl.dataset.target;
            palettes[target] = selectEl.value;
        });
        
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${group}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${group}"]`);
        
        return {
            id: `${Date.now()}-${group}`,
            group,
            palettes,
            paletteName: 'Combinação Mista',
            preset,
            tones,
            customFloor: customFloorCheck?.checked || false,
            customFloorColor: customFloorInput?.value || '#cbbba5'
        };
    };

    const applySnapshot = (snapshot) => {
        const targetGroup = snapshot.group || 'A';
        
        const presetSelect = document.getElementById(`roomPreset${targetGroup}`);
        if (presetSelect) {
            presetSelect.value = snapshot.preset || 'sala';
        }
        
        // Aplicar paletas individuais
        if (snapshot.palettes) {
            document.querySelectorAll(`.palette-select-part[data-group="${targetGroup}"]`).forEach(selectEl => {
                const target = selectEl.dataset.target;
                if (snapshot.palettes[target] !== undefined) {
                    selectEl.value = String(snapshot.palettes[target]);
                }
            });
        }
        
        // Aplicar tons
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
        const presetSelect = document.getElementById(`roomPreset${group}`);
        const buttons = document.querySelectorAll(`.simulator-btn[data-group="${group}"]`);
        const customFloorCheck = document.querySelector(`.custom-floor-check[data-group="${group}"]`);
        const customFloorInput = document.querySelector(`.custom-floor-input[data-group="${group}"]`);
        const floorTypeSelect = group === 'A' ? floorTypeA : floorTypeB;

        // Adicionar eventos aos seletores de paleta individuais
        document.querySelectorAll(`.palette-select-part[data-group="${group}"]`).forEach(selectEl => {
            selectEl.addEventListener('change', () => applyPalette(group));
        });

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

    buildPaletteSelectors('A');
    buildPaletteSelectors('B');
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

    applyPalette('A');

    compareToggle.addEventListener('change', () => {
        const isActive = compareToggle.checked;
        compareControls.classList.toggle('is-hidden', !isActive);
        comparePreview.classList.toggle('is-hidden', !isActive);
        if (isActive) {
            currentLiveGroup = 'B';
            applyPalette('B');
        } else {
            currentLiveGroup = 'A';
            applyPalette('A');
        }
    });

    if (realismToggle) {
        realismToggle.addEventListener('change', () => {
            const enabled = realismToggle.checked;
            document.querySelectorAll('.room-preview').forEach(preview => {
                preview.classList.toggle('realistic', enabled);
            });
        });
    }

    if (threeDToggle) {
        const supportsWebGL = () => {
            try {
                const canvas = document.createElement('canvas');
                return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
            } catch (error) {
                return false;
            }
        };

        if (!supportsWebGL() || !window.THREE) {
            threeDToggle.disabled = true;
            threeDToggle.parentElement.style.opacity = '0.6';
        }

        threeDToggle.addEventListener('change', () => {
            const enabled = threeDToggle.checked;
            document.querySelectorAll('.room-preview').forEach(preview => {
                preview.classList.toggle('is-hidden', enabled);
            });
            document.querySelectorAll('.room-preview-3d').forEach(preview => {
                preview.classList.toggle('is-hidden', !enabled);
                preview.setAttribute('aria-hidden', String(!enabled));
            });

            if (enabled) {
                if (!threeDScenes.A) {
                    threeDScenes.A = initThreeDPreview('A');
                }
                if (!threeDScenes.B && !comparePreview.classList.contains('is-hidden')) {
                    threeDScenes.B = initThreeDPreview('B');
                }
                applyPalette('A');
                if (!comparePreview.classList.contains('is-hidden')) {
                    applyPalette('B');
                }
            }
        });
    }

    const downloadButtons = document.querySelectorAll('.simulator-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const group = button.dataset.download || 'A';
            const preview = document.querySelector(`.room-preview[data-preview="${group}"]`);
            if (!preview) {
                return;
            }

            const paletteName = 'combinacao-personalizada';
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

    if (livePageToggle) {
        livePageToggle.addEventListener('change', () => {
            livePageEnabled = livePageToggle.checked;
            if (livePageEnabled) {
                applyPalette(currentLiveGroup);
            } else {
                resetLiveTheme();
            }
        });
    }
}

const resetLiveTheme = () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const body = document.body;

    if (header) {
        header.style.backgroundColor = '';
        header.style.color = '';
        header.querySelectorAll('.logo, .nav a, .menu-toggle').forEach(el => {
            el.style.color = '';
        });
    }

    if (footer) {
        footer.style.backgroundColor = '';
        footer.style.color = '';
        footer.querySelectorAll('h4, p, a, .social-links a').forEach(el => {
            el.style.color = '';
        });
    }

    body.style.backgroundColor = '';
    body.style.color = '';

    document.querySelectorAll('.section-title, .section-title-wrapper, .section-subtitle, h1, h2, h3, h4, p, li, a:not(.header a):not(.footer a)').forEach(el => {
        el.style.color = '';
    });

    document.querySelectorAll('.service-card, .palette-card, .methodology-card, .testimonial-card, .faq-item, .simulator-card, .nav-card, .palette-accordion-toggle, .usage-card, .differential-card').forEach(card => {
        card.style.backgroundColor = '';
        card.style.borderColor = '';
        card.style.color = '';
    });

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    });
};

// Load trends from localStorage and render them on the page
function loadAndRenderTrends() {
    const trendsContainer = document.getElementById('trendsContainer');
    if (!trendsContainer) {
        return;
    }

    const stored = localStorage.getItem('adminTrends');
    let trends = [];

    if (stored) {
        try {
            trends = JSON.parse(stored);
            // Garantir que trends antigos tenham o campo percentage
            trends = trends.map(trend => ({
                ...trend,
                percentage: trend.percentage !== undefined ? trend.percentage : 0
            }));
        } catch (error) {
            console.warn('Falha ao ler tendencias', error);
        }
    }

    trendsContainer.innerHTML = '';

    if (trends.length === 0) {
        trendsContainer.innerHTML = '<p style="text-align: center; color: #999; grid-column: 1/-1;">Nenhuma tendência configurada ainda.</p>';
        return;
    }

    // Contar quantos trends têm flyer
    const trendsWithFlyer = trends.filter(t => t.flyer);
    
    // Definir grid dinamicamente baseado no número de items
    let columns = 1;
    if (trendsWithFlyer.length === 1) {
        columns = 1;
    } else if (trendsWithFlyer.length === 2) {
        columns = 2;
    } else if (trendsWithFlyer.length === 3) {
        columns = 3;
    } else {
        columns = 4;
    }
    
    // Aplicar grid-template-columns dinâmico
    trendsContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    trends.forEach((trend) => {
        if (!trend.flyer) {
            return; // Skip if no flyer
        }

        const card = document.createElement('div');
        card.className = 'trend-card';
        const scale = (trend.percentage && trend.percentage > 0) ? (trend.percentage / 100) : 1;
        card.innerHTML = `
            <div class="trend-flyer-container">
                <img src="${trend.flyer}" alt="${trend.supplierName}" class="trend-flyer-image" style="transform: scale(${scale});">
            </div>
            <div class="trend-label">
                <span>${trend.supplierName}</span>
            </div>
        `;
        trendsContainer.appendChild(card);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Pintura Profissional website loaded successfully');
    
    // Carregar dark mode preference
    loadDarkModePreference();

    // Carregar trends from admin
    loadAndRenderTrends();

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
