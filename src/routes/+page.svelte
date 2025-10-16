<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import '$lib/i18n.js';
  import { availableLanguages, languageRoutes } from '$lib/i18n.js';
  import logoSvg from '$lib/assets/images/logo.svg';
  import logoBig from '$lib/assets/images/logo-big.svg';
  import features1 from '$lib/assets/images/features_1.png';
  import features2 from '$lib/assets/images/features_2.png';
  import features3 from '$lib/assets/images/features_3.png';
  import map1 from '$lib/assets/images/map1.png';
  import map2 from '$lib/assets/images/map2.png';
  import map3 from '$lib/assets/images/map3.png';
  import map from '$lib/assets/images/mapsvg.svg';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { browser } from '$app/environment';
  
  // Embla Carousel options for 3 slides per view
  const emblaOptions = {
    slidesToScroll: 1,
    containScroll: 'trimSnaps' as const,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  };

  // Carousel navigation
  let emblaApi: any;
  
  function onInit(event: any) {
    emblaApi = event.detail;
  }
  
  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }
  
  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  // Get current language from URL 
  $: currentLang = $locale || 'pl';  
  
  function switchLanguage(lang: keyof typeof languageRoutes) {
    window.location.href = languageRoutes[lang];
  }

  function handleLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedLang = selectElement.value as keyof typeof languageRoutes;
    switchLanguage(selectedLang);
  }
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
                <img src={features1} alt="Interior view" class="intro-image" />
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
                <img src={features1} alt="Detail view" class="introduction-image" />
            </div>
        </div>
    </div>
</section>

<!-- Divider Image -->
<!-- <section class="divider">
    <div class="container">
        <img src={features1} alt="Decorative element" class="divider-image" />
    </div>
</section> -->

