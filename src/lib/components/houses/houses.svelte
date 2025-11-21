<script lang="ts">
  import back from '$lib/assets/icons/chevron_backward.svg';
  import forward from '$lib/assets/icons/chevron_forward.svg';
  import download from '$lib/assets/icons/download.svg';
  import photo_1a from '$lib/assets/images/house_a/1-7.jpg';
  import photo_2a from '$lib/assets/images/house_a/1-3.jpg';
  import photo_3a from '$lib/assets/images/house_a/1-4.jpg';
  import photo_4a from '$lib/assets/images/house_a/1-5.jpg';
  import photo_5a from '$lib/assets/images/house_a/1-6.jpg';
  import photo_6a from '$lib/assets/images/house_a/1-8.jpg';
  import photo_7a from '$lib/assets/images/house_a/1-9.jpg';
  import photo_8a from '$lib/assets/images/house_a/1-10.jpg';
  import photo_9a from '$lib/assets/images/house_a/1-11.jpg';
  import photo_10a from '$lib/assets/images/house_a/1-12.jpg';
  import photo_11a from '$lib/assets/images/house_a/1-13.jpg';
  import photo_12a from '$lib/assets/images/house_a/1-14.jpg';
  import photo_13a from '$lib/assets/images/house_a/1-15.jpg';
  import photo_14a from '$lib/assets/images/house_a/1-16.jpg';
  import photo_15a from '$lib/assets/images/house_a/1-17.jpg';
  import photo_1b from '$lib/assets/images/house_b/1-2.jpg';
  import photo_2b from '$lib/assets/images/house_b/1-3.jpg';
  import photo_3b from '$lib/assets/images/house_b/1-4.jpg';
  import photo_4b from '$lib/assets/images/house_b/1-5.jpg';
  import photo_5b from '$lib/assets/images/house_b/1-6.jpg';
  import photo_6b from '$lib/assets/images/house_b/1-7.jpg';
  import photo_7b from '$lib/assets/images/house_b/1-8.jpg';
  import photo_8b from '$lib/assets/images/house_b/1-10.jpg';
  import photo_9b from '$lib/assets/images/house_b/1-11.jpg';
  import photo_10b from '$lib/assets/images/house_b/1-12.jpg';
  import photo_11b from '$lib/assets/images/house_b/1-13.jpg';
  import photo_12b from '$lib/assets/images/house_b/1-14.jpg';
  import photo_13b from '$lib/assets/images/house_b/1-15.jpg';
  import photo_14b from '$lib/assets/images/house_b/1-16.jpg';
  import photo_15b from '$lib/assets/images/house_b/1.jpg';
  import instrukcja_a from '$lib/assets/instrukcja_a.pdf';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { browser } from '$app/environment';

  const bookingUrl = 'https://www.sunandsnow.pl/apartament-grzybowo-inteligentnerubinowedomy-988';
  const emblaOptions = { loop: true }
  // Separate carousel instance for houseA
  let emblaApiHouseA: any;

  function onInitHouseA(event: any) {
    emblaApiHouseA = event.detail;
  }

  function scrollPrevHouseA() {
    if (emblaApiHouseA) emblaApiHouseA.scrollPrev();
  }

  function scrollNextHouseA() {
    if (emblaApiHouseA) emblaApiHouseA.scrollNext();
  }

  // Separate carousel instance for houseB
  let emblaApiHouseB: any;

  function onInitHouseB(event: any) {
    emblaApiHouseB = event.detail;
  }

  function scrollPrevHouseB() {
    if (emblaApiHouseB) emblaApiHouseB.scrollPrev();
  }

  function scrollNextHouseB() {
    if (emblaApiHouseB) emblaApiHouseB.scrollNext();
  }
