# 🎨 finance-flow — Design System

> Design System tokenizado baseado no dashboard finance-flow. Todos os tokens são variáveis CSS reutilizáveis.

---

## 1. Cores (Color Tokens)

### 1.1 Superfícies

| Token | Valor | Uso |
|---|---|---|
| `--surface-base` | `#0B1120` | Fundo principal da aplicação |
| `--surface-sidebar` | `#0D1529` | Fundo da sidebar de navegação |
| `--surface-card` | `#111B2E` | Fundo dos cards |
| `--surface-card-hover` | `#162035` | Card em hover |
| `--surface-elevated` | `#1A2540` | Elementos sobrepostos (dropdowns, modais) |
| `--surface-input` | `#0D1529` | Campos de input/busca |

### 1.2 Bordas

| Token | Valor | Uso |
|---|---|---|
| `--border-default` | `#1E2D4A` | Bordas de cards e divisões |
| `--border-subtle` | `#162035` | Bordas sutis entre seções |
| `--border-focus` | `#6C63FF` | Borda em estado focus |

### 1.3 Texto

| Token | Valor | Uso |
|---|---|---|
| `--text-primary` | `#FFFFFF` | Títulos e texto principal |
| `--text-secondary` | `#8899B4` | Texto auxiliar, labels, datas |
| `--text-tertiary` | `#556685` | Texto de menor destaque |
| `--text-inverse` | `#0B1120` | Texto sobre fundos claros |

### 1.4 Cores de Destaque (Accents)

| Token | Valor | Uso |
|---|---|---|
| `--accent-primary` | `#6C63FF` | Ações primárias, links ativos |
| `--accent-primary-hover` | `#7B73FF` | Hover de ações primárias |
| `--accent-cyan` | `#00D4FF` | Gráficos, destaques visuais |
| `--accent-purple` | `#A855F7` | Gradientes, decorações |
| `--accent-pink` | `#EC4899` | Badges, alertas suaves |

### 1.5 Cores Semânticas / Status

| Token | Valor | Uso |
|---|---|---|
| `--status-negotiation-bg` | `rgba(108, 99, 255, 0.15)` | Badge "Negotiation" — fundo |
| `--status-negotiation-text` | `#8B83FF` | Badge "Negotiation" — texto |
| `--status-proposal-bg` | `rgba(236, 72, 153, 0.15)` | Badge "Proposal" — fundo |
| `--status-proposal-text` | `#F472B6` | Badge "Proposal" — texto |
| `--status-discovery-bg` | `rgba(0, 212, 255, 0.15)` | Badge "Discovery" — fundo |
| `--status-discovery-text` | `#00D4FF` | Badge "Discovery" — texto |
| `--status-closed-won-bg` | `rgba(34, 197, 94, 0.15)` | Badge "Closed Won" — fundo |
| `--status-closed-won-text` | `#4ADE80` | Badge "Closed Won" — texto |

### 1.6 Barras de Progresso

| Token | Valor | Uso |
|---|---|---|
| `--progress-negotiation` | `linear-gradient(90deg, #6C63FF, #A855F7)` | Barra de progresso "Negotiation" |
| `--progress-proposal` | `linear-gradient(90deg, #EC4899, #F472B6)` | Barra de progresso "Proposal" |
| `--progress-discovery` | `linear-gradient(90deg, #F59E0B, #FBBF24)` | Barra de progresso "Discovery" |
| `--progress-closed-won` | `linear-gradient(90deg, #22C55E, #4ADE80)` | Barra de progresso "Closed Won" |

---

## 2. Tipografia

### 2.1 Família da Fonte

| Token | Valor |
|---|---|
| `--font-primary` | `'Inter', sans-serif` |
| `--font-mono` | `'JetBrains Mono', monospace` |

### 2.2 Tamanhos da Fonte

| Token | Valor | Uso |
|---|---|---|
| `--text-xs` | `11px` / `0.6875rem` | Metadados mínimos |
| `--text-sm` | `12px` / `0.75rem` | Badges, labels |
| `--text-base` | `14px` / `0.875rem` | Texto padrão, corpo |
| `--text-md` | `16px` / `1rem` | Subtítulos de card |
| `--text-lg` | `20px` / `1.25rem` | Valores monetários |
| `--text-xl` | `24px` / `1.5rem` | Títulos de seção |
| `--text-2xl` | `28px` / `1.75rem` | Título principal (header) |

