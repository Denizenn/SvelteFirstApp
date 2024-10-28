<script lang="ts">
    import { Command as CommandPrimitive } from "cmdk-sv";
    import Search from "lucide-svelte/icons/search";
    import { cn } from "$lib/utils.js";
    

    type $$Props = CommandPrimitive.InputProps & {
        handleKeydownAction: (e: KeyboardEvent) => void;
    };

    let className: string | undefined | null = undefined;
    export { className as class };
    export let value: string = "";
    export let handleKeydownAction: (e: KeyboardEvent) => void;

</script>

<div class="flex items-center w-full bg-gray-600">
    <div class="flex items-center w-full bg-white rounded-lg m-4 ">
        <Search class="ml-4 mr-2 w-8 h-8" />
        <CommandPrimitive.Input
            class={cn(
                "placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50 custom-input-style",
                className
            )}
            {...$$restProps}
            bind:value
            on:keydown={handleKeydownAction}
        />
        
        <slot>  </slot>
    </div>
</div>

