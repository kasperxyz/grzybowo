<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import '$lib/i18n.js';
  import { availableLanguages, languageRoutes } from '$lib/i18n.js';
  import logoSvg from '$lib/assets/images/logo.svg';

  // Image assets from Figma
  const imgHero = "https://s3-alpha-sig.figma.com/img/b42a/53ea/7dc2e82f7d445ecf7e0da5285af6aa06?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a6JYv4NXzNkrqS7FJPLxezC-rNFOkSiAjd4EmJOnbH8KCm7XCiT3c~2pFuz1rMwmH8ErcyXquktUqRkcrBZVhCdwKDulzETHQiI7OwPf6P08nCgKNP9SKAMm8CjMU9WYY7s2yK2~A3caZ5ajooWGg0XoBFcRlY1VmJa6mqr3YGWQYtN5H5zrsSXWLm6jIhs1o3biUesZaDc5DK8HDkepLeekZePDNpYa5iD0CtBS~K0953jIQUS6wJsh~nrnIemRKMFO5issFFSoJVfGSpSvRbd3qGRlFCSS4oUVjHP9A9Ok5NdsB2vUdkwgPGoF375JOWsqzm1pmGFgPmTSp5e5Hw__";
  const imgHouse = "https://s3-alpha-sig.figma.com/img/509b/0706/e42b080d3f1d68025f8040c5ce2d56f4?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PLAoX6oHuJU8Qw1wDPl7~lMqEox1KNHecCQclCaubP2WDcki7rSsMYjZD4YKAloZaLjQBfdbWo7exG2-iM3ot8ORN6~HoGjKUWuoyIKkPgq78mgkVUtY2hnlDU91GwsQwRUpLBsVZ2hnxP85naVZIARXOmfQ-3fu1qx9gNXkp~D1Vg-bC6WHPROdOytJtgW-38MvT2VWwyUy7QlRoNZjBci6SeMXAcNrRZnM~4eUMY4wrUMZw3KCO3EygXrHoJ~6N7QKBC1HZ7qKPYndGLQ2r2Rso-rTqbN3Ejn0BQUhJrMX1fJ9Zh1T74emjBpV6mw0mOXT3G3V-TT8qszXiBRdPg__";
  const imgIntro = "https://s3-alpha-sig.figma.com/img/d58c/a464/34e3f09598e35205a915786aff371add?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvrGGMxB~WcGm46GfUtyIXtLrze1iWw4ihCaH6DiLXq76Nvnk83YW2~57wHaadI~v72XRG~QyMWrBmXxE3Z-V~8LfgxgGrKoVzVCLlo2mO75RZc0CxHFrOz-KZW~43bX-tH9DKj1ydIopTDHlntfnvtc~Pawmb7m3tsKohAIxbofKRr0JHKmpbWP3Of7MWB0QsQyH1AwXQ3SqW08dFA0nsMFRLlQuPAcJy2x8FiCXCLFoOg40e8SjoBBmDwg6ZipJ91kTuG2NzRhyL6NcTzCEwFAJHRFOVPc~HWUl68Z4JJeUJ2lHubkui3VxmWQudKOkzcG72wdB0xB6aVYm2Rhlw__";
  const imgFeatures = "https://s3-alpha-sig.figma.com/img/6ca6/a0c4/3f4e79e2801d7a1fed643c932a0ac9ed?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NnEe~ElFIrU952cNCcqeEOrxMAV140Z30S-Ax30ZM2JWRB4O8J9UQ2xTn1vw1PqRBu3pL969iQWRENa13dlYJKPL1zdXp3oASdeAPArVl~H2lJB0~H92FV1ugVTbe9reFeJ3ZO6CjhnC50cExSrla8Ia-aLcEkEjlxc9lfvUaraUpoa3Gki66yoTTPWzZ5YxUIhZXi9vPMV3OY5emqlupttqYt6nu6s5yTKmTdr9U0N94dJlJd-3e0G1jTwmwshJN0T25WCTpGKoBodeZrGX~D~loWSgH0BhnpHebBgOOkH9GftTPP-w7G513DnA8xYFjNJcfLNoVj8bQN2C6ePNDA__";

  // Get current language from URL 
  $: currentLang = $locale || 'pl';  

  
  function switchLanguage(lang: keyof typeof languageRoutes) {
    window.location.href = languageRoutes[lang];
  }
</script>

