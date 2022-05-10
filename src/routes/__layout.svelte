<script lang="ts">
  import "uno.css"; /* @vite-ignore */
  import "../app.css";
</script>

<svelte:head>
  <title>My Website</title>

  <!-- ? Open Graph Protocol -->
  <!-- ? https://ogp.me/ -->
  <meta property="og:title" content="My Website" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="" />
  <meta property="og:url" content="http://example.com" />
</svelte:head>

<slot />
