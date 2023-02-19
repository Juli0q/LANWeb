<script>
    import Event from "./modules/EventButton.svelte"
</script>

<h1>CHOOSE EVENT</h1>
<Event EventName="My default Event"/>

<style>
    h1 {
        @apply text-4xl text-center pb-5 text-white;
        font-family: firaSans;
    }
    @font-face{
        font-family: 'firaSans';
        src: url('/font/FiraSans-Medium.ttf') format('woff');
    }
</style>