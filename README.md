# 🚀 Corso Completo Next.js 15+

> Guida pratica e completa per imparare Next.js da zero - in italiano 🇮🇹  
> **Aggiornato a Next.js 15.1+ e React 19+**

[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://donatodelpeschio.github.io/nextjs-corso-completo/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1+-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19+-blue)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://donatodelpeschio.it)

## 📖 Descrizione

Corso completo Next.js **aggiornato a Next.js 15+** pensato per sviluppatori React che vogliono padroneggiare il framework. Include teoria essenziale, esempi pratici, esercizi progressivi e **tracking dei progressi persistente**.

Particolare focus su App Router, Server/Client Components, strategie di rendering, e tutte le **breaking changes di Next.js 15** (params/searchParams asincroni, Turbopack stable, React 19).

**[🌐 Apri il Corso Online](https://donatodelpeschio.github.io/nextjs-corso-completo/)**

## ✨ Novità Versione 2.0

### 🆕 Aggiornamenti Tecnici
- ✅ **Next.js 15.1+** - Tutte le breaking changes documentate
- ✅ **React 19+** - Nuove API e patterns
- ✅ **Params asincroni** - Esempi corretti con `await params`
- ✅ **Turbopack stable** - Setup e configurazione
- ✅ **Sezioni complete** - Nessun capitolo "in sviluppo"

### 🎨 Miglioramenti UX
- ✅ **Font migliorati** - Inter + Fira Code per leggibilità ottimale
- ✅ **Progress tracking** - Segna capitoli completati con localStorage
- ✅ **Barra progresso** - Visualizza percentuale completamento
- ✅ **Shortcuts keyboard** - `Ctrl+←/→` per navigare, `Ctrl+Enter` per completare
- ✅ **Design raffinato** - Migliore contrasto e spaziatura

## 📚 Contenuti

### Fondamenti
- ✅ Introduzione e versioning (Next.js 15+)
- ✅ Setup e Primo Progetto (con Turbopack)
- ✅ Routing File-Based (**params asincroni**)
- ✅ Pages Router vs App Router

### Rendering
- ✅ Strategie di Rendering (SSG, SSR, ISR)
- ✅ Server Components (React 19+)
- ✅ Client Components
- ✅ Data Fetching Avanzato

### SEO & Metadata
- ✅ Metadata API completa
- ✅ SEO Avanzato (canonical, sitemap, robots.txt)

### Features Avanzate
- ✅ Layouts e Templates
- ✅ API Routes (Route Handlers)
- ✅ Middleware
- ✅ Ottimizzazione (Image, Font, Bundle)

### Progetto Pratico
- ✅ Blog Completo End-to-End
- ✅ Deployment (Vercel, Netlify, Docker)

## 🎯 A Chi è Rivolto

Questo corso è perfetto per te se:

- ✅ Conosci **React** (componenti, hooks, props, state)
- ✅ Hai familiarità con **JavaScript ES6+** e Promises
- ✅ Vuoi imparare **Next.js 15+** con le ultime features
- ✅ Cerchi una risorsa **in italiano** aggiornata
- ✅ Vuoi capire **breaking changes** da versioni precedenti

## 🆕 Breaking Changes Next.js 15+

### ⚠️ Params e SearchParams Asincroni

**La differenza più importante!**

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

Questo corso include **tutti** gli esempi aggiornati per Next.js 15+!

## 🚀 Come Usarlo

### Opzione 1: Online
Apri direttamente il corso nel browser:  
**[https://donatodelpeschio.github.io/nextjs-corso-completo/](https://donatodelpeschio.github.io/nextjs-corso-completo/)**

### Opzione 2: Locale
1. Clona il repository:
   ```bash
   git clone https://github.com/donatodelpeschio/nextjs-corso-completo.git
   ```

2. Apri `nextjs-corso-completo.html` nel browser

3. (Opzionale) Apri su un secondo monitor mentre programmi

### 💾 Progress Tracking

Il corso salva automaticamente i tuoi progressi in `localStorage`:

- Clicca **"Segna come Completato"** su ogni capitolo
- Vedi la **barra di progresso** nella sidebar
- I progressi **persistono** tra sessioni
- Usa **"Reset Progressi"** per ricominciare

### ⌨️ Keyboard Shortcuts

- `Ctrl + →` - Capitolo successivo
- `Ctrl + ←` - Capitolo precedente
- `Ctrl + Enter` - Segna capitolo come completato

## 💡 Highlights

### Capitolo SEO e Metadata
Risponde alla domanda comune: *"Come gestisco canonical e meta tags in Next.js 15?"*

```jsx
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const { slug } = await params  // ✅ Next.js 15+
  const post = await getPost(slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}` // 🎯 Canonical!
    },
    openGraph: {
      title: post.title,
      images: [post.coverImage],
    }
  }
}
```

### Capitolo Routing Dinamico
Include **alert critico** sulle Promise in Next.js 15:

```jsx
// ✅ SEMPRE fare await di params!
export default async function BlogPost({ params }) {
  const { slug } = await params
  // ... resto del codice
}
```

## 🤝 Contribuire

Contributi, suggerimenti e correzioni sono benvenuti!

1. Fork il progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

### 🐛 Segnala Bug o Suggerimenti

Hai trovato un errore o vuoi suggerire miglioramenti?  
Apri una [issue](https://github.com/donatodelpeschio/nextjs-corso-completo/issues)!

## 📝 Changelog

### v2.0 (Gennaio 2025)
- ✅ Aggiornamento completo a Next.js 15.1+
- ✅ Tutti gli esempi con `await params`
- ✅ Aggiunto progress tracking con localStorage
- ✅ Font migliorati (Inter + Fira Code)
- ✅ Completate tutte le sezioni in sviluppo
- ✅ Aggiunte keyboard shortcuts
- ✅ Migliorato design e UX

### v1.0 (2024)
- ✅ Release iniziale per Next.js 13-14

## 📄 License

Questo progetto è rilasciato sotto licenza [MIT](LICENSE).

## ☕ Supporta il Progetto

Se questo corso ti è stato utile, considera di offrirmi un caffè! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/donatodelpo)

## 🔗 Links

- 🌐 **Demo Live**: [nextjs-corso-completo](https://donatodelpeschio.github.io/nextjs-corso-completo/)
- 📝 **Blog**: [donatodelpeschio.it/blog](https://donatodelpeschio.it/blog/)
- ☕ **Buy Me a Coffee**: [buymeacoffee.com/donatodelpo](https://buymeacoffee.com/donatodelpo)
- 🐙 **GitHub**: [donatodelpeschio](https://github.com/donatodelpeschio)

## 📊 Statistiche Corso

- **16 Capitoli** completi e approfonditi
- **50+ Esempi di codice** testati e funzionanti
- **10+ Esercizi pratici** progressivi
- **Tempo stimato**: 15-20 ore per completarlo
- **Livello**: Intermedio (richiede conoscenza React)

## 🙏 Ringraziamenti

Grazie a tutti coloro che hanno contribuito con feedback, correzioni e suggerimenti!

## 📢 Feedback

Hai suggerimenti o hai trovato errori?
- Apri una [issue](https://github.com/donatodelpeschio/nextjs-corso-completo/issues)
- Contattami tramite la sezione [contatti](https://donatodelpeschio.it/#contact)
- Lascia una ⭐ se il corso ti è piaciuto!

---

<p align="center">
  Fatto con ❤️ da <a href="https://donatodelpeschio.it">Donato Del Peschio</a>
</p>

<p align="center">
  <a href="https://donatodelpeschio.github.io/nextjs-corso-completo/">🚀 Inizia Subito il Corso</a>
</p>

---

### 🔄 Mantieni il Corso Aggiornato

Questo corso viene aggiornato regolarmente. Per ricevere notifiche:

1. Clicca su **"Watch"** in alto a destra su GitHub
2. Seleziona **"Custom" → "Releases"**
3. Riceverai notifiche per ogni nuovo aggiornamento!