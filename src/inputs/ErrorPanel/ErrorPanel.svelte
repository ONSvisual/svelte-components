<script>
  /**
   * Set an error message
   * @type {string}
   */
  export let message = "";
</script>

<div class="ons-panel ons-panel--error ons-panel--no-title" id="number-of-employees-error">
  <span class="ons-panel__assistive-text ons-u-vh">Error: </span>
  <div class="ons-panel__body">
    {#if message}
      <p class="ons-panel__error">
        <strong>{message}</strong>
      </p>
    {/if}
    <slot />
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
  :global(.ons-panel__body .ons-input) {
    background: white !important;
  }
</style>
