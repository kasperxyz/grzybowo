<script lang="ts">
  import back from '$lib/assets/icons/chevron_backward.svg';
  import forward from '$lib/assets/icons/chevron_forward.svg';
    import beach from '$lib/assets/images/beach.jpg';
  import cycling from '$lib/assets/images/cycling.jpg';
  import hossoland from '$lib/assets/images/hossoland.jpg';
  import kolobrzeg from '$lib/assets/images/kolobrzeg.jpg';
  import wydmy from '$lib/assets/images/wydmy.jpg';
  import gdansk from '$lib/assets/images/gdansk.jpg';
  import szczecin from '$lib/assets/images/szczecin.jpg';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { browser } from '$app/environment';

    const emblaOptions = {      
    slidesToScroll: 1,
    containScroll: 'trimSnaps' as const,
    breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 3 }
}
  };

  // Carousel navigation (map carousel)
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
</script>

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
                                        <p class="map-card-title">Ścieżka rowerowa R-10</p>
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
                                <img src={wydmy} alt="Map" class="map-image" />
                                <div class="map-card-content">
                                    <div class="map-card-text">
                                        <p class="map-card-title">Rezerwat przyrody</p>
                                        <p class="map-card-distance">2.1 km</p>
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
        </div>
    </div>
</section>

<style>
    .map-section {
    padding: 6rem 0;
    background: rgba(236, 229, 221, 0.50);

    .map-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      .carousel-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 100%;
      }

        .embla__prev,
      .embla__next {
        top: inherit;
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
          display: block;
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
    }
  }
</style>