</script>

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
              {#if browser}
                <button class="embla__prev" on:click={scrollPrevHouseA} aria-label="Previous slide">
                    <img src={back} alt="Previous" />
                </button>
                <div class="embla" use:emblaCarouselSvelte={{ options: emblaOptions, plugins: [] }} on:emblaInit={onInitHouseA}>
                  <div class="embla__container">
                    <div class="embla__slide"><img src={photo_1a} alt="House Rubin" class="house-image" /></div>    
                    <div class="embla__slide"><img src={photo_2a} alt="House Rubin" class="house-image" /></div>    
                    <div class="embla__slide"><img src={photo_3a} alt="House Rubin" class="house-image" /></div>
                    <div class="embla__slide"><img src={photo_4a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_5a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_6a} alt="House Rubin" class="house-image" /></div>    
                    <div class="embla__slide"><img src={photo_7a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_8a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_9a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_10a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_11a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_12a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_13a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_14a} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_15a} alt="House Rubin" class="house-image" /></div>  
                  </div>
                </div>
                <button class="embla__next" on:click={scrollNextHouseA} aria-label="Next slide">
                    <img src={forward} alt="Next" />
                </button>
                <div class="house-content">
                    <div class="house-info">
                      <h3 class="house-name">Rubin<span>Duży</span></h3>
                      <div class="house-actions">
                        <a class="cta-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" on:click={() => window.gtag?.('event', 'book_click', { event_category: 'cta', event_label: 'house_large_booking' })}>Rezerwuj</a>
                        <a class="cta-link" href={instrukcja_a} download rel="noopener noreferrer">
                          Intstrukcja obsługi
                          <img src={download} alt="Instructions" class="cta-link-icon" />
                        </a>
                      </div>
                    </div>
                    <p>
                        4 gości / 1 sypialnia / 3 Łóżka / 1 Łazienka / Duży taras / Sauna
                    </p>
                </div>
            {/if}
            </div>
            
            <!-- House 2 -->
            <div class="house-card">
              {#if browser}
                <button class="embla__prev" on:click={scrollPrevHouseB} aria-label="Previous slide">
                    <img src={back} alt="Previous" />
                </button>
                <div class="embla" use:emblaCarouselSvelte={{ options: emblaOptions, plugins: [] }} on:emblaInit={onInitHouseB}>
                  <div class="embla__container">
                    <div class="embla__slide"><img src={photo_4b} alt="House Rubin" class="house-image" /></div>   
                    <div class="embla__slide"><img src={photo_3b} alt="House Rubin" class="house-image" /></div> 
                    <div class="embla__slide"><img src={photo_5b} alt="House Rubin" class="house-image" /></div>     
                    <div class="embla__slide"><img src={photo_6b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_7b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_8b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_9b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_10b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_11b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_12b} alt="House Rubin" class="house-image" /></div>  
                    <div class="embla__slide"><img src={photo_13b} alt="House Rubin" class="house-image" /></div> 
                    <div class="embla__slide"><img src={photo_14b} alt="House Rubin" class="house-image" /></div> 
                    <div class="embla__slide"><img src={photo_1b} alt="House Rubin" class="house-image" /></div>    
                    <div class="embla__slide"><img src={photo_2b} alt="House Rubin" class="house-image" /></div>    
                    <div class="embla__slide"><img src={photo_15b} alt="House Rubin" class="house-image" /></div>  
                  </div>
                </div>
                <button class="embla__next" on:click={scrollNextHouseB} aria-label="Next slide">
                    <img src={forward} alt="Next" />
                </button>
                <div class="house-content">
                    <div class="house-info">
                      <h3 class="house-name">Rubin<span>Mały</span></h3>
                      <div class="house-actions">
                        <a class="cta-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" on:click={() => window.gtag?.('event', 'book_click', { event_category: 'cta', event_label: 'house_large_booking' })}>Rezerwuj</a>
                        <a class="cta-link" href={instrukcja_a} download rel="noopener noreferrer">
                          Intstrukcja obsługi
                          <img src={download} alt="Instructions" class="cta-link-icon" />
                        </a>
                      </div>
                    </div>
                    <p>
                        4 gości / 1 sypialnia / 3 Łóżka / 1 Łazienka / Duży taras / Sauna
                    </p>
                </div>
            {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .houses {
    padding: 6rem 0;
    background: rgba(236, 229, 221, 0.50);
  
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
        position: relative;

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
          gap: 3rem;
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
            align-items: baseline;
            span {
                font-style: italic;
                text-transform: lowercase;
                letter-spacing: 0px;
                padding-left: 0.5rem;
            }
            .house-actions {
              display: flex;
              gap: 1rem;
              flex-direction: column;
              align-items: center;
              .cta-link {
                text-decoration: none;
                color: #C5A562;
                display: flex;
                gap: 4px;
                font-weight: 600;
                font-size: 14px;
              }
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
  @media (max-width: 768px) {
    .houses-grid {
      grid-template-columns: 1fr;
    }
  }
</style>