<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /**
   * Unique ID input
   * @type {string}
   */
  export let id;
  /**
   * ID for radio group (required)
   * @type {string}
   */
  export let groupId;
  /**
   * Label for input
   * @type {string}
   */
  export let label;
  /**
   * Binding for ID of selected option
   * @type {string}
   */
  export let value = null;
  /**
   * (Optional) Extended description for element
   * @type {string}
   */
  export let description = null;
  /**
   * Compact mode (no border)
   * @type {boolean}
   */
  export let compact = false;
</script>

<span class="ons-radios__item" class:ons-radios__item--no-border="{compact}">
  <span class="ons-radio" class:ons-radio--no-border="{compact}">
    <input
      type="radio"
      id="{id}"
      bind:group="{value}"
      value="{id}"
      name="{groupId}"
      class="ons-radio__input ons-js-radio"
      on:change="{(e) => dispatch('change', e)}"
    />
    <label
      class="ons-radio__label"
      class:ons-label--with-description="{description}"
      for="{id}"
      id="{id}-label"
      aria-describedby="{description ? `${id}-label-description-hint` : null}"
    >
      {label}
      {#if description}
        <span class="ons-label__aria-hidden-description" aria-hidden="true"
          ><span class="ons-label__description ons-radio__label--with-description">
            {description}
          </span></span
        >
      {/if}
    </label>
    {#if description}
      <span
        class="ons-label__visually-hidden-description ons-u-vh"
        id="{id}-label-description-hint"
      >
        {description}
      </span>
    {/if}
  </span>
</span>

<style>
  .ons-radios__item {
    display: table;
  }
  .ons-radio__input {
    border-color: currentColor !important;
    background: none !important;
    box-shadow: none !important;
  }
  .ons-radio--no-border .ons-radio__input:focus {
    box-shadow: 0 0 0 1px currentColor, 0 0 0 4px #fbc900 !important;
  }
  .ons-radio__input:checked::after {
    border-color: currentColor;
  }
  .ons-radio__input::after {
    left: 50% !important;
    top: 50% !important;
    margin-left: -6px !important;
    margin-top: -6px !important;
    /* background-color: currentColor !important;
    border-color: currentColor !important; */
  }
  .ons-radio__label::before {
    background: none;
    border-color: currentColor;
  }
  .ons-radio__input:checked + .ons-radio__label::before {
    background: var(--pale, #f5f5f6);
  }
  .ons-radio__input:focus + .ons-radio__label::before {
    box-shadow: 0 0 0 1px currentColor, 0 0 0 4px #fbc900;
  }
</style>
