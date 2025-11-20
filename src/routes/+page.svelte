<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import '$lib/i18n.js';
  import { availableLanguages, languageRoutes } from '$lib/i18n.js';
  import logoSvg from '$lib/assets/images/logo.svg';
  import logoBig from '$lib/assets/images/logo-big.svg';
  import instrukcja_a from '$lib/assets/instrukcja_a.pdf';
  import { Houses } from '$lib/components/houses';
  import { Area } from '$lib/components/area';
  import { Features } from '$lib/components/features';
  import { Introduction } from '$lib/components/introduction';

  // Get current language from URL 
  $: currentLang = $locale || 'pl';  
  
  import { goto } from '$app/navigation';

  function switchLanguage(lang: keyof typeof languageRoutes) {
    // Use client-side navigation to avoid 404s on static hosts
    goto(languageRoutes[lang]);
  }

  function handleLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLang = selectElement.value as keyof typeof languageRoutes;
    switchLanguage(selectedLang);
  }

  // Booking URL used for all "Rezerwuj" CTAs
  const bookingUrl = 'https://www.sunandsnow.pl/apartament-grzybowo-inteligentnerubinowedomy-988';
</script>

<!-- Hero Section -->
<section class="hero">
    <nav class="hero-navigation">
        <div class="container">
            <div class="navigation">
                <!-- Left Menu -->
                <div class="navigation-menu-left">
                    <select class="language-dropdown" on:change={handleLanguageChange} value={currentLang}>
                        <option value="pl">🇵🇱 {$_('common.languages.polish')}</option>
                        <option value="en">🇬🇧 {$_('common.languages.english')}</option>
                        <option value="de">🇩🇪 {$_('common.languages.german')}</option>
                    </select>
                </div>

                <!-- Logo/Icon in center -->
                <a href="/" class="navigation-logo">
                    <img src={logoSvg} alt="Logo" class="logo-icon" />
                </a>
                
                <!-- Right Menu -->
                <div class="navigation-menu-right">
                    <a href="#houses" class="nav-link">{$_('nav.houses')}</a>
                    <a href="#features" class="nav-link">{$_('nav.attractions')}</a>
                    <a href="#map" class="nav-link">{$_('nav.location')}</a>
                    <a href={instrukcja_a} class="nav-link" download rel="noopener noreferrer">Instrukcja obsługi</a>
                </div>
                
            </div>
        </div>
    </nav>
    <div class="hero-body">
        <div class="container">
            <div class="hero-content">
                <h1>{$_('hero.title')}</h1>
                <a class="cta-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" on:click={() => window.gtag?.('event', 'book_click', { event_category: 'cta', event_label: 'hero_booking' })}>Rezerwuj</a>
            </div>
        </div>
    </div>
</section>

<Introduction />
<Houses />
<Features />
<Area />

<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-content">
          <!-- Logo & Contact -->
          <div class="footer-left">
              <div class="footer-logo">
                  <img src={logoBig} alt="Logo" class="logo-icon" />
              </div>
          </div>
          
          <!-- Right Side -->
          <a class="cta-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" on:click={() => window.gtag?.('event', 'book_click', { event_category: 'cta', event_label: 'footer_booking' })}>Rezerwuj</a>
        </div>
    
    <!-- Divider -->
        <div class="footer-bottom">
            <p class="footer-copyright">@2025</p>
            <div class="footer-lang">
                <select class="language-dropdown" on:change={handleLanguageChange} value={currentLang}>
                    <option value="pl">🇵🇱 {$_('common.languages.polish')}</option>
                    <option value="en">🇬🇧 {$_('common.languages.english')}</option>
                    <option value="de">🇩🇪 {$_('common.languages.german')}</option>
                </select>
            </div>
        </div>
    </div>
</footer>

<style>
    .hero {
        position: relative;
        height: 100vh;
        max-height: 820px;
        background: linear-gradient(0deg, rgba(14, 15, 30, 0.00) 0%, rgba(14, 15, 30, 0.50) 40%), url('../lib/assets/images/backyard/1-2.jpg') lightgray 50% / cover no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (max-width: 1024px) {
          height: 620px;
        }

        .hero-body {
            flex-grow: 1;
            align-content: center;
            
            .hero-content {
                text-align: center;
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                max-width: 820px;
            }
        }

        .hero-navigation {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            width: 100%;

            .navigation {
                padding: 32px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                align-self: stretch;
                position: relative;
                @media (max-width: 1024px) {
                  flex-direction: row-reverse;
                }

                .navigation-menu-left, 
                .navigation-menu-right {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                }
                @media (max-width: 1024px) {
                  .navigation-menu-right {
                    display: none;
                  }
                }

                .navigation-logo {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    @media (max-width: 1024px) {
                      position: static;
                      transform: none;
                    }
                }
            }

        }
    }

  /* Footer */
  .footer {
    background-color: #111827;
    color: white;
    padding: 5rem 0;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 3rem;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-copyright {
    color: rgba(255, 255, 255, 0.5);
  }

  .footer-lang {
    display: flex;
    gap: 4rem;
    font-size: 0.875rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    
    .houses-grid {
      grid-template-columns: 1fr;
    }
    
    .features-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .footer-content {
      flex-direction: column;
      gap: 2rem;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
