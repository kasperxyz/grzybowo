<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import '$lib/i18n.js';
  import { availableLanguages, languageRoutes } from '$lib/i18n.js';
  import logoSvg from '$lib/assets/images/logo.svg';
  import logoBig from '$lib/assets/images/logo-big.svg';
  import photo1 from '$lib/assets/images/1.jpg';
  import photo2 from '$lib/assets/images/2.jpg';
  import photo3 from '$lib/assets/images/3.jpg';
  import photo4 from '$lib/assets/images/4.jpg';
  import photo5 from '$lib/assets/images/5.jpg';
  import photo6 from '$lib/assets/images/6.jpg';
  import photo7 from '$lib/assets/images/7.jpg';
  import photo8 from '$lib/assets/images/8.jpg';
  import photo9 from '$lib/assets/images/9.jpg';
  import photo10 from '$lib/assets/images/10.jpg';
  import sauna from '$lib/assets/images/sauna.jpg';
  import beach from '$lib/assets/images/beach.jpg';
  import cycling from '$lib/assets/images/cycling.jpg';
  import hossoland from '$lib/assets/images/hossoland.jpg';
  import kolobrzeg from '$lib/assets/images/kolobrzeg.jpg';
  import gdansk from '$lib/assets/images/gdansk.jpg';
  import szczecin from '$lib/assets/images/szczecin.jpg';
  import saunaIcon from '$lib/assets/icons/sauna.svg';
  import seaIcon from '$lib/assets/icons/sea.svg';
  import bbqIcon from '$lib/assets/icons/bbq.svg';
  import bikeIcon from '$lib/assets/icons/bike.svg';
  import deckIcon from '$lib/assets/icons/deck.svg';
  import petsIcon from '$lib/assets/icons/pets.svg';
  import playgroundIcon from '$lib/assets/icons/playground.svg';
  import wifiIcon from '$lib/assets/icons/wifi.svg';
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

<!-- Introduction Section -->
<section class="introduction">
    <div class="container">
        <div class="introduction-body">
            <!-- Image -->
            <div class="introduction-col-1">
                <img src={photo4} alt="Interior view" class="intro-image" />
            </div>

            <div class="introduction-col-2">
                <h2>
                  {$_('intro.heading')}
                </h2>
            </div>

            <!-- Content -->
            <div class="introduction-col-3">                
                <p>
                    {$_('intro.description_1')}
                </p>
                <p>
                    {$_('intro.description_2')}
                </p>
            </div>

            <div class="introduction-col-4">
                <img src={photo8} alt="Detail view" class="introduction-image" />
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
      <div class="ruby-header">
          <h2 class="ruby-heading">
              Dwa domy, jedna filozofia spokoju
          </h2>
          <p class="ruby-description">Oba domy oferują ten sam standard luksusu. Niezależnie, który wybierzesz, zyskujesz dostęp do wspólnego ogrodu i sauny — idealnego miejsca na poranny relaks lub wieczorne rozmowy pod gwiazdami.</p>
      </div>
        
        <div class="houses-grid">
            <!-- House 1 -->
            <div class="house-card">
                <img src={photo3} alt="House Rubin" class="house-image" />
                <div class="house-content">
                    <div class="house-info">
            <h3 class="house-name">Rubin<span>Duży</span></h3>
            <a class="cta-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" on:click={() => window.gtag?.('event', 'book_click', { event_category: 'cta', event_label: 'house_large_booking' })}>Rezerwuj</a>
                    </div>
                    <p>
                        4 gości / 1 sypialnia / 3 Łóżka / 1 Łazienka / Duży taras / Sauna
                    </p>
                </div>
            </div>
            
            <!-- House 2 -->
            <div class="house-card">
                <img src={photo5} alt="House Rubin" class="house-image" />
                <div class="house-content">
                    <div class="house-info">
            <h3 class="house-name">Rubin<span>Mały</span></h3>
            <a class="cta-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" on:click={() => window.gtag?.('event', 'book_click', { event_category: 'cta', event_label: 'house_small_booking' })}>Rezerwuj</a>
                    </div>
                    <p>
                        4 gości / 1 sypialnia / 2 Łóżka / 1 Łazienka / Duży taras / Sauna
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section id="features" class="features">
<div class="container">
    <div class="ruby-header">
        <h2 class="ruby-heading">
            Każdy detal zaprojektowany<br> z myślą o relaksie
        </h2>
        <p class="ruby-description">W Rubinowych Domach wszystko ma znaczenie — ogród i sauna dostępne dla obu domów tworzą prywatną strefę wellness, w której natura gra główną rolę.</p>
    </div>
    
    <div class="features-content">
        <!-- Images -->
        <div class="features-images">
            <img src={photo9} alt="Vacation rental amenities" class="feature-main-image" />
            <div class="feature-detail-images">
                <img src={photo10} alt="Feature detail" class="feature-detail-image" />
                <img src={sauna} alt="Feature detail" class="feature-detail-image" />
            </div>
        </div>
    
        <!-- Features List -->
        <div class="features-list">
          <div class="feature-item">
              <div class="feature-icon">
                <img src={saunaIcon} alt="Sauna" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Sauna</span>
          </div>
            <div class="feature-item">
              <div class="feature-icon">
                <img src={petsIcon} alt="Pets" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Zwierzęta mile widziane</span>
          </div>
            <div class="feature-item">
              <div class="feature-icon">
                <img src={bbqIcon} alt="BBQ" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Gril ogrodowy</span>
          </div>
            <div class="feature-item">
              <div class="feature-icon">
                <img src={playgroundIcon} alt="Playground" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Trampolina dla dzieci</span>
          </div>
            <div class="feature-item">
              <div class="feature-icon">
                <img src={seaIcon} alt="Sea" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Bliskość plaży</span>
          </div>
            <div class="feature-item">
              <div class="feature-icon">
                <img src={bikeIcon} alt="Bike" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Rowery</span>
          </div>
            <div class="feature-item">
               <div class="feature-icon">
                <img src={deckIcon} alt="Deck" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Komplet ogrodowy</span>
          </div>
            <div class="feature-item">
              <div class="feature-icon">
                <img src={wifiIcon} alt="WiFi" loading="lazy" class="feature-svg" />
              </div>
              <span class="feature-text">Dostęp do internetu</span>
          </div>
        </div>
    </div>
