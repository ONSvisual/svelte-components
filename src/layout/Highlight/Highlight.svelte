<script>
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * (Optional) Sets the unique ID of the section
   * @type {string}
   */
  export let id = null;
  /**
   * Sets the width of the section
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "medium";
  /**
   * Sets the minimum height of the section
   * @type {"auto"|"tall"|"full"}
   */
  export let height = "tall";
  /**
   * Sets a predefined theme
   * @type {"light"|"dark"|"lightblue"}
   */
  export let theme = "lightblue";
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
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  allowClientOverrides="{allowClientOverrides}"
  width="{width}"
  background="{background}"
  marginTop="{marginTop}"
  marginBottom="{marginBottom}"
  height="{height}"
>
  <section
    class="ons-hero__details ons-feature__filler ons-u-fs-l ons-font-weight__normal"
    id="{id}"
  >
    <slot />
  </section>
</Container>

<style>
  :global(.ons-feature__filler > p + p) {
    margin-top: 30px;
  }
</style>
