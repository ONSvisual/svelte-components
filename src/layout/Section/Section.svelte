<script>
  import { slugify } from "../../js/utils.js";
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * Sets the unique ID of the section
   * @type {string}
   */
  export let id = null;
  /**
   * (Optional) Sets a css class for the section
   * @type {string}
   */
  export let cls = null;
  /**
   * Sets the width of the container
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "narrow";
  /**
   * Sets the title of the section
   * @type {string}
   */
  export let title = "";
  /**
   * Allows the h2 title tag for the section to be visually hidden
   * @type {boolean}
   */
  export let hideTitle = false;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = null;
  /**
   * Define additional props to override the base theme
   * @type {object}
   */
  export let themeOverrides = null;
  /**
   * Overrides the background CSS for the section
   * @type {string}
   */
  export let background = null;
  /**
   * Allows client imported CSS for embeddable content
   * @type {boolean}
   */
  export let allowClientOverrides = false;
  /**
   * Optional margin above section
   * @type {boolean}
   */
  export let marginTop = false;
  /**
   * Optional margin below section
   * @type {boolean}
   */
  export let marginBottom = true;
</script>

<Container
  id="{id ? id : slugify(title)}"
  cls="{cls}"
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  allowClientOverrides="{allowClientOverrides}"
  width="{width}"
  marginTop="{marginTop}"
  marginBottom="{marginBottom}"
  background="{background}"
>
  <section aria-label="{title}" class="ons-feature__section">
    {#if title}
      <h2 class="section-title" class:ons-u-vh="{hideTitle}">{title}</h2>
    {/if}
    <slot />
  </section>
</Container>

<style>
  :global(.ons-feature__section > p:last-child) {
    margin-bottom: 0;
  }
</style>
