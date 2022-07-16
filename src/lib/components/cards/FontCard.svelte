<script lang="ts">
    import Card from '$lib/components/Card.svelte';

    export let name: string;
    export let image: string;
</script>

<Card column={false} gap="1rem">
    <!-- eslint-disable-next-line prettier/prettier -->
    <img src={image} alt={image} class="logoBox" />
    <p class="name">{name}</p>
</Card>

<style lang="scss">
    .logoBox {
        width: 6rem;
        height: 6rem;

        border-radius: 0.8rem;

        @media (max-width: $breakpoint-md) {
            width: 4.5rem;
            height: 4.5rem;
        }
    }

    p {
        margin-top: 0.2rem;

        line-height: 100%;

        font-size: 2.4rem;
        font-weight: 400;

        white-space: pre-line;

        @media (max-width: $breakpoint-md) {
            font-size: 2rem;
        }
    }
</style>