<!-- Hero Section -->
<section class="hero">
    <nav class="hero-navigation">
        <div class="container">
            <div class="navigation">
                <!-- Left Menu -->
                <div class="navigation-menu-left">
                    <a href={languageRoutes.pl} class="nav-link" class:active={currentLang === 'pl'}>{$_('common.languages.polish')}</a>
                    <a href={languageRoutes.en} class="nav-link" class:active={currentLang === 'en'}>{$_('common.languages.english')}</a>
                    <a href={languageRoutes.de} class="nav-link" class:active={currentLang === 'de'}>{$_('common.languages.german')}</a>
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
                </div>
                
            </div>
        </div>
    </nav>
    <div class="hero-body">
        <div class="container">
            <div class="hero-content">
                <h1>{$_('hero.title')}</h1>
                <button class="cta-button">{$_('hero.cta_button')}</button>
            </div>
        </div>
    </div>
</section>

<!-- Introduction Section -->
<section class="introduction">
    <div class="container">
        <div class="introduction-body">
            <!-- Image -->
            <div class="introduction-col-1">
                <img src={imgIntro} alt="Interior view" class="intro-image" />
            </div>

            <div class="introduction-col-2">
                <h2>
                Zachęcająca atmosfera do wytchnienia i spokojnego
                </h2>
            </div>

            <!-- Content -->
            <div class="introduction-col-3">                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
            </div>

            <div class="introduction-col-4">
                <img src={imgIntro} alt="Detail view" class="introduction-image" />
            </div>
        </div>
    </div>
</section>

<!-- Divider Image -->
<section class="divider-section">
<img src={imgFeatures} alt="Decorative element" class="divider-image" />
</section>

<!-- Houses Section -->
<section id="houses" class="houses-section">
<div class="section-container">
    <div class="houses-header">
    <h2 class="section-heading">
        <div>Zachęcająca atmosfera do</div>
        <div>wytchnienia i spokojnego</div>
    </h2>
    </div>
    
    <div class="houses-grid">
    <!-- House 1 -->
    <div class="house-card">
        <img src={imgHouse} alt="House Rubin" class="house-image" />
        <div class="house-overlay"></div>
        <div class="house-content">
        <h3 class="house-name">Rubin</h3>
        <p class="house-size">Duży</p>
        </div>
    </div>
    
    <!-- House 2 -->
    <div class="house-card">
        <img src={imgHouse} alt="House Rubin" class="house-image" />
        <div class="house-overlay"></div>
        <div class="house-content">
        <h3 class="house-name">Rubin</h3>
        <p class="house-size">Duży</p>
        </div>
    </div>
    </div>
</div>
</section>

<!-- Features Section -->
<section id="features" class="features-section">
<div class="section-container">
    <div class="features-header">
    <h2 class="section-heading">
        <div>Zachęcająca atmosfera do</div>
        <div>wytchnienia i spokojnego</div>
    </h2>
    </div>
    
    <div class="features-content">
    <!-- Images -->
    <div class="features-images">
        <img src={imgFeatures} alt="Vacation rental amenities" class="feature-main-image" />
        <div class="feature-detail-images">
        <img src={imgIntro} alt="Feature detail" class="feature-detail-image" />
        <img src={imgHouse} alt="Feature detail" class="feature-detail-image" />
        </div>
    </div>
    
    <!-- Features List -->
    <div class="features-list">
        {#each Array(10) as _, i}
        <div class="feature-item">
            <div class="feature-icon">
            <svg class="feature-svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            </div>
            <span class="feature-text">Naturalne piękno</span>
        </div>
        {/each}
    </div>
    </div>
</div>
</section>

<!-- Map Section -->
<section id="map" class="map-section">
<div class="section-container">
    <div class="map-header">
    <h2 class="section-heading">
        <div>Zachęcająca atmosfera do</div>
        <div>wytchnienia i spokojnego</div>
    </h2>
    
    <!-- Distance Grid -->
    <div class="distance-grid">
        {#each [
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Lotnisko w Szczecinie' },
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Hossoland' },
        { distance: '2.5km', place: 'Hossoland' }
        ] as location}
        <div class="distance-item">
            <span class="distance-number">{location.distance}</span>
            <span class="distance-place">{location.place}</span>
        </div>
        {/each}
    </div>
    </div>
    
    <!-- Map Placeholder -->
    <div class="map-container">
    <div class="map-placeholder">
        <svg class="map-icon" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
        </svg>
        <p class="map-title">Mapa lokalizacji</p>
        <p class="map-subtitle">Gdańsk • Szczecin</p>
    </div>
    </div>
</div>
</section>

