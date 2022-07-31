<script lang="ts">
    import Card from '$lib/components/Card.svelte';

    export let name: string;
    export let image: string;
    export let formats: {
        name: string;
        url: string;
    }[];
    export let outline = false;
</script>

<Card column={true} gap="1rem">
    <img src={image} alt={image} class="imageBox" class:outline />
    <p class="name">{name}</p>
    <div class="hr" />
    <div class="flex">
        {#each formats as format}
            <a href={format.url} target="_blank" rel="noopener noreferrer">
                {format.name}
            </a>
        {/each}
    </div>
</Card>

<style lang="scss">
    .imageBox {
        width: 100%;

        border-radius: 0.8rem;

        &.outline {
            border: 2px solid $light-color;
        }
    }

    p.name {
        line-height: 100%;

        font-size: 2.4rem;
        font-weight: 400;

        white-space: pre-line;
    }

    .hr {
        border-top: 2px solid $light-color;
    }

    a {
        line-height: 100%;
        font-size: 2.4rem;
        font-weight: 400;
        opacity: 0.8;

        &:hover {
            cursor: pointer;
            opacity: 0.6;
        }
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
</style>