### 2.3 Pesos da Fonte

| Token | Valor | Uso |
|---|---|---|
| `--weight-regular` | `400` | Texto auxiliar |
| `--weight-medium` | `500` | Labels, texto padrão |
| `--weight-semibold` | `600` | Títulos de cards |
| `--weight-bold` | `700` | Valores monetários, CTAs |

### 2.4 Altura da Linha (Line Heights)

| Token | Valor |
|---|---|
| `--leading-tight` | `1.2` |
| `--leading-normal` | `1.5` |
| `--leading-relaxed` | `1.75` |

---

## 3. Espaçamento

Segue escala de `4px base`:

| Token | Valor | Uso |
|---|---|---|
| `--space-1` | `4px` | Gaps mínimos internos |
| `--space-2` | `8px` | Padding de badges |
| `--space-3` | `12px` | Gap entre ícone e texto na sidebar |
| `--space-4` | `16px` | Padding interno de cards |
| `--space-5` | `20px` | Gap do grid de cards |
| `--space-6` | `24px` | Padding da sidebar, margens de seção |
| `--space-8` | `32px` | Margens entre blocos grandes |
| `--space-10` | `40px` | Espaçamento do header principal |
| `--space-12` | `48px` | Separação de seções principais |

---

## 4. Bordas Arredondadas (Radius)

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `4px` | Progress bars |
| `--radius-md` | `8px` | Cards, inputs |
| `--radius-lg` | `12px` | Cards maiores, containers |
| `--radius-xl` | `16px` | Modais, drawers |
| `--radius-full` | `9999px` | Badges, avatares, pills |

---

## 5. Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-card` | `0 1px 3px rgba(0, 0, 0, 0.3)` | Sombra padrão dos cards |
| `--shadow-card-hover` | `0 4px 16px rgba(0, 0, 0, 0.4)` | Card em hover |
| `--shadow-elevated` | `0 8px 32px rgba(0, 0, 0, 0.5)` | Modais, dropdowns |
| `--shadow-glow-primary` | `0 0 20px rgba(108, 99, 255, 0.2)` | Glow sutil em elementos ativos |
| `--shadow-glow-cyan` | `0 0 20px rgba(0, 212, 255, 0.15)` | Glow decorativo do gráfico |

---

## 6. Layout Tokens

### 6.1 Sidebar

| Token | Valor |
|---|---|
| `--sidebar-width` | `220px` |
| `--sidebar-width-collapsed` | `64px` |

### 6.2 Grid

| Token | Valor | Uso |
|---|---|---|
| `--grid-columns` | `3` | Cards em 3 colunas |
| `--grid-gap` | `var(--space-5)` / `20px` | Gap entre cards |

### 6.3 Breakpoints

| Token | Valor |
|---|---|
| `--bp-mobile` | `640px` |
| `--bp-tablet` | `1024px` |
| `--bp-desktop` | `1280px` |
| `--bp-wide` | `1536px` |

---

## 7. Transições (Motion)

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | `100ms` | Hover de ícones |
| `--duration-base` | `200ms` | Hover de cards e botões |
| `--duration-slow` | `300ms` | Abertura de painéis |
| `--duration-slower` | `500ms` | Animações de entrada |
| `--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transição padrão |
| `--easing-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Efeitos "bouncy" |

---

## 8. Z-Index Scale

| Token | Valor | Uso |
|---|---|---|
| `--z-base` | `0` | Conteúdo normal |
| `--z-card` | `1` | Cards |
| `--z-sidebar` | `10` | Sidebar fixa |
| `--z-header` | `20` | Header/toolbar |
| `--z-dropdown` | `30` | Menus dropdown |
| `--z-modal` | `40` | Modais |
| `--z-toast` | `50` | Notificações toast |
| `--z-tooltip` | `60` | Tooltips |

---

## 9. Componentes

### 9.1 Card — Deal Card

```css
.deal-card {
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: all var(--duration-base) var(--easing-default);
  box-shadow: var(--shadow-card);
}

.deal-card:hover {
  background: var(--surface-card-hover);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}
```

