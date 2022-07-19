<script lang="ts">
    import cssVars from 'svelte-css-vars';
    import { clickToCopy } from '$lib/utils/clickToCopy';

    import Card from '$lib/components/Card.svelte';

    export let color: string;
    export let name: string;
    export let showColor = color;
    export let cardStyle = '';
    export let outline = false;

    const oldText = String(color);

    function copySuccess(event: CustomEvent) {
        if (event.detail !== color) return;
        color = 'Copied!';
        setTimeout(() => {
            color = oldText;
        }, 1000);
    };

    const copyError = (event: CustomEvent) => {
        if (event.detail !== color) return;
        color = 'Error!';
        setTimeout(() => {
            color = oldText;
        }, 1000);
    };

    $: styleVariables = {
        color,
        showColor,
    };
</script>

<svelte:window on:copysuccess={copySuccess} on:copyerror={copyError} />

<Card column={false} gap="1rem" style={cardStyle}>
    <!-- eslint-disable-next-line prettier/prettier -->
    <div use:cssVars={styleVariables} class={outline ? 'colorBox outline' : 'colorBox'} />
    <div use:cssVars={styleVariables} class="column">
        <p class="name">{name}</p>
        <p use:clickToCopy class="color">{color}</p>
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

        &.outline {
            border: 2px solid var(--showColor);
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

            &:hover {
                cursor: pointer;
                opacity: 0.8;
            }
        }
    }
</style>
