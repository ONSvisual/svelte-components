<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /**
   * ID for &lt;input&gt; element
   * @type {string}
   */
  export let id = "";
  /**
   * A prop to bind to for the entered value
   * @type {string}
   */
  export let value = "";
  /**
   * A label to describe the &lt;input&gt; element (expected for accessibility)
   * @type {string}
   */
  export let label = "Enter some text";
  /**
   * Visually hide the label
   * @type {boolean}
   */
  export let hideLabel = false;
  /**
   * An optional description to help users know what to enter
   * @type {string}
   */
  export let description = "";
  /**
   * The maximum number of characters that can be entered (optional)
   * @type {number}
   */
  export let charLimit = null;
  /**
   * The width of the &lt;input&gt; in characters
   * @type {number}
   */
  export let width = null;
  /**
   * An optional prefix (eg. £) to appear on the left of the input
   * @type {string}
   */
  export let prefix = "";
  /**
   * An optional suffix (eg. %) to appear on the right of the input
   * @type {string}
   */
  export let suffix = "";
  /**
   * An optional hidden description of the prefix (for accessibility)
   * @type {string}
   */
  export let unitLabel = prefix || suffix || "";
  /**
   * An optional regex pattern foto limit the input (not currently used)
   * @type {string}
   */
  export let pattern = "";
  /**
   * Set to `true` if the value should be a number
   * @type {boolean}
   */
  export let numeric = false;
  /**
   * Set to `true` to highlight border in red
   * @type {boolean}
   */
  export let error = false;
</script>

<div class="ons-field">
  {#if label}
    <label
      class="ons-label"
      class:ons-label--with-description="{description}"
      class:ons-u-vh="{hideLabel}"
      aria-describedby="{description ? `${id}-description-hint` : null}"
      for="{id}"
    >
      {label}
    </label>
  {/if}
  {#if description}
    <span id="{id}-description-hint" class="ons-label__description ons-input--with-description">
      {description}
    </span>
  {/if}
  {#if prefix || suffix}
    <span class="ons-input-type" class:ons-input-type--prefix="{prefix}">
      <span class="ons-input-type__inner">
        <input
          type="text"
          id="{id}"
          bind:value="{value}"
          maxlength="{charLimit}"
          pattern="{pattern ? pattern : numeric ? '[0-9]*' : null}"
          inputmode="{numeric ? 'numeric' : null}"
          class="ons-input ons-input--text ons-input-type__input {Number.isInteger(width)
            ? `ons-input--w-${width}`
            : ''}"
          class:ons-input--error="{error}"
          aria-labelledby="{id} {id}-unit"
          aria-describedby="{description ? `${id}-description-hint` : null}"
          on:change="{(e) => dispatch('change', e)}"
        />
        <abbr
          id="{id}-unit"
          class="ons-input-type__type ons-js-input-abbr"
          aria-label="{unitLabel}"
          role="figure"
          title="{unitLabel}">{prefix || suffix}</abbr
        >
      </span>
    </span>
  {:else}
    <input
      type="text"
      id="{id}"
      bind:value="{value}"
      pattern="{pattern ? pattern : numeric ? '[0-9]*' : null}"
      inputmode="{numeric ? 'numeric' : null}"
      class="ons-input ons-input--text ons-input-type__input {Number.isInteger(width)
        ? `ons-input--w-${width}`
        : ''}"
      class:ons-input--error="{error}"
      aria-describedby="{description ? `${id}-description-hint` : null}"
      on:change="{(e) => dispatch('change', e)}"
    />
  {/if}
</div>

<style>
  .ons-input {
    background: none;
    border-color: currentColor;
  }
  .ons-input--error {
    background: none;
    border-color: rgb(208, 2, 27);
  }
  .ons-input--error:focus {
    border-color: currentColor;
  }
  .ons-js-input-abbr {
    background: var(--hinted, #e2e2e3);
    border-color: currentColor;
  }
  .ons-input-type--prefix .ons-input--error {
    border-left-color: currentColor;
    border-right-color: rgb(208, 2, 27);
  }
  .ons-input--error + .ons-js-input-abbr {
    color: #e2e2e3;
    border-color: #222;
  }
  .ons-input-type__input:focus + .ons-input-type__type::after {
    box-shadow: 0 0 0 1px currentColor, 0 0 0 4px #fbc900;
  }
  .ons-input-type__input.ons-input--error:focus + .ons-input-type__type::after {
    box-shadow: 0 0 0 1px #222, 0 0 0 4px #fbc900;
  }
</style>
