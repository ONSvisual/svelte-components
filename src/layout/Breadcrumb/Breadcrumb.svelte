<script>
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * An array of links in the format {label, href}
   * @type {array}
   */
  export let links = [];
  /**
   * Sets the width of the container
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "wide";
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
</script>

<Container
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  allowClientOverrides="{allowClientOverrides}"
  width="{width}"
  background="{background}"
>
  <nav class="ons-breadcrumb print--hide" aria-label="Breadcrumbs">
    <ol class="ons-breadcrumb__items ons-u-fs-s">
      {#each links as link}
        <li class="ons-breadcrumb__item ons-u-p-no">
          {#if link.href}
            <a class="ons-breadcrumb__link" href="{link.href}">{link.label}</a>
          {:else}
            {link.label}
          {/if}
          <svg
            class="ons-svg-icon"
            viewBox="0 0 8 13"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
              transform="translate(-5.02 -1.59)"></path>
          </svg>
        </li>
      {/each}
    </ol>
  </nav>
</Container>

<style>
  .ons-svg-icon {
    color: currentColor;
    fill: currentColor;
  }
</style>
