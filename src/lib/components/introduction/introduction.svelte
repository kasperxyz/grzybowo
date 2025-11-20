<script lang="ts">
  import hero from '$lib/assets/images/hero.jpg';
  import { _ } from 'svelte-i18n';
  import photo_1 from '$lib/assets/images/backyard/1-7.jpg';
  import photo_2 from '$lib/assets/images/backyard/1-6.jpg';
</script>
<section class="introduction">
    <div class="container">
        <div class="introduction-body">
            <!-- Image -->
            <div class="introduction-col-1">
                <img src={photo_2} alt="Interior view" class="intro-image" />
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
                <img src={photo_1} alt="Detail view" class="introduction-image" />
            </div>
        </div>
    </div>
</section>

<style >
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
</style>