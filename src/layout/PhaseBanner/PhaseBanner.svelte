<script>
  /**
   * Phase of project (alpha, beta, prototype etc.)
   * @type {string}
   */
  export let phase = "Beta";
  /**
   * URL of feedback form (relative or absolute)
   * @type {string}
   */
  export let href = "/feedback";
</script>

<div class="ons-phase-banner">
  <div class="ons-container">
    <div class="ons-grid ons-grid--flex ons-grid--gutterless ons-grid--no-wrap">
      <div class="ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink">
        <strong class="ons-phase-banner__badge">{phase}</strong>
      </div>
      <div class="ons-col-auto ons-grid--flex ons-grid--no-wrap@l ons-grid--vertical-center">
        <span class="ons-u-fs-s ons-u-m-no">
          {#if phase.toLowerCase() === "prototype"}
            This is a prototype – your <a href="{href}">feedback</a> will help us improve it.
          {:else}
            This is a new service – your <a href="{href}">feedback</a> will help us improve it.
          {/if}
        </span>
      </div>
    </div>
  </div>
</div>

<style>
  .ons-phase-banner {
    background: var(--pale, rgb(245, 245, 246)) !important;
  }
  .ons-phase-banner__badge {
    background: var(--text, rgb(34, 34, 34)) !important;
    color: var(--background, white) !important;
  }
</style>
