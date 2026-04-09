// Configuration
const TOTAL_CHAPTERS = 16;
const chapters = [
    'intro', 'setup', 'routing', 'pages-vs-app',
    'rendering', 'server-components', 'client-components', 'data-fetching',
    'metadata', 'seo-advanced',
    'layouts', 'api-routes', 'middleware', 'optimization',
    'blog-project', 'deployment'
];

let currentChapter = 'intro';

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('nextjs-course-progress');
    return saved ? JSON.parse(saved) : {};
}

// Save progress to localStorage
function saveProgress(progress) {
    localStorage.setItem('nextjs-course-progress', JSON.stringify(progress));
}

// Update progress bar
function updateProgressBar() {
    const progress = loadProgress();
    const completed = Object.keys(progress).filter(k => progress[k]).length;
    const percentage = Math.round((completed / TOTAL_CHAPTERS) * 100);
    
    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    
    if (fill) fill.style.width = percentage + '%';
    if (text) text.textContent = `${completed} di ${TOTAL_CHAPTERS} completati (${percentage}%)`;
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        const chapter = item.dataset.chapter;
        if (progress[chapter]) {
            item.classList.add('completed');
        } else {
            item.classList.remove('completed');
        }
    });
    
    // Update complete button if exists
    updateCompleteButton();
}

// Update complete button state
function updateCompleteButton() {
    const progress = loadProgress();
    const btn = document.getElementById(`completeBtn-${currentChapter}`);
    
    if (btn) {
        if (progress[currentChapter]) {
            btn.textContent = '✓ Completato';
            btn.classList.add('completed');
        } else {
            btn.textContent = '✓ Segna Completato';
            btn.classList.remove('completed');
        }
    }
}

// Toggle chapter completion
function toggleChapterComplete() {
    const progress = loadProgress();
    progress[currentChapter] = !progress[currentChapter];
    saveProgress(progress);
    updateProgressBar();
}

// Mark chapter as complete and move forward
function completeAndContinue(nextChapter) {
    const progress = loadProgress();
    progress[currentChapter] = true;
    saveProgress(progress);
    updateProgressBar();
    showChapter(nextChapter);
}

// Load chapter content
async function loadChapterContent(chapterId) {
    const container = document.getElementById('chapterContent');
    
    try {
        container.innerHTML = '<div class="loading">Caricamento...</div>';
        
        const response = await fetch(`chapters/${chapterId}.html`);
        if (!response.ok) throw new Error('Chapter not found');
        
        const html = await response.text();
        container.innerHTML = html;
        
        // Update complete button after content loads
        updateCompleteButton();
        
    } catch (error) {
        container.innerHTML = `
            <div class="info-box critical">
                <div class="info-box-title">Errore</div>
                <p>Impossibile caricare il capitolo. Ricarica la pagina.</p>
            </div>
        `;
    }
}

// Show chapter
function showChapter(chapterId) {
    currentChapter = chapterId;
    
    // Load content
    loadChapterContent(chapterId);
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNav = document.querySelector(`[data-chapter="${chapterId}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    // Update URL hash
    window.location.hash = chapterId;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Reset all progress
function resetProgress() {
    if (confirm('Sei sicuro di voler resettare tutti i progressi?')) {
        localStorage.removeItem('nextjs-course-progress');
        updateProgressBar();
    }
}

// Handle hash navigation
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash && chapters.includes(hash)) {
        showChapter(hash);
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const currentIndex = chapters.indexOf(currentChapter);
            if (currentIndex < chapters.length - 1) {
                completeAndContinue(chapters[currentIndex + 1]);
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const currentIndex = chapters.indexOf(currentChapter);
            if (currentIndex > 0) {
                showChapter(chapters[currentIndex - 1]);
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            toggleChapterComplete();
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load initial chapter from hash or default to intro
    const initialChapter = window.location.hash.slice(1) || 'intro';
    showChapter(chapters.includes(initialChapter) ? initialChapter : 'intro');
    
    // Update progress bar
    updateProgressBar();
});
