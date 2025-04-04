<script>
  import { createEventDispatcher } from "svelte";
  import SelectInner from "svelte-select";
  import { sleep } from "../../js/utils";

  /**
   * Unique id for the element
   * @type {string}
   */
  export let id = "";
  /**
   * The mode can be either "default" or "search"
   * @type {"default"|"search"}
   */
  export let mode = "default";
  /**
   * Binding for the filter text entered
   * @type {string}
   */
  export let filterText = "";
  /**
   * Enable multi-select mode
   * @type {boolean}
   */
  export let multiple = false;
  /**
   * Set a limit on the number of items in multi-select mode
   * @type {number}
   */
  export let maxSelected = 4;
  /**
   * Defines whether the selection can be cleared
   * @type {boolean}
   */
  export let clearable = true;
  /**
   * Clear value on selection (default for "search" mode)
   * @type {boolean}
   */
  export let autoClear = mode === "search";
  /**
   * A label to describe the element (expected for accessibility)
   * @type {string}
   */
  export let label = "";
  /**
   * Visually hide the label
   * @type {boolean}
   */
  export let hideLabel = false;
  /**
   * An optional placeholder text
   * @type {string}
   */
  export let placeholder = "Select an option";
  /**
   * A prop to bind to for the selected value (will be an array for multi-select)
   * @type {object}
   */
  export let value = null;
  /**
   * An array of options, formatted {id, label}
   * @type {array}
   */
  export let options = [];
  /**
   * The attribute of an option that defines its ID
   * @type {string}
   */
  export let idKey = "id";
  /**
   * The attribute of an option that defines its label/name
   * @type {string}
   */
  export let labelKey = "label";
  /**
   * The attribute of an option that defines its group (optional)
   * @type {string|null}
   */
  export let groupKey = null;
  /**
   * Cluster results by group. If {false}, the group name will be the suffix
   * @type {boolean}
   */
  export let clusterByGroup = false;
  /**
   * Defines the width of the input in characters
   * @type {number}
   */
  export let width = 30;
  /**
   * Hide the icon in the search box
   * @type {boolean}
   */
  export let hideIcon = false;
  /**
   * An array of colours for multi-select
   * @type {array}
   */
  export let colors = [
    "#206095",
    "#a8bd3a",
    "#871a5b",
    "#27a0cc",
    "rgb(0, 60, 87)",
    "rgb(116, 108, 177)",
    "rgb(246, 96, 104)",
    "rgb(0, 163, 166)",
  ];
  /**
   * A function to filter items based on the entered text
   * @type {function}
   */
  export let itemFilter = (label, filterText, option) =>
    label.match(new RegExp(`\\b${filterText.replace(/[^\w\s]/gi, "")}`, "i")) &&
    !(multiple && value?.length >= maxSelected) &&
    !(mode === "search" && filterText?.length < 3);
  /**
   * An optional function to load options based on the entered text
   * @type {function}
   */
  export let loadOptions = null;
  /**
   * Optional params for positioning the dropdown
   * @type {object} floatingConfig
   */
  export let floatingConfig = {};

  $: style = colors.map((c, i) => `--item${i + 1}:${c}`).join(";");
  $: noOptionsMessage =
    multiple && value?.length >= maxSelected
      ? `You can only select up to ${maxSelected} options`
      : mode === "search" && filterText.length < 3
      ? "Enter 3 or more characters to see options"
      : filterText
      ? `No options match <b>${filterText}</b>`
      : "No options available";

  const dispatch = createEventDispatcher();

  async function handleChange(e) {
    dispatch("change", e.detail);
    if (autoClear) {
      await sleep(100);
      value = null;
    }
  }
</script>

