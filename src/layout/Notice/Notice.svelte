<script>
  /**
   * (Optional) Notice title
   * @type {string}
   */
  export let title = null;
  /**
   * Sets the mode/colour of the notice
   * @type {"info"|"success"|"pending"|"error"|"warning"}
   */
  export let mode = "info";
  /**
   * Adds an exclamation mark icon
   * @type {boolean}
   */
  export let important = mode === "warning";

  $: style =
    mode === "success"
      ? "background: var(--ons-color-success-tint); border-color: var(--ons-color-success);"
      : mode === "pending"
      ? "background: var(--ons-color-pending-tint); border-color: var(--ons-color-pending);"
      : mode === "error"
      ? "background: var(--ons-color-errors-tint); border-color: var(--ons-color-errors);"
      : null;
</script>

<div
  class="ons-panel {mode === 'warning' ? 'ons-panel--warn' : 'ons-panel--info'} ons-panel--no-title"
  style="{style}"
>
  <div class="ons-u-bg--tr" class:ons-panel--warn="{important && mode !== 'warning'}">
    {#if important}<div class="ons-panel__icon" aria-hidden="true">!</div>{/if}
    <span class="ons-panel__assistive-text ons-u-vh"
      >{mode === "warning" ? "Warning:" : "Important information:"}</span
    >
    <div class="ons-panel__body">
      <div class="default-line-height" class:ons-u-fs-r="{mode !== 'warning'}">
        {#if title}<p><strong>{title}</strong></p>{/if}
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  .ons-panel {
    color: rgb(34, 34, 34);
  }
  :global(.ons-panel__body a) {
    color: #206095 !important;
  }
  :global(.ons-panel__body a:hover) {
    color: rgb(0, 60, 87) !important;
    text-decoration: underline solid rgb(0, 60, 87) 2px !important;
  }
  :global(.ons-panel__body p:last-of-type) {
    margin-bottom: 0;
  }
</style>
