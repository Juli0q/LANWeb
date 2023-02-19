<script lang="ts">
    export let EventName = "";
</script>

<div class="h-fit p-4 rounded-md background backdrop-blur-lg drop-shadow-2xl w-full hover:backdrop-blur-0">
    <p class="text-white text-center">
        {EventName}
    </p>
</div>

<style>
    .background {
        background: rgba(0, 0, 0, 0.4)
    }
</style>