<script>
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * (Optional) Sets the unique ID of the section
   * @type {string}
   */
  export let id = null;
  /**
   * Sets the width of the section
   * @type {"narrow"|"medium"|"wide"|"full"}
   */
  export let width = "medium";
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
   * Optional margin above section
   * @type {boolean}
   */
  export let marginTop = false;
  /**
   * Optional margin below section
   * @type {boolean}
   */
  export let marginBottom = true;
  /**
   * Sets the width of the section
   * @type {"narrow"|"medium"|"wide"|"full"}
   */
  export let colwidth = "medium"; // narrow | medium | wide | full
  /**
   * (Optional) caption below the grid
   * @type {string}
   */
  export let caption = "";
  /**
   * Set the minimum height of a grid row (can be a number in pixels, or a valid CSS height, like "100vh")
   * @type {number|string}
   */
  export let height = 200; // pixel height or "full" for 100vh
  /**
   * Set the grid gap, in pixels
   * @type {number}
   */
  export let gap = 12;

  let gridClass = !colwidth || colwidth === "full" ? "" : `grid-${colwidth}`;
  let rowHeight = height === "full" ? "100vh" : !Number.isNaN(height) ? height + "px" : height;
  let gridGap = !Number.isNaN(gap) ? gap + "px" : gap;
</script>

<figure id="{id}" aria-label="{caption}">
  <Container
    theme="{theme}"
    themeOverrides="{themeOverrides}"
    width="{width}"
    height="{['tall', 'full'].includes(height) ? height : 'auto'}"
    marginTop="{marginTop}"
    marginBottom="{!caption ? marginBottom : false}"
  >
    <div class="grid {gridClass}" style:grid-gap="{gridGap}" style:min-height="{rowHeight}">
      <slot />
    </div>
  </Container>
  {#if caption}
    <figcaption>
      <Container
        theme="{theme}"
        themeOverrides="{themeOverrides}"
        width="narrow"
        marginBottom="{marginBottom}"
      >
        <span class="ons-figure__caption">{@html caption}</span>
      </Container>
    </figcaption>
  {/if}
</figure>

<style>
  figure,
  figcaption {
    display: block;
    margin: 0;
    padding: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 100%);
    width: 100%;
    margin: 0;
  }
  .grid-narrow {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  }
  .grid-medium {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  }
  .grid-wide {
    grid-template-columns: repeat(auto-fit, minmax(460px, 1fr)) !important;
  }
  :global(.grid > div) {
    min-height: inherit;
  }
</style>