<!-- Houses Section -->
<section id="houses" class="houses">
    <div class="container">
        <div class="houses-header">
            <h2 class="section-heading">
                <div>Zachęcająca atmosfera do <br>wytchnienia i spokojnego</div>
            </h2>
        </div>
        
        <div class="houses-grid">
            <!-- House 1 -->
            <div class="house-card">
                <img src={features1} alt="House Rubin" class="house-image" />
                <div class="house-overlay"></div>
                <div class="house-content">
                    <div class="house-info">
                        <h3 class="house-name">Rubin<span>Duży</span></h3>
                        <button class="cta-button">{$_('hero.cta_button')}</button>
                    </div>
                    <p>
                        4 sypialnie / 3 łazienki / kuchnia / Salon / Duży taras / Jacuzzi
                    </p>
                </div>
            </div>
            
            <!-- House 2 -->
            <div class="house-card">
                <img src={features2} alt="House Rubin" class="house-image" />
                <div class="house-overlay"></div>
                <div class="house-content">
                    <div class="house-info">
                        <h3 class="house-name">Rubin<span>Mały</span></h3>
                        <button class="cta-button">{$_('hero.cta_button')}</button>
                    </div>
                    <p>
                        4 sypialnie / 3 łazienki / kuchnia / Salon / Duży taras / Jacuzzi
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="features">
<div class="container">
    <div class="features-header">
        <h2 class="section-heading">
            <div>Zachęcająca atmosfera do <br>wytchnienia i spokojnego</div>
        </h2>
    </div>
    
    <div class="features-content">
        <!-- Images -->
        <div class="features-images">
            <img src={features1} alt="Vacation rental amenities" class="feature-main-image" />
            <div class="feature-detail-images">
                <img src={features2} alt="Feature detail" class="feature-detail-image" />
                <img src={features3} alt="Feature detail" class="feature-detail-image" />
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
    <div class="container">
        <div class="map-body">
            <div class="map-header">
                <h2 class="section-heading">
                    <div>Zachęcająca atmosfera do</div>
                    <div>wytchnienia i spokojnego</div>
                </h2>
            </div>
            {#if browser}
            <div class="carousel-wrapper">
                <button class="embla__prev" on:click={scrollPrev} aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                
                <div class="embla" use:emblaCarouselSvelte={{ options: emblaOptions, plugins: [] }} on:emblaInit={onInit}>
                    <div class="embla__container">
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={map1} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Centrum Grzybowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={map2} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Centrum Grzybowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={map3} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Centrum Grzybowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={map1} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Centrum Grzybowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={map2} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Centrum Grzybowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={map3} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Centrum Grzybowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="embla__next" on:click={scrollNext} aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            {/if}
            <div class="map-svg">
                <img src={map} alt="Map" class="map-image" />
            </div>
        </div>
    </div>
</section>

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
        <div class="footer-right">
            <nav class="footer-nav">
                <a href="#houses" class="nav-link">{$_('nav.houses')}</a>
                <a href="#features" class="nav-link">{$_('nav.attractions')}</a>
                <a href="#map" class="nav-link">{$_('nav.location')}</a>
            </nav>
            <button class="cta-button">{$_('hero.cta_button')}</button>
        </div>
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
    /* Hero */
    .hero {
        position: relative;
        height: 810px;
        background: linear-gradient(0deg, rgba(14, 15, 30, 0.00) 0%, rgba(14, 15, 30, 0.50) 40%), url('../lib/assets/images/heros.jpg') lightgray 50% / cover no-repeat;
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
                    gap: 4rem;
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


  /* Introduction Section */
  .introduction {
    padding: 8rem 0;

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
            &:nth-child(1) {
                padding-bottom: 24px;
            }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
            grid-column-gap: 0;
            grid-row-gap: 24px;
            
            .introduction-col-1,
            .introduction-col-2,
            .introduction-col-3,
            .introduction-col-4 {
                grid-area: auto;
            }
            
            .introduction-col-1 {
                order: 2;
            }
            
            .introduction-col-2 {
                order: 1;
            }
            
            .introduction-col-3 {
                order: 3;
            }
            
            .introduction-col-4 {
                order: 4;
            }
        }
    }
  }

  /* Divider Section */
  .divider {
    display: flex;
    justify-content: center;

    .divider-image {
      width: 434px;
      height: 133px;
      object-fit: cover;
    }
  }


  /* Houses Section */
  .houses {
    padding: 6rem 0;

    .houses-header {
      text-align: center;
      margin-bottom: 5rem;
    }
  
    .houses-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .house-card {
        position: relative;
        cursor: pointer;
        overflow: hidden;
        height: 540px;

        .house-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      
        .house-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 7, 14, 0.1) 50%, rgba(14, 15, 30, 0.70) 100%);
        }
      
        .house-content {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          right: 2rem;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 1.5rem;

            p {
                margin: 0;
            }

          .house-name {
            font-size: 2.5rem;
            font-weight: 300;
            text-transform: uppercase;
          }
        
          .house-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            span {
                font-style: italic;
                text-transform: lowercase;
                letter-spacing: 0px;
                padding-left: 0.5rem;
            }
            @media (max-width: 768px) {
              flex-direction: column;
              align-items: flex-start;
              .cta-button {
                width: 100%;
                margin-top: 16px;
              }
            }
          }
        }
      
      }
    
    }
  
  }


  /* Features Section */
  .features {
    padding: 6rem 0;
    background: rgba(236, 229, 221, 0.50);

    .features-header {
      text-align: center;
      margin-bottom: 5rem;
    }

    .features-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
  
      .features-images {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
  
        .feature-main-image {
          width: 100%;
          height: 298px;
          object-fit: cover;
        }
      
        .feature-detail-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
  
          .feature-detail-image {
            width: 100%;
            height: 316px;
            object-fit: cover;
          }
        }
      }
    
      .features-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
  
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
  
          .feature-icon {
            padding: 1rem;
              border-radius: 4px;
              background: rgba(224, 215, 204, 0.50);
  
            .feature-svg {
              width: 1.5rem;
              height: 1.5rem;
              color: #4b5563;
            }
          }
        
          .feature-text {
            color: #111827;
          }
        }
      }
    }
  }

  /* Map Section */
  .map-section {
    padding: 6rem 0 0 0;

    .map-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      .map-header {
        text-align: center;
      }

      .carousel-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 100%;
      }

      .embla__prev,
      .embla__next {
        position: absolute;
        z-index: 20;
        background: white;
        border: 1px solid #EAE4DD;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .embla__prev:hover,
      .embla__next:hover {
        background: #f8f9fa;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
      }

      .embla__prev {
        left: 1rem;
      }

      .embla__next {
        right: 1rem;
      }

      .embla__prev svg,
      .embla__next svg {
        color: #374151;
      }

      .embla {
        overflow: hidden;
        /* padding: 0 2rem; */
        position: relative;
        flex: 1;
      }

      .embla__container {
        display: flex;
        gap: 1rem;
        max-width: 1120px;
        
        .embla__slide {
          padding: 6px;
          border: 1px solid #EAE4DD;
          flex: 0 0 calc(25% - 1rem);
          min-width: 0;
          @media (max-width: 768px) { 
            flex: 0 0 calc(60% - 1rem) !important;
          }
        
          .map-card-item {
            display: flex;
            flex-direction: column;
            background-color: #F5F2EE;

            .map-image {
              width: 100%;
              height: 160px;
              object-fit: cover;
            }

            .map-card-content {
              padding: 1rem;

              .map-card-title {
                margin: 0;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.5rem;
              }

              .map-card-distance {
                margin: 0;
                font-size: 0.8rem;
                line-height: 1rem;
                color: #72717C;
              }
            }
          }
        }

        @media (max-width: 767px) {                
          .embla__slide {
            flex: 0 0 85%;
          }
        }
      }

      .map-svg {
        display: flex;
        width: 100%;
        justify-content: center;
        img {
          width: 100%;
          max-width: 886px;
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
