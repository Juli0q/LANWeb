<script>
    import Icon from '@iconify/svelte';
    import houseIcon from '@iconify/icons-pepicons-print/house';
    import controllerIcon from '@iconify/icons-pepicons-print/controller';
    import monitor2Icon from '@iconify/icons-pepicons-print/monitor2';
</script>

<div class="bg-box background">
    <div class="flex flex-row ">
        <div class="flex flex-col p-5 space-y-3 items-center">
            <Icon icon={houseIcon} class="text-white text-7xl hover:text-gray-400"/>
            <Icon icon={controllerIcon} class="text-white text-7xl hover:text-gray-400"/>
            <Icon icon={monitor2Icon} class="text-white text-7xl hover:text-gray-400"/>
        </div>
        <div class="grow m-5 w-1 backdrop-blur-lg drop-shadow-2xl"></div>
        <div class="text-white">
            <slot/>
        </div>
    </div>
</div>




    
