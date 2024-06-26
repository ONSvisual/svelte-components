<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import Container from "../../wrappers/Container/Container.svelte";

  /**
   * ID for back-linking to table of contents
   * @type {string}
   */
  export let id = "toc";
  /**
   * (Optional) Sets a css class for the section
   * @type {string}
   */
  export let cls = null;
  /**
   * Sets the width of the container
   * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
   */
  export let width = "wide";
  /**
   * A label for the page contents nav
   * @type {string}
   */
  export let contentsLabel = "Page contents";
  /**
   * Don't include table of contents (allows for custom uses of nav panel)
   * @type {boolean}
   */
  export let noContents = false;
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

  let active;

  setContext("tocId", id);

  const sections = writable([]);
  setContext("sections", sections);

  const observer = writable();
  setContext("observer", observer);

  function formatSections(sections) {
    const secs = [];
    let sec = { subsections: [] };
    for (const section of sections) {
      if (section.dataset.subsection !== "true") {
        if (sec.title || sec.subsections.length > 0) secs.push(sec);
        sec = { id: section.id, title: section.dataset.title, subsections: [] };
      } else {
        sec.subsections.push({ id: section.id, title: section.dataset.title });
      }
    }
    return [...secs, sec];
  }
  $: formattedSections = formatSections($sections);

  onMount(() => {
    if (!noContents) {
      $observer = new IntersectionObserver(
        (entries, observer) => {
          for (let i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              active = entries[i].target.id;
              break;
            }
          }
        },
        {
          root: null,
          rootMargin: `0% 0% -70% 0%`,
          threshold: 0,
        }
      );
    }
  });
</script>

<Container
  cls="{cls}"
  theme="{theme}"
  themeOverrides="{themeOverrides}"
  allowClientOverrides="{allowClientOverrides}"
  width="{width}"
  marginTop="{marginTop}"
  marginBottom="{marginBottom}"
  background="{background}"
>
  <div class="ons-grid ons-js-toc-container ons-u-ml-no">
    <slot name="header" />
    <div class="ons-grid__col ons-col-4@m ons-u-pl-no ons-grid__col--sticky@m" id="{id}">
      <aside class="ons-toc-container" role="complementary">
        <nav class="ons-toc" aria-label="Pages in this guide">
          <slot name="before-nav" />
          {#if !noContents}
            {#if contentsLabel}
              <h2 class="ons-toc__title ons-u-fs-r--b ons-u-mb-s">
                {contentsLabel}
              </h2>
            {/if}
            <ol class="ons-list ons-u-mb-m ons-list--dashed">
              {#if formattedSections}
                {#each formattedSections as section}
                  <li class="ons-list__item">
                    {#if section.id && section.title}
                      <a
                        href="#{section.id}"
                        class="ons-list__link"
                        class:ons-toc__link-active="{section.id === active}"
                      >
                        {section.title}
                      </a>
                    {/if}
                    {#if section.subsections.length > 0}
                      <ol class="ons-list ons-u-mb-no ons-list--dashed">
                        {#each section.subsections as subsection}
                          <li class="ons-list__item">
                            <a
                              href="#{subsection.id}"
                              class="ons-list__link"
                              class:ons-toc__link-active="{subsection.id === active}"
                            >
                              {subsection.title}
                            </a>
                          </li>
                        {/each}
                      </ol>
                    {/if}
                  </li>
                {/each}
              {/if}
            </ol>
          {/if}
          <slot name="after-nav" />
        </nav>
      </aside>
    </div>
    <div class="ons-nav-sections ons-grid__col ons-col-8@m ons-u-pl-no">
      <slot name="before" />
      {#if $observer}
        <slot />
      {/if}
      <slot name="after" />
    </div>
    <slot name="footer" />
  </div>
</Container>

<style>
  @media (min-width: 740px) {
    .ons-col-4\@m {
      max-width: 280px;
      width: 280px;
    }
    .ons-col-8\@m {
      max-width: calc(100% - 280px);
      width: calc(100% - 280px);
    }
  }
  .ons-list__item-indented {
    margin-left: 50px !important;
  }
  .ons-nav-sections :global(section:first-of-type h2) {
    margin-top: 27px !important;
  }
</style>
