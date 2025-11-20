<script lang="ts">
  import photo_1 from '$lib/assets/images/backyard/1-5.jpg';
  import photo_2 from '$lib/assets/images/backyard/1-3.jpg';
  import sauna from '$lib/assets/images/sauna.jpg';
  import saunaIcon from '$lib/assets/icons/sauna.svg';
  import petsIcon from '$lib/assets/icons/pets.svg';
  import bbqIcon from '$lib/assets/icons/bbq.svg';
  import playgroundIcon from '$lib/assets/icons/playground.svg';
  import seaIcon from '$lib/assets/icons/sea.svg';
  import bikeIcon from '$lib/assets/icons/bike.svg';
  import deckIcon from '$lib/assets/icons/deck.svg';
  import wifiIcon from '$lib/assets/icons/wifi.svg';
</script>
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
            <img src={photo_1} alt="Vacation rental amenities" class="feature-main-image" />
            <div class="feature-detail-images">
                <img src={photo_2} alt="Feature detail" class="feature-detail-image" />
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

<style>
    .features {
    padding: 6rem 0;

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
</style>