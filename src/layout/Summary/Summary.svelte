<script>
  /**
   * Title for summary table
   * @type {string}
   */
  export let title = null;
  /**
   * Array of items in format {key, value, href?}
   * @type {array}
   */
  export let items = [];
</script>

<div class="ons-summary">
  <div id="turnover" class="ons-summary__group">
    {#if title}<h2 class="ons-summary__group-title">{title}</h2>{/if}
    <div class="ons-summary__items ons-u-mb-s ons-u-bt ons-u-bb">
      {#each items as item}
        <div class="ons-summary__item">
          <dl class="ons-summary__row ons-summary__row--has-values" id="sales-dates">
            <dt
              class="ons-summary__item-title ons-u-pt-s ons-u-pb-s ons-u-pr-m ons-u-order--1@xxs@m ons-u-flex--2@xxs@m ons-col-4@m"
            >
              <div class="ons-summary__item--text ons-u-fw-b">{item.key}</div>
            </dt>
            <dd
              class="ons-summary__values ons-u-pt-s ons-u-pb-s ons-u-pr-m ons-u-pl-no@xxs@m ons-u-order--3@xxs@m ons-u-fw@xxs@m
          ons-u-pt-no@xxs@m ons-u-pt-no@xxs@m ons-u-bb-no@xxs@m ons-u-d-b@xxs@m"
            >
              <div>{item.value}</div>
            </dd>
            {#if item.href}
              <dd
                class="ons-summary__actions ons-u-flex-ai-fs ons-u-pt-s ons-u-pb-s ons-u-pl-no@xxs ons-u-ml-xs@xxs ons-u-order--2@xxs@m ons-col-2@m"
              >
                <a href="{item.href}" class="ons-summary__button"
                  >Change<span class="ons-u-vh"> value for {item.key}</span></a
                >
              </dd>
            {/if}
          </dl>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .ons-summary__values {
    font-weight: normal !important;
  }
</style>
