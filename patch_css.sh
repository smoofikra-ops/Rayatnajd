cat << 'CSS_EOF' > index_patch.css
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&family=Almarai:wght@300;400;700;800&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Alexandria", "Almarai", ui-sans-serif, system-ui, sans-serif;
  --color-primary: #0E5A36;
  --color-primary-light: #168a53;
  --color-primary-dark: #07331e;
  --color-secondary: #2E8B57;
  --color-accent-gold: #D4AF37;
  --color-accent-light: #e6c86e;
  
  --color-bg-primary: var(--background);
  --color-bg-secondary: var(--background-muted);
  --color-text-main: var(--foreground);
  --color-text-muted: var(--foreground-muted);

  --color-background: var(--background);
  --color-background-muted: var(--background-muted);
  --color-surface: var(--surface);
  --color-surface-elevated: var(--surface-elevated);
  --color-foreground: var(--foreground);
  --color-foreground-muted: var(--foreground-muted);
  --color-card-background: var(--card-background);
  --color-card-text: var(--card-text);
  --color-card-heading: var(--card-heading);
  --color-card-border: var(--card-border);
}

@layer base {
  :root, .light {
    --background: #ffffff;
    --background-muted: #f8fafc;
    --surface: #ffffff;
    --surface-elevated: #ffffff;
    --foreground: #0f172a;
    --foreground-muted: #475569;
    --border: rgba(0, 0, 0, 0.1);
    
    --card-background: #ffffff;
    --card-text: #334155;
    --card-heading: #0f172a;
    --card-border: rgba(0, 0, 0, 0.1);
    
    --button-primary: #0E5A36;
    --button-primary-text: #ffffff;
  }
  
  .dark {
    --background: #020617;
    --background-muted: #0f172a;
    --surface: #0f172a;
    --surface-elevated: #1e293b;
    --foreground: #f8fafc;
    --foreground-muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.1);
    
    --card-background: #0f172a;
    --card-text: #f1f5f9;
    --card-heading: #ffffff;
    --card-border: rgba(255, 255, 255, 0.1);
    
    --button-primary: #168a53;
    --button-primary-text: #ffffff;
  }

  /* Automatic Background-Aware Behavior */
  [data-theme="dark"], .dark-theme-section {
    --background: #020617;
    --background-muted: #0f172a;
    --surface: #0f172a;
    --surface-elevated: #1e293b;
    --foreground: #f8fafc;
    --foreground-muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.1);
    --card-background: rgba(15, 23, 42, 0.8);
    --card-text: #f1f5f9;
    --card-heading: #ffffff;
    --card-border: rgba(255, 255, 255, 0.1);
  }
  
  body {
    @apply font-sans text-text-main overflow-x-hidden transition-colors duration-300 bg-bg-primary;
    min-height: 100vh;
  }
}

.premium-card {
  @apply bg-card-background text-card-text rounded-[24px] border border-card-border
         shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]
         transition-all duration-300 ease-out
         hover:-translate-y-1 hover:scale-[1.02] 
         hover:shadow-[0_12px_30px_-8px_rgba(14,90,54,0.15)] dark:hover:shadow-[0_12px_30px_-8px_rgba(14,90,54,0.3)]
         hover:border-primary/20 dark:hover:border-primary/30;
}
CSS_EOF
cat src/index.css | awk '/\.glass \{/{p=1} p' >> index_patch.css
mv index_patch.css src/index.css
