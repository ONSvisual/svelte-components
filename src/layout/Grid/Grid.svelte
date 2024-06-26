<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * (Optional) Sets the unique ID of the section
   * @type {string}
   */
  export let id = null;
  /**
   * (Optional) Sets a css class for the component
   * @type {string}
   */
  export let cls = null;
  /**
   * Sets the width of the section
   * @type {"narrow"|"medium"|"wide"|"full"}
   */
  export let width = "medium";
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
  let rowHeight = height === "full" ? "100vh" : typeof height === "number" ? height + "px" : height;
  let gridGap = typeof gap === "number" ? gap + "px" : gap;

  const defs = {
    narrow: { w: 180, c: 4 },
    medium: { w: 280, c: 3 },
    wide: { w: 400, c: 2 },
    full: { w: "100%", c: 1 },
  };

  let w;

  const cols = writable(defs[colwidth].c);

  $: columns =
    colwidth == "full"
      ? 1
      : w
      ? Math.floor((w + gap) / (defs[colwidth].w + gap))
      : defs[colwidth].c;
  $: cols.set(columns);

  setContext("cols", cols);
</script>

<figure aria-label="{caption}">
  <Container
    id="{id}"
    cls="{cls}"
    theme="{theme}"
    themeOverrides="{themeOverrides}"
    allowClientOverrides="{allowClientOverrides}"
    width="{width}"
    height="{['tall', 'full'].includes(height) ? height : 'auto'}"
    marginTop="{marginTop}"
    marginBottom="{!caption ? marginBottom : false}"
  >
    {#if title}
      <h2 class="section-title" class:ons-u-vh="{hideTitle}">{title}</h2>
    {/if}
    <div
      class="grid {gridClass}"
      style:grid-gap="{gridGap}"
      style:min-height="{rowHeight}"
      bind:clientWidth="{w}"
    >
      <slot />
    </div>
  </Container>
  {#if caption}
    <figcaption>
      <Container
        cls="{cls}"
        theme="{theme}"
        themeOverrides="{themeOverrides}"
        allowClientOverrides="{allowClientOverrides}"
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
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  }
  .grid-medium {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
  }
  .grid-wide {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) !important;
  }
  :global(.grid > div) {
    min-height: inherit;
  }
</style>
