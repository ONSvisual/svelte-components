<script>
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * (Optional) Include a horizontal rule
   * @type {"narrow"|"full"|null}
   */
  export let hr = "narrow";
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
  marginTop="{marginTop}"
  marginBottom="{marginBottom}"
>
  <hr class:hr-full="{hr === 'full'}" class:hr-narrow="{hr === 'narrow'}" />
</Container>

<style>
  hr {
    border: none;
    margin: -10px 0 0;
  }
  hr.hr-full,
  hr.hr-narrow {
    border-top: 2px solid var(--muted, #777);
  }
  hr.hr-full {
    width: 100%;
  }
  hr.hr-narrow {
    width: 75px;
  }
</style>
