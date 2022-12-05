<script>
	  import ActionButton from "$lib/components/ActionButton.svelte";
import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
  </script>
  <div class="">
  <Navbar/>
  <slot />
  <ActionButton/>
  </div>
