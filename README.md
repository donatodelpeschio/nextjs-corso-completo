# 🚀 Corso Completo Next.js

> Guida pratica e completa per imparare Next.js da zero - in italiano 🇮🇹

[![Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://donatodelpeschio.github.io/nextjs-corso-completo/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://donatodelpeschio.it)

## 📖 Descrizione

Corso completo Next.js pensato per sviluppatori React che vogliono padroneggiare il framework. Include teoria essenziale, esempi pratici ed esercizi progressivi. Particolare focus su App Router (Next.js 13+), Server/Client Components, strategie di rendering e SEO avanzato.

**[🌐 Apri il Corso Online](https://donatodelpeschio.github.io/nextjs-corso-completo/)**

## ✨ Caratteristiche

- ✅ **13 capitoli progressivi** - da setup a deployment
- ✅ **App Router moderno** - Next.js 13+ con le ultime best practices
- ✅ **Esempi di codice** - pronti da copiare e sperimentare
- ✅ **Esercizi pratici** - per consolidare l'apprendimento
- ✅ **SEO e Metadata** - gestione completa di canonical, Open Graph, meta tags
- ✅ **Single HTML file** - apribile su secondo monitor mentre pratichi
- ✅ **Design leggibile** - navigazione fluida tra i capitoli

## 📚 Contenuti

### Fondamenti
- Introduzione a Next.js
- Setup e Primo Progetto
- Routing File-Based
- Pages Router vs App Router

### Rendering
- Strategie di Rendering (SSG, SSR, ISR)
- Server Components
- Client Components
- Data Fetching Avanzato

### SEO & Metadata
- Metadata API
- SEO Avanzato (canonical, Open Graph, JSON-LD)

### Features Avanzate
- Layouts e Templates
- API Routes
- Middleware
- Ottimizzazione Performance

### Progetto Pratico
- Blog Completo End-to-End
- Deployment
- Best Practices

## 🎯 A Chi è Rivolto

Questo corso è perfetto per te se:

- ✅ Conosci **React** (componenti, hooks, props, state)
- ✅ Hai familiarità con **JavaScript ES6+**
- ✅ Vuoi imparare **Next.js** in modo pratico
- ✅ Cerchi una risorsa **in italiano**
- ✅ Vuoi capire **Server Components** e **App Router**

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

### Suggerimento di Studio
1. Leggi la teoria sul corso HTML
2. Apri il terminale e crea i progetti mentre leggi
3. Sperimenta con il codice
4. Completa gli esercizi alla fine di ogni capitolo

## 💡 Highlights

### Capitolo SEO e Metadata
Risponde alla domanda comune: *"Come gestisco canonical e meta tags in Next.js?"*

```jsx
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}` // 🎯 Canonical!
    },
    openGraph: {
      title: post.title,
      images: [post.coverImage],
    }
  }
}
```

Niente React Helmet necessario - Next.js fa tutto nativamente! ✨

## 🤝 Contribuire

Contributi, suggerimenti e correzioni sono benvenuti!

1. Fork il progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📝 License

Questo progetto è rilasciato sotto licenza [MIT](LICENSE).

## ☕ Supporta il Progetto

Se questo corso ti è stato utile, considera di offrirmi un caffè! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/donatodelpo)

## 🔗 Links

- 🌐 **Blog**: [donatodelpeschio.it/blog](https://donatodelpeschio.it/blog/)
- 📧 **Contatti**: [https://donatodelpeschio.it/#contact](https://donatodelpeschio.it/#contact)
- ☕ **Buy Me a Coffee**: [buymeacoffee.com/donatodelpo](https://buymeacoffee.com/donatodelpo)

## 📢 Feedback

Hai suggerimenti o hai trovato errori? Apri una [issue](https://github.com/donatodelpeschio/nextjs-corso-completo/issues) o contattami tramite il mio blog!

---

<p align="center">
  Fatto con ❤️ da <a href="https://donatodelpeschio.it">Donato Del Peschio</a>
</p>

<p align="center">
  <a href="https://donatodelpeschio.github.io/nextjs-corso-completo/">🚀 Inizia Subito il Corso</a>
</p>