<script>
  import { validDate, formatDate } from "../../js/utils.js";
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * (Optional) Sets the unique ID of the section
   * @type {string}
   */
  export let id = null;
  /**
   * (Optional) Sets a css class for the section
   * @type {string}
   */
  export let cls = null;
  /**
   * Sets the width of the section
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "wide";
  /**
   * Sets the minimum height of the section
   * @type {"auto"|"tall"|"full"}
   */
  export let height = "tall";
  /**
   * Sets the title/headline
   * @type {string}
   */
  export let title = "Page headline";
  /**
   * Sets the lede (short intro text)
   * @type {string}
   */
  export let lede = "";
  /**
   * (Optional) Sets the date, using the format "yyyy-mm-dd"
   * @type {string}
   */
  export let date = null;
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = "dark";
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
   * Overrides the background CSS for the section
   * @type {string}
   */
  export let background = "rgb(32, 96, 149)";
</script>

<Container
  id="{id}"
  cls="{cls}"
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  allowClientOverrides="{allowClientOverrides}"
  width="{width}"
  background="{background}"
  height="{height}"
>
  <div class="ons-hero__details ons-grid__col ons-col-8@m ons-col-10@s@m">
    {#if title}
      <header>
        <h1 class="ons-hero__title ons-u-fs-xxxl">{title}</h1>
      </header>
    {/if}
    {#if lede}<p class="ons-hero__text ons-u-fs-l ons-font-weight__normal">{lede}</p>{/if}
    {#if validDate(date)}<p class="ons-hero__text">{formatDate(date)}</p>{/if}
    <slot />
  </div>
</Container>

<style>
  .ons-hero__details {
    padding-left: 0;
  }
</style>
