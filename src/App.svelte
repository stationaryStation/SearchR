<script lang="ts">
  import Login from "./lib/Login/Login.svelte";
  import { isLogged } from "./lib/Login/store";
  import { revolt } from "./lib/Client/revolt";
    import Servers from "./lib/Selectors/Servers.svelte";
    import { selectedChannel, selectedServer } from "./lib/Selectors/store";
    import Channels from "./lib/Selectors/Channels.svelte";
    import SearchForm from "./lib/Search/SearchForm.svelte";
    import MessageList from "./lib/Search/MessageList.svelte";
  
  let logged_in: boolean;

  isLogged.subscribe(value => {
    logged_in = value;
  });

  selectedServer.subscribe(value => {
    console.log(value);
  });

  function logout() {
    if (logged_in) {
      revolt.logout().then(() => {
        isLogged.set(false);
      })
    }
  }
</script>

<h1>SearchR</h1>
<p>Search Revolt Mentions with ease</p>

{#if !logged_in}
  <Login />
{:else if logged_in}
  <p>Hello, {revolt.user?.username}!</p>
  <Servers />
  {#if $selectedServer} 
    <Channels />
  {/if}
  {#if $selectedChannel}
    <SearchForm />
    <MessageList />
  {/if}
  <button on:click={logout}>Logout</button>
{/if}