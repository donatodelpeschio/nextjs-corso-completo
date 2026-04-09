# 🚀 Corso Completo Next.js 15+

> Guida pratica e completa per imparare Next.js da zero - in italiano 🇮🇹  
> **Aggiornato a Next.js 15.1+ e React 19+ | Gennaio 2026**

[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://donatodelpeschio.github.io/nextjs-corso-completo/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1+-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19+-blue)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 Descrizione

Corso completo Next.js **aggiornato a gennaio 2026** con architettura modulare, progress tracking persistente e tutti i 16 capitoli completi. Include tutte le breaking changes di Next.js 15+ (params/searchParams asincroni, Turbopack stable, React 19 Server Components).

**[🌐 Apri il Corso Online](https://donatodelpeschio.github.io/nextjs-corso-completo/)**

## ✨ Novità Versione 3.0 (2026)

### 🆕 Architettura Modulare
- ✅ **File separati** - Ogni capitolo è un file HTML indipendente
- ✅ **Caricamento dinamico** - Solo il capitolo attivo viene caricato
- ✅ **Più veloce** - Tempi di caricamento ridotti del 90%
- ✅ **Manutenibile** - Facile aggiungere/modificare capitoli

### 🎯 Features
- ✅ **16 capitoli completi** - Nessun "in sviluppo"
- ✅ **Progress tracking** - LocalStorage persistente
- ✅ **Auto-complete** - Cliccando "Avanti" segna come completato
- ✅ **Keyboard shortcuts** - Ctrl+← Ctrl+→ per navigare
- ✅ **Next.js 15.1+** - Tutti gli esempi aggiornati
- ✅ **React 19+** - Server Actions, use(), async components

### 📚 Contenuto 2026
- Turbopack stable
- Server Actions (React 19)
- Async params/searchParams
- Partial Prerendering (PPR)
- Metadata API completa
- SEO avanzato (sitemap, robots, OG images)

## 📂 Struttura Progetto

```
nextjs-corso-completo/
├── index.html              → Shell principale con sidebar
├── assets/
│   ├── styles.css         → Tutti gli stili
│   └── script.js          → Logic + progress tracking
└── chapters/               → 16 capitoli HTML
    ├── intro.html
    ├── setup.html
    ├── routing.html
    ├── pages-vs-app.html
    ├── rendering.html
    ├── server-components.html
    ├── client-components.html
    ├── data-fetching.html
    ├── metadata.html
    ├── seo-advanced.html
    ├── layouts.html
    ├── api-routes.html
    ├── middleware.html
    ├── optimization.html
    ├── blog-project.html
    └── deployment.html
```

## 🚀 Deploy su GitHub Pages

### Setup Automatico

1. **Fork o clona il repo**
   ```bash
   git clone https://github.com/tuousername/nextjs-corso-completo.git
   cd nextjs-corso-completo
   ```

2. **Abilita GitHub Pages**
   - Vai su Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / Root: `/ (root)`
   - Save

3. **Il sito sarà live su:**
   ```
   https://tuousername.github.io/nextjs-corso-completo/
   ```

### Test Locale

```bash
# Opzione 1: Python
python -m http.server 8000

# Opzione 2: Node.js
npx serve .

# Opzione 3: PHP
php -S localhost:8000

# Apri http://localhost:8000
```

## 📋 Contenuti Completi

### Fondamenti (4 capitoli)
1. **Introduzione** - Panoramica Next.js 15+, breaking changes
2. **Setup** - Installazione, primo progetto, Turbopack
3. **Routing** - File-based, dynamic routes, params asincroni
4. **Pages vs App** - Differenze, migration path

### Rendering (4 capitoli)
5. **Strategie** - SSG, SSR, ISR, decision tree
6. **Server Components** - React 19, async components, database access
7. **Client Components** - 'use client', interattività, hooks
8. **Data Fetching** - fetch API, caching, Server Actions

### SEO & Metadata (2 capitoli)
9. **Metadata API** - generateMetadata, canonical, OG tags
10. **SEO Avanzato** - Sitemap, robots.txt, RSS, OG images

### Features Avanzate (4 capitoli)
11. **Layouts** - Root layout, nested, templates, route groups
12. **API Routes** - Route handlers, REST, authentication
13. **Middleware** - Auth, redirects, headers, geo-location
14. **Optimization** - Images, fonts, scripts, bundle analysis

### Progetto Pratico (2 capitoli)
15. **Blog Completo** - Full-stack blog con Markdown, tags, search
16. **Deployment** - Vercel, Netlify, Docker, static export

## 🎯 A Chi è Rivolto

- ✅ Sviluppatori React che vogliono imparare Next.js
- ✅ Chi conosce Next.js 13-14 e vuole aggiornarsi al 15+
- ✅ Developer che cercano una risorsa italiana aggiornata
- ✅ Chi vuole capire le breaking changes in dettaglio

## 🆕 Breaking Changes Next.js 15+

### ⚠️ Params e SearchParams Asincroni

**Il cambiamento più importante:**

```jsx
// ❌ VECCHIO (Next.js 13-14)
export default function Page({ params }) {
  return <div>{params.slug}</div>
}

// ✅ NUOVO (Next.js 15+)
export default async function Page({ params }) {
  const { slug } = await params
  return <div>{slug}</div>
}
```

**Questo corso copre TUTTI questi casi con esempi aggiornati.**

## 💡 Come Usare il Corso

### Workflow Consigliato

1. **Apri il corso** nel browser (locale o GitHub Pages)
2. **Segui i capitoli** in ordine nella sidebar
3. **Pratica** - apri il terminale e crea i progetti
4. **Segna completati** - traccia i tuoi progressi
5. **Fai gli esercizi** alla fine di ogni capitolo

### Keyboard Shortcuts

- `Ctrl + →` - Capitolo successivo (auto-completa corrente)
- `Ctrl + ←` - Capitolo precedente
- `Ctrl + Enter` - Toggle completamento manuale

### Progress Tracking

- ✅ Salvataggio automatico in localStorage
- ✅ Barra progresso nella sidebar
- ✅ Checkmark verde sui capitoli completati
- ✅ Percentuale completamento
- ✅ Reset disponibile

## 🛠️ Tecnologie

- Next.js 15.1+
- React 19+
- Turbopack (stable)
- TypeScript-ready
- Tailwind CSS examples
- Server Actions
- Partial Prerendering

## 🤝 Contribuire

Contributi benvenuti! Per contribuire:

1. Fork il progetto
2. Crea un branch (`git checkout -b feature/MiglioriaCapitolo`)
3. Modifica i file in `chapters/`
4. Commit (`git commit -m 'Aggiunto esempio X'`)
5. Push (`git push origin feature/MiglioriaCapitolo`)
6. Apri una Pull Request

### Aggiungere un Capitolo

```bash
# Crea nuovo file
touch chapters/nuovo-capitolo.html

# Aggiungi al navigation in index.html
# Aggiungi all'array chapters in assets/script.js
```

## 📝 Changelog

### v3.0 (Gennaio 2026)
- ✅ Architettura modulare con file separati
- ✅ Tutti i 16 capitoli completi
- ✅ Aggiornato a Next.js 15.1+ e React 19+
- ✅ Auto-complete al click "Avanti"
- ✅ Esempi async params/searchParams
- ✅ Server Actions (React 19)
- ✅ Turbopack stable
- ✅ Documentazione 2026

### v2.0 (2025)
- ✅ Next.js 15+ compatibility
- ✅ Progress tracking
- ✅ Font migliorati

### v1.0 (2024)
- ✅ Release iniziale Next.js 13-14

## 📄 License

Rilasciato sotto licenza [MIT](LICENSE).

## ☕ Supporta il Progetto

Se questo corso ti è stato utile, considera di offrirmi un caffè!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/donatodelpo)

## 🔗 Links

- 🌐 **Demo Live**: [GitHub Pages](https://donatodelpeschio.github.io/nextjs-corso-completo/)
- 📝 **Blog**: [donatodelpeschio.it/blog](https://donatodelpeschio.it/blog/)
- ☕ **Buy Me a Coffee**: [buymeacoffee.com/donatodelpo](https://buymeacoffee.com/donatodelpo)
- 🐙 **GitHub**: [@donatodelpeschio](https://github.com/donatodelpeschio)

## 📊 Statistiche Corso (2026)

- **16 Capitoli** completi e testati
- **80+ Esempi di codice** Next.js 15+
- **15+ Esercizi pratici** progressivi
- **Tempo stimato**: 15-20 ore
- **Livello**: Intermedio (richiede React)
- **Ultimo aggiornamento**: Gennaio 2026

## 🙏 Ringraziamenti

Grazie alla community Next.js italiana e a tutti i contributori!

## 📢 Feedback

- ⭐ Lascia una stella se il corso ti piace
- 🐛 [Segnala bug](https://github.com/donatodelpeschio/nextjs-corso-completo/issues)
- 💬 [Discussioni](https://github.com/donatodelpeschio/nextjs-corso-completo/discussions)
- 📧 Contatti tramite il [blog](https://donatodelpeschio.it/blog/)

---

<p align="center">
  Fatto con ❤️ da <a href="https://donatodelpeschio.it">Donato Del Peschio</a>
</p>

<p align="center">
  <a href="https://donatodelpeschio.github.io/nextjs-corso-completo/">🚀 Inizia Subito il Corso</a>
</p>

---

### 🔄 Mantieni Aggiornato

Il corso viene aggiornato regolarmente:

- **Watch** il repo per notifiche
- Controlla la sezione **Releases**
- Segui il [blog](https://donatodelpeschio.it/blog/) per annunci

**Prossimi update previsti:**
- Q2 2026: Next.js 16 preview
- Q3 2026: Nuove features React 19.x
- Q4 2026: Advanced patterns e performance
