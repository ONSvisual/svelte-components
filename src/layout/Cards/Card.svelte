<script>
  import { getContext } from "svelte";
  import { slugify } from "../../js/utils";

  export let title = null;
  export let id = slugify(title);
  export let hideTitle = false;
  export let image = null;
  export let imageAlt = null;
  export let href = null;
  export let colspan = 1; // 1, 2 or 3
  export let rowspan = 1;
  export let noBackground = getContext("noBackground") || false;
  export let grow = false;

  const cols = getContext("cols");
</script>

<div
  class="{!noBackground ? 'tile tile__content' : ''}"
  style:grid-column="span {grow && $cols < 3
    ? $cols
    : colspan == 1
    ? 1
    : colspan > $cols
    ? $cols
    : colspan}"
  style:grid-column-end="{grow ? $cols + 1 : null}"
  style:grid-row="{rowspan > 1 ? `span ${rowspan}` : null}"
>
  <div id="{id}" class="ons-card" aria-describedBy="{id}_text">
    {#if href && title}
      <a href="{href}" class="ons-card__link ons-u-db" class:ons-u-vh="{hideTitle}">
        <slot name="image">
          {#if image}
            <img
              class="ons-card__image ons-u-mb-s"
              style:width="100%"
              src="{image}"
              alt="{imageAlt}"
              loading="lazy"
            />
          {/if}
        </slot>
        <slot name="title">
          <h3
            class="ons-card__title ons-u-fs-m"
            style:padding="{!noBackground && !image
              ? "12px 16px 0"
              : !noBackground
              ? "0 16px"
              : ""}"
          >
            {title}
          </h3>
        </slot>
      </a>
    {:else if title}
      <slot name="title">
        <h3
          class="ons-card__title ons-u-fs-m"
          class:ons-u-vh="{hideTitle}"
          style:padding="{!noBackground ? "8px 16px 0" : ""}"
          style:margin-bottom="5px"
        >
          {title}
        </h3>
      </slot>
    {/if}
    <div id="{id}_text" class:tile__body="{!noBackground}">
      <slot />
    </div>
  </div>
</div>

<style>
  .tile {
    position: relative;
    z-index: 1;
    overflow: hidden;
    box-shadow: 0 2px var(--muted, #4140424d);
  }
  .tile::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--hinted, hsl(240, 5%, 96%));
    --opacity: 0.35;
    filter: contrast(calc(var(--opacity, 1) / (2 - var(--opacity, 1))))
      brightness(calc(2 - var(--opacity, 1)));
  }
  .tile__body {
    padding: 0 16px 16px;
  }
  .ons-card__image {
    margin-bottom: 12px !important;
  }
</style>