<div class="ons-field" style="{style}">
  {#if label}
    <label class="ons-label" for="{id}" class:ons-u-vh="{hideLabel}">{label}</label>
  {/if}
  <div class="ons-themed-select {Number.isInteger(width) ? `ons-input--w-${width}` : ''}">
    <SelectInner
      id="{id}"
      placeholder="{placeholder}"
      loadOptions="{loadOptions}"
      itemFilter="{itemFilter}"
      floatingConfig="{floatingConfig}"
      bind:filterText="{filterText}"
      bind:value="{value}"
      items="{options}"
      itemId="{idKey}"
      label="{labelKey}"
      groupBy="{groupKey && clusterByGroup ? (item) => item[groupKey] : null}"
      showChevron="{!hideIcon}"
      multiple="{multiple}"
      clearable="{clearable}"
      on:change="{handleChange}"
      on:input
      on:focus
      on:blur
      on:clear
    >
      <div slot="item" let:item>
        {@html item[labelKey].replace(
          new RegExp(`\\b${filterText.replace(/[^\w\s]/gi, "")}`, "i"),
          (str) => `<b>${str}</b>`
        )}
        {#if groupKey && !clusterByGroup}<span class="item-group">{item[groupKey]}</span>{/if}
      </div>
      <div slot="empty">{@html noOptionsMessage}</div>
      <div slot="chevron-icon" style:transform="{mode === "search" ? "translateY(2px)" : null}">
        {#if mode === "search"}
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 12 12" width="20">
            <path
              fill="currentColor"
              d="M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0 0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z"
            ></path>
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 11.75 7.7"
            width="18"
          >
            <path
              fill="currentColor"
              d="m1.37.15 4.5 5.1 4.5-5.1a.37.37 0 0 1 .6 0l.7.7a.45.45 0 0 1 0 .5l-5.5 6.2a.37.37 0 0 1-.6 0l-5.5-6.1a.64.64 0 0 1 0-.6l.7-.7a.64.64 0 0 1 .6 0Z"
            ></path>
          </svg>
        {/if}
      </div>
      <div slot="clear-icon" style:transform="translateY(2px)" aria-label="Clear search">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" width="18">
          <path
            fill="currentColor"
            d="M13.6 1 l -0.71 -0.71 a 0.5 0.5 0 0 0 -0.71 0 l -5.25 5.25 l -5.25 -5.25 a 0.51 0.51 0 0 0 -0.71 0 l -0.71 0.71 a 0.5 0.5 0 0 0 0 0.71 l 5.25 5.25 l -5.25 5.25 a 0.5 0.5 0 0 0 0 0.71 l 0.71 0.71 a 0.5 0.5 0 0 0 0.71 0 l 5.25 -5.25 l 5.25 5.25 a 0.5 0.5 0 0 0 0.71 0 l 0.71 -0.71 a 0.5 0.5 0 0 0 0 -0.71 l -5.25 -5.25 l 5.25 -5.25 a 0.5 0.5 0 0 0 0 -0.71Z"
          ></path>
        </svg>
      </div>
    </SelectInner>
  </div>
</div>

<style>
  div[slot="empty"] {
    background-color: rgb(226, 226, 227);
    padding: 6px 10px;
  }
  .ons-themed-select {
    --border: 1px solid currentColor;
    --border-hover: 1px solid currentColor;
    --border-focused: 1px solid currentColor;
    --border-radius: 3px;
    --font-size: 18px;
    --placeholder-color: currentColor;
    --padding: 0 0 0 10px;
    --list-border: 1px solid currentColor;
    --item-hover-bg: #003c57;
    --item-hover-color: white;
    --item-is-active-bg: #003c57;
    --item-padding: 0 0 0 10px;
    --multi-item-outline: none;
    --multi-item-height: 30px;
    --value-container-padding: 3px 0;
    --multi-select-padding: 0 0 0 6px;
    --group-item-padding-left: 24px;
  }
  :global(.ons-themed-select > .svelte-select:focus-within) {
    outline: 3px solid #fbc900;
  }
  :global(.ons-themed-select > .svelte-select:focus-within::before) {
    content: "";
    outline: 1px solid rgb(34, 34, 34);
    outline-offset: -1px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    pointer-events: none;
  }
  :global(.ons-themed-select .svelte-select-list) {
    z-index: 4 !important;
    color: #222;
  }
  :global(.ons-themed-select .svelte-select-list > div + div) {
    border-top: 1px solid rgb(34, 34, 34);
  }
  :global(.ons-themed-select .multi-item) {
    color: white !important;
    font-weight: bold;
  }
  :global(.ons-themed-select .multi-item svg > path) {
    fill: white !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(1)) {
    background-color: var(--item1, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(2)) {
    background-color: var(--item2, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(3)) {
    background-color: var(--item3, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(4)) {
    background-color: var(--item4, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(5)) {
    background-color: var(--item1, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(6)) {
    background-color: var(--item2, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(7)) {
    background-color: var(--item3, #ebedef) !important;
  }
  :global(.ons-themed-select .multi-item:nth-of-type(8)) {
    background-color: var(--item4, #ebedef) !important;
  }
  .ons-field {
    overflow: visible;
  }
  span.item-group {
    font-size: smaller;
    opacity: 0.7;
  }
</style>