</div>
</section>

<!-- Map Section -->
<section id="map" class="map-section">
    <div class="container">
        <div class="map-body">
            <div class="ruby-header">
                <h2 class="ruby-heading">
                    Blisko wszystkiego, <br>co warte zobaczenia
                </h2>
                <p class="ruby-description">To idealne miejsce dla tych, którzy chcą odpocząć od zgiełku, nie rezygnując z bliskości miejskich atrakcji.</p>
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
                                <img src={beach} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Plaża w Grzybowie</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={cycling} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Ścieżka rowerowa</p>
                                        <p class="map-card-distance">1.2 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={hossoland} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Hossoland</p>
                                        <p class="map-card-distance">34.0 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={kolobrzeg} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Kołobrzeg</p>
                                        <p class="map-card-distance">4.0 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={szczecin} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Szczecin</p>
                                        <p class="map-card-distance">135.0 km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="map-card-item">
                                <img src={gdansk} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Gdańsk</p>
                                        <p class="map-card-distance">253.0 km</p>
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
            <!-- <div class="map-svg">
                <img src={map} alt="Map" class="map-image" />
            </div> -->
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
        background: linear-gradient(0deg, rgba(14, 15, 30, 0.00) 0%, rgba(14, 15, 30, 0.50) 40%), url('../lib/assets/images/1.jpg') lightgray 50% / cover no-repeat;
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
    @media (max-width: 768px) {
      padding: 6rem 0;
    }
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
           @media (max-width: 1024px) {
              max-width: 420px;
              margin: auto;
            }
        }

        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
            grid-column-gap: 0;
            grid-row-gap: 4rem;
            text-align: center;
            
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
    background: rgba(236, 229, 221, 0.50);

    .houses-header {
      text-align: center;
      margin-bottom: 4rem;
    }
  
    .houses-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }

      .house-card {
        display: flex;
        flex-direction: column;

        .house-image {
          width: 100%;
          height: 420px;
          object-fit: cover;
          @media (max-width: 768px) {
            height: 320px;
          }
        }

      
        .house-content {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 4rem;
          background: white;
          padding: 2rem;
            p {
                margin: 0;
            }
          @media (max-width: 768px) {
            gap: 2rem;
            padding: 1.5rem;
          }
        
          .house-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
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

  .ruby-header {
      margin-bottom: 4rem;
      h2 {
        text-align: center;
        text-align: center;
      }
      .ruby-description {
        max-width: 720px;
        margin: 24px auto 0 auto;
        text-align: center;
      }
    }

  /* Features Section */
  .features {
    padding: 6rem 0;


    .features-header {
      text-align: center;
      margin-bottom: 4rem;
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
            width: 56px;
            height: 56px;
            display: flex;
            justify-content: center;
            align-items: center;
  
            .feature-svg {
              fill: #4b5563;
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
    padding: 6rem 0;
    background: rgba(236, 229, 221, 0.50);

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
          background: white;
          @media (max-width: 768px) { 
            flex: 0 0 calc(60% - 1rem) !important;
          }
        
          .map-card-item {
            display: flex;
            flex-direction: column;

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
