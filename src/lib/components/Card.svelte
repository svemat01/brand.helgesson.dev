<script lang="ts">
    import cssVars from 'svelte-css-vars';

    export let style = '';

    export let column = true;
    export let gap = '0';
    export let width = '100%';
    export let maxWidth = width;

    $: styleVariables = {
        column: column ? 'column' : 'row',
        gap,
        width,
        maxWidth,
    };
</script>

<div use:cssVars="{styleVariables}" class="container" {style}>
    <slot />
</div>

<style lang="scss">
    .container {
        padding: 1.2rem;

        width: var(--width);
        max-width: var(--maxWidth);

        display: flex;
        flex-direction: var(--column);
        gap: var(--gap);

        border-radius: 0.8rem;

        background-color: $dark-light-color;

        filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.25));
    }
</style>
