<script>
  import Theme from "../Theme/Theme.svelte";

  /**
   * (Optional) Sets the unique ID of the container
   * @type {string}
   */
  export let id = null;
  /**
   * (Optional) Sets a css class for the container
   * @type {string}
   */
  export let cls = null;
  /**
   * Sets the width of the container
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "wide";
  /**
   * Sets the minimum height of the container relative to the height of the viewport
   * @type {"auto"|"tall"|"full"}
   */
  export let height = "auto";
  /**
   * Optional margin above container
   * @type {boolean}
   */
  export let marginTop = false;
  /**
   * Optional margin below container
   * @type {boolean}
   */
  export let marginBottom = false;
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
   * Overrides the base theme background (accepts any valid CSS background value)
   * @type {string}
   */
  export let background = null;
  /**
   * Allows client imported CSS for embeddable content
   * @type {boolean}
   */
  export let allowClientOverrides = false;

  $: _id = id && !(theme || background) ? id : null;
  $: _cls = cls && !(theme || background) ? cls : "";
</script>

{#if ["narrow", "medium"].includes(width)}
  <Theme
    id="{id}"
    cls="{cls}"
    theme="{theme}"
    background="{background}"
    overrides="{themeOverrides}"
    allowClientOverrides="{allowClientOverrides}"
  >
    <div
      id="{_id}"
      class="ons-page__container ons-container {_cls}"
      class:ons-page__container--tall-height="{height === 'tall'}"
      class:ons-page__container--full-height="{height === 'full'}"
    >
      {#if marginTop}<div class="ons-spacer"></div>{/if}
      <div
        class:ons-page__container--narrow="{width === 'narrow'}"
        class:ons-page__container--medium="{width === 'medium'}"
      >
        <slot />
      </div>
      {#if marginBottom}<div class="ons-spacer"></div>{/if}
    </div>
  </Theme>
{:else}
  <Theme
    id="{id}"
    cls="{cls}"
    theme="{theme}"
    background="{background}"
    overrides="{themeOverrides}"
    allowClientOverrides="{allowClientOverrides}"
  >
    <div
      id="{_id}"
      class="ons-page__container ons-container {_cls}"
      class:ons-page__container--wider="{width === 'wider'}"
      class:ons-page__container--full="{width === 'full'}"
      class:ons-page__container--tall-height="{height === 'tall'}"
      class:ons-page__container--full-height="{height === 'full'}"
    >
      {#if marginTop}<div class="ons-spacer"></div>{/if}
      <slot />
      {#if marginBottom}<div class="ons-spacer"></div>{/if}
    </div>
  </Theme>
{/if}

<style>
  .ons-page__container {
    padding-top: 0.05px;
    padding-bottom: 0.05px;
  }
  .ons-page__container--narrow {
    max-width: 608px;
    margin: 0 auto 0 0;
  }
  .ons-page__container--medium {
    max-width: 800px;
    margin: 0 auto 0 0;
  }
  .ons-page__container--wider {
    max-width: 1240px;
  }
  .ons-page__container--full {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
  .ons-page__container--tall-height {
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  .ons-page__container--full-height {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .ons-page__container--vpadding {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
