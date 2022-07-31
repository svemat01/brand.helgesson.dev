<script>
    import Colors from '$lib/components/sections/Colors.svelte';
    import Fonts from '$lib/components/sections/Fonts.svelte';
    import Header from '$lib/components/sections/Header.svelte';
    import Images from '$lib/components/sections/Images.svelte';
</script>

<div class="wrapper">
    <Header />
    <Colors />
    <Fonts />
    <Images />
</div>

<style lang="scss">
    .wrapper {
        width: 100%;
        max-width: 1000px;

        margin-top: 7.5rem;
        margin-inline: auto;

        display: flex;
        flex-direction: column;

        align-items: center;
    }
</style>
