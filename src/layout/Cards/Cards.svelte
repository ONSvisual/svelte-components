<script>
  import { setContext } from "svelte";
  import Grid from "../Grid/Grid.svelte";

  /**
   * (Optional) Sets the unique ID of the section
   * @type {string}
   */
  export let id = null;
  /**
   * (Optional) Sets a css class for the component
   * @type {string}
   */
  export let cls = "ons-cards";
  /**
   * Sets the width of the section
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "wide";
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
   * Set the minimum height of a grid row (can be a number in pixels, or a valid CSS height, like "100vh")
   * @type {number|string}
   */
  export let height = 200; // pixel height or "full" for 100vh
  /**
   * Removes the backgroup on the cards
   * @type {boolean}
   */
  export let noBackground = false;
  /**
   * Set the gap between cards, in pixels
   * @type {number}
   */
  export let gap = noBackground ? 36 : 16;

  setContext("noBackground", noBackground);
</script>

<Grid
  id="{id}"
  cls="{cls}"
  width="{width}"
  height="{height}"
  title="{title}"
  hideTitle="{hideTitle}"
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  marginTop="{marginTop}"
  marginBottom="{marginBottom}"
  colwidth="{colwidth}"
  gap="{gap}"
>
  <slot />
</Grid>

<style>
  :global(.ons-cards h2.section-title) {
    font-weight: normal;
    margin-bottom: 12px;
  }
</style>
