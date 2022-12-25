<script lang="ts">
    import { mention } from "./store";
    import { selectedServer as CurrentServer } from "../Selectors/store";

    async function getMembers() {
        const members = await $CurrentServer.fetchMembers();
        
        if (members) {
            return members;
        }
    }


    let MemberList = getMembers();

</script>

<form>
    <label for="search">User to search</label>
    <select name="search" on:select={() => console.log($mention)} bind:value={$mention}>
        <option value="...">...</option>
        {#await MemberList}
            <option>Loading...</option>
        {:then members}
            {#each members.users as member}
                <option value={`<@${member._id}>`}>{member.username}</option>
            {/each}
        {/await}
    </select>
</form>
