<script>
    import Icon from '@iconify/svelte';
    import baselineDiscord from '@iconify/icons-ic/baseline-discord';
    import githubIcon from '@iconify/icons-mdi/github';

</script>

<div class="h-fit w-fit p-4 rounded-md background backdrop-blur-sm drop-shadow-2xl">
    <h1>LAN EVENT</h1>
    <a href="/choose">
        <div class="flex justify-between discord-login-button items-center space-x-3 opacity drop-shadow-2xl">
            <Icon icon={baselineDiscord} class="text-3xl text-white"/>
            <p class="text-white" >Login with Discord</p>
        </div>
    </a>
</div>



<style>
    .discord-login-button {
        @apply bg-[#5865F2] rounded-md p-3;
    }
</style>