<!-- Footer -->
<footer class="footer">
<div class="section-container">
    <div class="footer-content">
    <!-- Logo & Contact -->
    <div class="footer-left">
        <div class="footer-logo">
        <div class="logo-icon">
            <svg class="logo-svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
            </svg>
        </div>
        <div class="footer-logo-text">
            <div>INTELIGENTNE</div>
            <div>DOMY RUBINOWE</div>
        </div>
        </div>
    </div>
    
    <!-- Right Side -->
    <div class="footer-right">
        <!-- Menu -->
        <nav class="footer-nav">
        <a href="#houses" class="footer-nav-link">{$_('nav.houses')}</a>
        <a href="#features" class="footer-nav-link">{$_('nav.attractions')}</a>
        <a href="#map" class="footer-nav-link">{$_('nav.location')}</a>
        </nav>
        
        <!-- CTA Button -->
        <button class="cta-button">
        Rezerwuj na Sun and Snow
        </button>
    </div>
    </div>
    
    <!-- Divider -->
    <div class="footer-bottom">
    <p class="footer-copyright">@2025</p>
    <div class="footer-lang">
        <span class="footer-lang-active">Polski</span>
        <span class="footer-lang-inactive">English</span>
        <span class="footer-lang-inactive">Deutsch</span>
    </div>
    </div>
</div>
</footer>

<style>
    /* Hero */
    .hero {
        position: relative;
        height: 810px;
        background: linear-gradient(0deg, rgba(14, 15, 30, 0.00) 0%, rgba(14, 15, 30, 0.50) 100%), url('../lib/assets/images/hero.jpg') lightgray 50% / cover no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

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
    
                .navigation-menu-left, 
                .navigation-menu-right {
                    display: flex;
                    align-items: center;
                    gap: 4rem;
                }
    
                .nav-link {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.875rem;
                    line-height: 20px;
                    text-decoration: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
    
                .nav-link:hover {
                    color: white;
                }
    
                .nav-link.active {
                    color: white;
                    font-weight: 600;
                }
        
                .navigation-logo {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
    
        }
    }


  /* Introduction Section */
  .introduction {
    padding: 8rem 2rem;

    .introduction-body {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 56px;
        grid-row-gap: 56px; 

        .introduction-col-1 { grid-area: 1 / 1 / 3 / 2; }
        .introduction-col-2 { grid-area: 1 / 2 / 2 / 4; }
        .introduction-col-3 { grid-area: 2 / 2 / 3 / 3; }
        .introduction-col-4 { grid-area: 2 / 3 / 3 / 4; }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        p {
            margin: 0;
            padding-bottom: 40px;
        }
    }
  }

  /* Divider Section */
  .divider-section {
    padding: 4rem 0;
    display: flex;
    justify-content: center;
  }

  .divider-image {
    width: 434px;
    height: 133px;
    object-fit: cover;
  }

  /* Houses Section */
  .houses-section {
    padding: 5rem 0;
  }

  .houses-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .houses-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .house-card {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    aspect-ratio: 664/576;
  }

  .house-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .house-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(17, 24, 39, 0.6), transparent);
  }

  .house-content {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    text-align: center;
    color: white;
  }

  .house-name {
    font-size: 2.5rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .house-size {
    font-size: 1.25rem;
    font-weight: 900;
  }

  /* Features Section */
  .features-section {
    padding: 5rem 0;
    background-color: #f9fafb;
  }

  .features-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .features-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: start;
  }

  .features-images {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .feature-main-image {
    width: 100%;
    height: 298px;
    object-fit: cover;
  }

  .feature-detail-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .feature-detail-image {
    width: 100%;
    height: 316px;
    object-fit: cover;
  }

  .features-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .feature-icon {
    background-color: rgba(229, 231, 235, 0.5);
    padding: 1rem;
    border-radius: 0.375rem;
  }

  .feature-svg {
    width: 2rem;
    height: 2rem;
    color: #4b5563;
  }

  .feature-text {
    color: #111827;
  }

  /* Map Section */
  .map-section {
    padding: 5rem 0;
  }

  .map-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .distance-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1024px;
    margin: 0 auto 4rem;
  }

  .distance-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .distance-number {
    color: #d97706;
    font-weight: 700;
  }

  .distance-place {
    color: #111827;
  }

  .map-container {
    position: relative;
    background-color: #e5e7eb;
    height: 400px;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .map-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    text-align: center;
  }

  .map-icon {
    width: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
  }

  .map-title {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  .map-subtitle {
    font-size: 0.875rem;
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

  .footer-logo-text {
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.125rem;
    line-height: 1.2;
  }

  .footer-right {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .footer-nav {
    display: flex;
    gap: 4rem;
  }

  .footer-nav-link {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-nav-link:hover {
    color: white;
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

  .footer-lang-active {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
  }

  .footer-lang-inactive {
    color: rgba(255, 255, 255, 0.5);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
    
    .intro-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .intro-content-col {
      padding-left: 0;
    }
    
    .intro-content-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .houses-grid {
      grid-template-columns: 1fr;
    }
    
    .features-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .distance-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .footer-content {
      flex-direction: column;
      gap: 2rem;
    }
    
    .footer-right {
      text-align: left;
    }
    
    .footer-nav {
      flex-direction: column;
      gap: 1rem;
    }
    
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
