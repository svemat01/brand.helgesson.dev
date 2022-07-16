<script lang="ts">
    import cssVars from 'svelte-css-vars';

    import Card from '$lib/components/Card.svelte';

    export let color: string;
    export let name: string;
    export let showColor = color;
    export let cardStyle = '';

    $: styleVariables = {
        color,
        showColor,
    };
</script>

<Card column={false} gap="1rem" style={cardStyle}>
    <!-- eslint-disable-next-line prettier/prettier -->
    <div use:cssVars={styleVariables} class="colorBox" />
    <div use:cssVars={styleVariables} class="column">
        <p class="name">{name}</p>
        <p class="color">{color}</p>
    </div>
</Card>

<style lang="scss">
    .colorBox {
        width: 6rem;
        height: 6rem;

        border-radius: 0.8rem;

        background-color: var(--color);

        @media (max-width: $breakpoint-md) {
            width: 4.5rem;
            height: 4.5rem;
        }
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;

        margin-top: 0.2rem;
    }

    p {
        line-height: 100%;

        &.name {
            font-size: 2.6rem;
            font-weight: 400;

            @media (max-width: $breakpoint-md) {
                font-size: 2.1rem;
            }
        }

        &.color {
            font-size: 1.9rem;
            font-weight: 400;

            color: var(--showColor);

            @media (max-width: $breakpoint-md) {
                font-size: 1.6rem;
            }
        }
    }
</style>
