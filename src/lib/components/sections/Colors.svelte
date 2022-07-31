<script lang="ts">
    import ColorCard from '$lib/components/cards/ColorCard.svelte';

    // $light-color: #fffdfa;
    // $dark-color: #191919;
    // $dark-light-color: #262626;

    // $brand-color: #37ff8b;
    // $blue-color: #3772ff;
    // $orange-color: #fa9f42;
    // $pink-color: #ff1654;

    const mainColors: { name: string; color: string; showColor?: string; outline?: boolean }[] = [
        {
            name: 'Brand',
            color: '#37FF8B',
        },
        {
            name: 'Light',
            color: '#FFFDFA',
        },
        {
            name: 'Dark',
            color: '#191919',
            showColor: '#FFFDFA',
            outline: true,
        },
    ];

    const accentColors: { name: string; color: string; showColor?: string; outline?: boolean }[] =
        [
            {
                name: 'Blue',
                color: '#3772FF',
            },
            {
                name: 'Orange',
                color: '#FA9F42',
            },
            {
                name: 'Pink',
                color: '#FF1654',
            },
        ];
</script>


<div class="wrapper">
    <h3>Colors:</h3>
    <div class="row">
        {#each mainColors as color}
            <ColorCard
                name={color.name}
                color={color.color}
                showColor={color.showColor || color.color}
                cardStyle="grid-column: 1"
                outline={color.outline ?? false}
            />
        {/each}
        {#each accentColors as color}
            <ColorCard
                name={color.name}
                color={color.color}
                showColor={color.showColor || color.color}
                cardStyle="grid-column: 2"
                outline={color.outline ?? false}
            />
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
        grid-auto-flow: column;
        gap: 2rem 3rem;

        margin-top: 0.5rem;

        width: 100%;

        @media (max-width: $breakpoint-md) {
            display: flex;
            flex-direction: column;
        }
    }
</style>