### 9.2 Badge — Status Badge

```css
.badge {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  line-height: var(--leading-tight);
}

.badge--negotiation {
  background: var(--status-negotiation-bg);
  color: var(--status-negotiation-text);
}

.badge--proposal {
  background: var(--status-proposal-bg);
  color: var(--status-proposal-text);
}

.badge--discovery {
  background: var(--status-discovery-bg);
  color: var(--status-discovery-text);
}

.badge--closed-won {
  background: var(--status-closed-won-bg);
  color: var(--status-closed-won-text);
}
```

### 9.3 Progress Bar

```css
.progress-bar {
  height: 6px;
  background: var(--surface-base);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  border-radius: var(--radius-sm);
  transition: width var(--duration-slow) var(--easing-default);
}
```

### 9.4 Sidebar — Nav Item

```css
.nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  transition: all var(--duration-base) var(--easing-default);
  cursor: pointer;
}

.nav-item:hover {
  color: var(--text-primary);
  background: rgba(108, 99, 255, 0.08);
}

.nav-item--active {
  color: var(--text-primary);
  background: var(--accent-primary);
}
```

### 9.5 Search Input

```css
.search-input {
  background: var(--surface-input);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  color: var(--text-primary);
  font-size: var(--text-base);
  font-family: var(--font-primary);
  transition: border-color var(--duration-base) var(--easing-default);
}

.search-input::placeholder {
  color: var(--text-tertiary);
}

.search-input:focus {
  border-color: var(--border-focus);
  outline: none;
  box-shadow: var(--shadow-glow-primary);
}
```

### 9.6 Avatar

```css
.avatar {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
  color: var(--text-primary);
}
```

---

## 10. Iconografia

| Propriedade | Valor |
|---|---|
| Biblioteca | Lucide Icons / Phosphor Icons |
| Tamanho sidebar | `20px` |
| Tamanho inline | `16px` |
| Stroke width | `1.5px` |
| Cor padrão | `var(--text-secondary)` |
| Cor ativo | `var(--text-primary)` |

---

## 11. Implementação — CSS Variables

```css
:root {
  /* Surfaces */
  --surface-base: #0B1120;
  --surface-sidebar: #0D1529;
  --surface-card: #111B2E;
  --surface-card-hover: #162035;
  --surface-elevated: #1A2540;
  --surface-input: #0D1529;

  /* Borders */
  --border-default: #1E2D4A;
  --border-subtle: #162035;
  --border-focus: #6C63FF;

  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #8899B4;
  --text-tertiary: #556685;
  --text-inverse: #0B1120;

  /* Accents */
  --accent-primary: #6C63FF;
  --accent-primary-hover: #7B73FF;
  --accent-cyan: #00D4FF;
  --accent-purple: #A855F7;
  --accent-pink: #EC4899;

  /* Status */
  --status-negotiation-bg: rgba(108, 99, 255, 0.15);
  --status-negotiation-text: #8B83FF;
  --status-proposal-bg: rgba(236, 72, 153, 0.15);
  --status-proposal-text: #F472B6;
  --status-discovery-bg: rgba(0, 212, 255, 0.15);
  --status-discovery-text: #00D4FF;
  --status-closed-won-bg: rgba(34, 197, 94, 0.15);
  --status-closed-won-text: #4ADE80;

  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-xs: 0.6875rem;
  --text-sm: 0.75rem;
  --text-base: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 1.75rem;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-elevated: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow-primary: 0 0 20px rgba(108, 99, 255, 0.2);
  --shadow-glow-cyan: 0 0 20px rgba(0, 212, 255, 0.15);

  /* Layout */
  --sidebar-width: 220px;
  --sidebar-width-collapsed: 64px;
  --grid-columns: 3;
  --grid-gap: 20px;

  /* Motion */
  --duration-fast: 100ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Z-Index */
  --z-base: 0;
  --z-card: 1;
  --z-sidebar: 10;
  --z-header: 20;
  --z-dropdown: 30;
  --z-modal: 40;
  --z-toast: 50;
  --z-tooltip: 60;
}
```

---

> **Versão:** 1.0 · **Última atualização:** 02 Mar 2026 · **Baseado em:** FinanceFlow Dashboard
