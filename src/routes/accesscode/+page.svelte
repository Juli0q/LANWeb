<script>
    import { goto } from '$app/navigation';

    let code = "";
    function getStarted() {
        if (code == "ABCD") {
            goto("/dashboard")
        } else {

        }
    }
</script>

<h1>Enter Access Code</h1>
<div class="flex flex-col justify-center space-y-5 items-center content-center">
    <input class="rounded-lg h-16 text-7xl w-80 text-center" maxlength="6" bind:value={code}>
    <button on:click={getStarted} class="h-fit p-4 rounded-md background backdrop-blur-lg drop-shadow-2xl w-80 hover:backdrop-blur-0">
        <p class="text-white text-center">
            Get started
        </p>
    </button>

</div>
