<script lang="ts">
    import { mention } from "./store";
    import { selectedChannel } from "../Selectors/store";

    async function searchMessage() {
        const messageList = await $selectedChannel.search({query: $mention, sort: "Relevance", limit: 50});

        if (messageList) {
            return messageList;
        }
    }

    let found;

    mention.subscribe( _ => {
        found = searchMessage();
    })

</script>

{#if $mention}
    {#await found then messageArray}
        {#each messageArray as message, i}
            <p>{i} | {message.username}: {message.content}</p>
        {/each}
    {/await}
{:else}
    <p>Select a user</p>
{/if}