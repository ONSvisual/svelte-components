<script>
  import { contrastColor } from "../../js/utils";

  /**
   * Any valid CSS colour
   * @type {string}
   */
  export let color = "lightgrey";
  /**
   * Don't break text across lines
   * @type {boolean}
   */
  export let nowrap = true;

  $: text = contrastColor(color);
</script>

<mark
  class="em"
  class:nowrap="{nowrap}"
  style:background-color="{color}"
  style:color="{text}"
  role="presentation"
>
  <slot />
</mark>

<style>
  .em {
    padding: 1px 4px 1px 4px;
    font-weight: bold;
  }
  .nowrap {
    white-space: nowrap;
  }
</style>
