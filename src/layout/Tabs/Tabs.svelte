<script>
  import { setContext, createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  const dispatch = createEventDispatcher();

  /**
   * Make tabs smaller/more compact
   */
  export let compact = false;
  /**
   * Include a border around the tab panel
   * @type {boolean}
   */
  export let border = false;
  /**
   * The ID of selected tab (for binding)
   * @type {string|null}
   */
  export let selected = null;

  const sections = writable([]);
  setContext("sections", sections);

  const _selected = writable(selected);
  setContext("selected", _selected);

  function showSection(id) {
    $_selected = id;
    [...$sections].forEach(
      (s) =>
        (s.className = s.id === id ? "ons-tabs__panel" : "ons-tabs__panel ons-tabs__panel--hidden")
    );
    dispatch("change", { id });
  }

  $: if (selected !== $_selected) selected = $_selected;
</script>

<section class="ons-tabs" class:ons-tabs__border="{border}">
  <h2 class="ons-tabs__title ons-u-fs-r--b ons-u-mt-no ons-u-vh">Contents</h2>
  <div class="ons-tabs__container">
    <ul class="ons-tabs__list ons-tabs__list--row" role="tablist">
      {#each $sections as section}
        <li
          id="tab_{section.id}"
          class="ons-tab__list-item ons-tab__list-item--row"
          role="presentation"
        >
          <a
            href="#{section.id}"
            class="ons-tab ons-tab--row"
            class:ons-tab--compact="{compact}"
            class:ons-tab--selected="{section.id === selected}"
            data-ga="click"
            data-ga-category="tabs"
            data-ga-action="Show: {section.dataset.title}"
            data-ga-label="Show: {section.dataset.title}"
            aria-selected="{section.id === selected ? 'true' : 'false'}"
            on:click|preventDefault="{() => showSection(section.id)}">{section.dataset.title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <slot />
</section>

<style>
  .ons-tabs__list::after {
    content: none;
  }
  .ons-tab--compact {
    font-size: 16px;
    height: 36px;
    padding: 0 12px;
    line-height: 2;
  }
  .ons-tab {
    text-underline-offset: 0;
    border-color: var(--hinted, #e2e2e3);
  }
  .ons-tab[aria-selected="true"] {
    border-color: var(--ons-color-borders);
  }
  .ons-tab:focus {
    box-shadow: inset 0 0 0 4px var(--hinted, #e2e2e3), inset 12px 0 0 0 var(--hinted, #e2e2e3),
      inset -12px 0 0 0 var(--hinted, #e2e2e3), inset 0 -8px 0 0 #222;
  }
  .ons-tab[aria-selected="true"]:focus {
    box-shadow: inset 0 0 0 4px var(--background, white), inset 12px 0 0 0 var(--background, white),
      inset -12px 0 0 0 var(--background, white), inset 0 -8px 0 0 #222;
  }
  .ons-tab--row {
    background: var(--hinted, #e2e2e3);
  }
  .ons-tab[aria-selected="true"]:not(:focus) {
    background-color: var(--background, white);
  }
  .ons-tabs__border > .ons-tabs__container {
    border: none;
  }
  .ons-tabs__border :global(.ons-tabs__panel) {
    border: 1px solid var(--ons-color-borders);
    border-radius: 4px;
    border-top-left-radius: 0;
    padding-left: 12px;
    padding-right: 12px;
  }
</style>
