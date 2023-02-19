<script>
    import "../app.css";
    

    let bgImageCollection = ["bg-overprime", "bg-apex", "bg-dbd", "bg-wwz", "bg-titanfall"]
    let bgImage = pickRandomWallpaper();

    function pickRandomWallpaper() {
        return bgImageCollection[Math.floor(Math.random() * bgImageCollection.length)]
    }

    import baselineDiscord from '@iconify/icons-ic/baseline-discord';
    import githubIcon from '@iconify/icons-mdi/github';
    import Icon from '@iconify/svelte';
</script>


<div class="{bgImage} h-screen w-screen transition ease-in-out flex justify-center content-center items-center bg-cover">
    <slot />
</div>

<div class="absolute bottom-0 flex justify-between w-full p-5">
    <p class="text-white">Privacy</p>
    <div class="flex space-x-3">
        <a href="https://discord.gg/BNpBnrerCs" target="_blank" rel="noopener noreferrer">
            <Icon icon={baselineDiscord} class="text-3xl text-white"/>
        </a>
        
        <a href="https://github.com/Juli0q/LANWeb" target="_blank" rel="noopener noreferrer">
            <Icon icon={githubIcon} class="text-3xl text-white"/>
        </a>
    </div>
</div>