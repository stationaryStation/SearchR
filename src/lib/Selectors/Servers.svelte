<script lang="ts">
    import { revolt } from "../Client/revolt";
    import { selectedServer } from "./store";
    const Servers = Array.from(revolt.servers.values());
</script>

<form>
    <label for="serverlist">Select a server:</label>
    <select name="serverlist" bind:value={$selectedServer}>
        {#each Servers as server}
            <option value={server}>{server.name}</option>
        {/each}    
    </select>
</form>