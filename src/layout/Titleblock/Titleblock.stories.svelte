<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";
  import Titleblock from "./Titleblock.svelte";
  import { withComponentDocs } from "../../js/withParams.js";
</script>

<Meta
  title="Layout/Titleblock"
  component="{Titleblock}"
  argTypes="{{
    theme: {
      options: ['light', 'dark', 'lightblue'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <Titleblock {...args} />
</Template>

<Story
  name="Default"
  args="{{
    title: 'Page headline',
    meta: [
      { key: 'Dataset ID', value: 'RM169' },
      { key: 'Released', value: '2023-04-04', col: 4 },
      {
        key: 'Last updated',
        value: '2023-06-08',
        col: 8,
        extra: `— <a href="#version-history">See version history</a>`,
      },
    ],
  }}"
/>

<Story
  name="With title badge"
  args="{{
    title: `Some much longer page headline`,
    meta: [
      { key: 'Dataset ID', value: 'RM169' },
      { key: 'Released', value: '2023-04-04', col: 4 },
    ],
    titleBadge: 'Education and skills',
    titleBadgeAriaLabel: 'Topic: Education and skills',
  }}"
/>
