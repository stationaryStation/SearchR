<script lang="ts">
    import type { Channel } from "revolt.js";
    import { selectedChannel, selectedServer } from "./store";

    let current: Channel[];

    selectedServer.subscribe((value) => {
        if (value) {
            current = Array.from(value.channels);
            console.log(value);
        }
    });
</script>

<form>
    <label for="serverlist">Select a server:</label>
    <select name="serverlist" bind:value={$selectedChannel}>
        <option>...</option>
        {#each current as channel}
            {#if channel.channel_type === "TextChannel"}
                <option value={channel}>{channel.name}</option>
            {/if}
        {/each}
    </select>
</form>
