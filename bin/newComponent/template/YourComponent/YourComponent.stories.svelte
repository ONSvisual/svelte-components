<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import YourComponent from "./YourComponent.svelte";

  import { withComponentDocs } from "../../js/withParams.js";

  // 🖼️ You can import images you need in stories directly in code!
  // @ts-ignore
  import SharkImg from "./docs/shark.jpg";

  const metaProps = {
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: "select",
        options: ["narrow", "medium", "wide", "wider", "full"],
      },
    },
  };
</script>

<Meta title="Components/YourComponent" component="{YourComponent}" {...metaProps} />

<Template let:args>
  <YourComponent {...args} />
</Template>

<Story
  name="Default"
  args="{{
    width: 'normal',
    src: SharkImg,
    altText: "Duh dum! It's a shark!!",
  }}"
/>
