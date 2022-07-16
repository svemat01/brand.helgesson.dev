<h1><span class="brand">brand</span>.helgesson.dev</h1>
<h2>Helgesson branding</h2>

<style lang="scss">
    h1 {
        font-size: 5rem;
        font-weight: 400;

        @media (max-width: $breakpoint-lg) {
            font-size: 4rem;
        }

        @media (max-width: $breakpoint-md) {
            font-size: 3rem;
        }

        @media (max-width: $breakpoint-sm) {
            font-size: 2.5rem;
        }
    }

    h2 {
        font-size: 2.8rem;
        font-weight: 400;

        opacity: 0.65;

        @media (max-width: $breakpoint-md) {
            font-size: 2rem;
        }
    }
    .brand {
        color: $brand-color;
    }
</style>
