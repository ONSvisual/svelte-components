<script>
  import { onMount, onDestroy, getContext, createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  /**
   * ID for input element
   * @type {string}
   */
  export let id;
  /**
   * Name of checkbox group (optional)
   * @type {string|null}
   */
  export let name = null;
  /**
   * Value for input element (defaults to ID)
   * @type {string|object}
   */
  export let value = id;
  /**
   * Label for input
   * @type {string}
   */
  export let label;
  /**
   * Binding for checked state of input
   * @type {boolean}
   */
  export let checked = false;
  /**
   * Binding for checked state of input
   * @type {array|null}
   */
  export let group = null;
  /**
   * (Optional) Extended description for element
   * @type {string}
   */
  export let description = null;
  /**
   * Set display mode of checkbox
   * @type {"default"|"ghost"}
   */
  export let variant = "default";
  /**
   * Option to disable input
   * @type {boolean}
   */
  export let disabled = false;
  /**
   * Compact mode (no border)
   * @type {boolean}
   */
  export let compact = false;

  const checkboxes = getContext("checkboxes");

  let el;

  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  function updateGroup() {
    const newGroup = $checkboxes.filter((c) => c.checked).map((c) => c.id);
    if (newGroup.join() !== group.join()) group = newGroup;
  }

  function doChange(e) {
    if (Array.isArray(group) && Array.isArray($checkboxes)) {
      updateGroup();
    }
    dispatch("change", { id, checked, group, e });
  }

  onMount(() => {
    if (Array.isArray(group) && Array.isArray($checkboxes)) {
      const root = findAncestor(el, "ons-checkboxes__items");
      $checkboxes = [...root.getElementsByTagName("input")];
      updateGroup();
    }
  });

  onDestroy(() => {
    if (Array.isArray(group) && Array.isArray($checkboxes)) {
      $checkboxes = $checkboxes.filter((c) => c.id !== id);
      updateGroup();
    }
  });
</script>

<span
  class="ons-checkboxes__item"
  class:ons-checkboxes__item--ghost="{variant === 'ghost'}"
  class:ons-checkboxes__item--no-border="{compact}"
>
  <span class="ons-checkbox" class:ons-checkbox--no-border="{compact}">
    <input
      type="checkbox"
      id="{id}"
      name="{name}"
      value="{value}"
      bind:checked="{checked}"
      class="ons-checkbox__input ons-js-checkbox"
      disabled="{disabled}"
      aria-disabled="{disabled}"
      on:change="{doChange}"
      bind:this="{el}"
    />
    <label
      class="ons-checkbox__label"
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
  .ons-checkboxes__item {
    display: table;
  }
  .ons-checkbox__input:disabled {
    border: 2px solid var(--ons-color-border-disabled);
  }
  .ons-checkboxes__item label::before {
    background: none;
    border-color: currentColor;
    box-shadow: 0 0 0 1px currentColor;
  }
  .ons-checkboxes__item--ghost label::before {
    opacity: 60%;
  }
  .ons-checkboxes__item .ons-checkbox__input:focus + .ons-checkbox__label::before {
    box-shadow: 0 0 0 1px currentColor, 0 0 0 4px #fbc900;
    opacity: 100%;
  }
  .ons-checkboxes__item input {
    background: none;
    border-color: currentColor;
  }
  .ons-checkboxes__item input::after {
    border-color: currentColor;
    border-width: 0 0 3px 3px !important;
  }

  .ons-checkboxes__item--no-border .ons-checkbox__input:focus {
    box-shadow: 0 0 0 1px currentColor, 0 0 0 4px #fbc900;
  }
</style>
