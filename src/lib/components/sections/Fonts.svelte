<script lang="ts">
    import jbLogo from '$lib/assets/jb_square.svg';
    import FontCard from '../cards/FontCard.svelte';

    const fonts = [
        {
            name: 'Jetbrains\nMono',
            image: jbLogo,
        },
    ];
</script>

<div class="wrapper">
    <h3>Fonts:</h3>
    <div class="row">
        {#each fonts as font}
            <FontCard image={font.image} name={font.name} />
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
