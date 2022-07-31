<script lang="ts">
    import ImageCard from '../cards/ImageCard.svelte';

    import logoDark from '$lib/assets/logoDark.svg';
    import logoLight from '$lib/assets/logoLight.svg';
    import logoTransparent from '$lib/assets/logoTransparent.svg';
    import pixelLogo from '$lib/assets/pixelLogo.webp';
    import portrait from '$lib/assets/jakobhelgesson.webp'
    import portraitTransparent from '$lib/assets/jakobhelgesson-transparent.webp'

    const images: {
        name: string;
        image: string;
        outline?: boolean;
        formats: {
            name: string;
            url: string;
        }[];
    }[] = [
        {
            name: 'Logo Dark',
            image: logoDark,
            formats: [
                {
                    name: 'PNG',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoDark.png',
                },
                {
                    name: 'SVG',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoDark.svg',
                },
                {
                    name: 'WEBP',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoDark.webp',
                },
            ],
        },
        {
            name: 'Logo Light',
            image: logoLight,
            formats: [
                {
                    name: 'PNG',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoLight.png',
                },
                {
                    name: 'SVG',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoLight.svg',
                },
                {
                    name: 'WEBP',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoLight.webp',
                },
            ],
        },
        {
            name: 'Logo Transparent',
            image: logoTransparent,
            formats: [
                {
                    name: 'PNG',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoTransparent.png',
                },
                {
                    name: 'SVG',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoTransparent.svg',
                },
                {
                    name: 'WEBP',
                    url: 'https://cdn.helgesson.dev/assets/branding/logoTransparent.webp',
                },
            ],
            outline: true,
        },
        {
            name: 'Pixel Logo',
            image: pixelLogo,
            formats: [
                {
                    name: 'PNG',
                    url: 'https://cdn.helgesson.dev/assets/branding/pixelLogo.png',
                },
                {
                    name: 'WEBP',
                    url: 'https://cdn.helgesson.dev/assets/branding/pixelLogo.webp',
                },
            ],
        },
        {
            name: 'Portrait',
            image: portrait,
            formats: [
                {
                    name: 'PNG',
                    url: 'https://cdn.helgesson.dev/assets/branding/jakobhelgesson.png',
                },
                {
                    name: 'WEBP',
                    url: 'https://cdn.helgesson.dev/assets/branding/jakobhelgesson.webp',
                },
            ],
        },
        {
            name: 'Portrait Transparent',
            image: portraitTransparent,
            formats: [
                {
                    name: 'PNG',
                    url: 'https://cdn.helgesson.dev/assets/branding/jakobhelgesson-transparent.png',
                },
                {
                    name: 'WEBP',
                    url: 'https://cdn.helgesson.dev/assets/branding/jakobhelgesson-transparent.webp',
                }
            ],
            outline: true,
        }
    ];
</script>

<div class="wrapper">
    <h3>Images:</h3>
    <div class="row">
        {#each images as image}
            <ImageCard {...image}/>
        {/each}
    </div>
</div>

<style lang="scss">
    .wrapper {
        margin-inline: 2rem;

        margin-top: 3rem;

        width: calc(100% - 5rem);
        max-width: 70rem;

        @media (max-width: $breakpoint-md) {
            max-width: 25rem;
        }
    }

    h3 {
        font-size: 2.5rem;
        font-weight: 400;

        @media (max-width: $breakpoint-md) {
            font-size: 2rem;
        }
    }

    .row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 2rem 3rem;

        margin-top: 0.5rem;

        @media (max-width: $breakpoint-md) {
            display: flex;
            flex-direction: column;
        }
    }
</style>
