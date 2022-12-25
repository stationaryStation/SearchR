<script lang="ts">
  import { revolt } from "../Client/revolt";
  import { email, password, isLogged } from "./store";
  
  async function login(e) {
    try {
      console.log($email, $password);
      revolt.login({email: $email, password: $password, friendly_name: "SearchR"}).catch((e) => {
        throw e;
      }).then(() => {
        isLogged.set(true);
      });
    } catch (err) {
      console.error("Error while logging in:", err);
    }
  }
</script>

<form on:submit|preventDefault={(e) => login(e)}>
  <h2>Email</h2>
  <input bind:value={$email}/>
  <h2>Password</h2>
  <input bind:value={$password}/>
  <button type="submit">Login</button>
</form>


