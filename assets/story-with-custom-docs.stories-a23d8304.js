import{M as c}from"./chunk-PCJTTTQV-091320a2.js";import{p as s,j as o}from"./jsx-runtime-539b76a3.js";import{u as i}from"./index-297ebefe.js";import"./iframe-6119d1a4.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";const a=""+new URL("source-code-6f5764e6.png",import.meta.url).href;function r(t){const e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",blockquote:"blockquote",strong:"strong",a:"a"},i(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{title:"Contributing/Recipes: Story with custom docs",parameters:{...s}}),`
`,o.jsx(e.h1,{id:"needs-updating",children:"!!!NEEDS UPDATING!!!"}),`
`,o.jsx(e.h1,{id:"recipes-story-with-custom-docs",children:"Recipes: Story with custom docs"}),`
`,o.jsx(e.p,{children:"You can add custom markdown to your story page by importing and using markdown files."}),`
`,o.jsxs(e.p,{children:["First, create a markdown file in a ",o.jsx(e.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    docs/
      component.md
      someStory.md
`})}),`
`,o.jsxs(e.p,{children:["Now, import your markdown file in your story page component and attach it to either the ",o.jsx(e.code,{children:"Meta"})," (for the top docs that introduce your component) or any individual ",o.jsx(e.code,{children:"Story"})," using one of our handy docs utils."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import YourComponent from "./YourComponent.svelte";

  // Import markdown files.
  // Note: the "?raw" in the imports below is important!!
  import componentDocs from "./stories/docs/component.md?raw";
  import someStoryDocs from "./stories/docs/someStory.md?raw";

  import { withComponentDocs, withStoryDocs } from "$docs/utils/withParams";

  const meta = {
    ...withComponentDocs(componentDocs),
  };
<\/script>

<meta title="Components/YourComponent" component="{YourComponent}" {...meta} />

<template let:args>
  <YourComponent {...args} />
</template>

<!-- The first story will use the component docs in Meta... -->
<Story name="Basic" args="{{ width: 'normal' }}" />

<!-- Additional stories can use other docs now. -->
<Story name="Another story" args="{{ width: 'normal' }}" {...withStoryDocs(someStoryDocs)} />
`})}),`
`,o.jsx(e.h2,{id:"customising-copyable-source-code",children:"Customising copyable source code"}),`
`,o.jsx(e.p,{children:`If you need to, you can customise the "Copy" source code available below a component story's iframe window.`}),`
`,o.jsx("img",{className:"feature",src:a,width:"80%"}),`
`,o.jsxs(e.p,{children:["First, add a snippet file in a ",o.jsx(e.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    snippets/
      default.svelte
`})}),`
`,o.jsxs(e.p,{children:["Now, import your snippet file in your story page component and attach it to any individual ",o.jsx(e.code,{children:"Story"})," using our docs utils."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import YourComponent from "./YourComponent.svelte";

  // Import snippet file.
  // Note: the "?raw" in the import below is important!!
  import defaultSource from "./stories/snippets/default.svelte?raw";

  import { withSource } from "$docs/utils/withParams";

  const meta = {
    title: "Components/YourComponent",
    component: YourComponent,
  };
<\/script>

<meta {...meta} />

<template let:args>
  <YourComponent {...args} />
</template>

<!-- Pass source in inside an object keyed by your snippet's language, e.g., svelte, scss, etc. -->
<Story name="Basic" args="{{ width: 'normal' }}" {...withSource({ svelte: defaultSnippet })} />
`})}),`
`,o.jsxs(e.blockquote,{children:[`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Pro tip:"})," If you pass your source code in directly, the code won't change prop values when users play with Storybook's built-in ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"}),", so it's best to start with a default example using the generated source code."]}),`
`]}),`
`,o.jsxs(e.p,{children:["If you're adding source code AND custom docs to a story, you can chain ",o.jsx(e.code,{children:"withSource"})," and ",o.jsx(e.code,{children:"withComponentDocs"})," like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<!-- ... -->

<Story name="Extra wide" args="{{ width: 'wider' }}" {...withComponentDocs(componentDocs,
withSource({ svelte: defaultSnippet }))} />
`})})]})}function m(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?o.jsx(e,{...t,children:o.jsx(r,{...t})}):r(t)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const n={title:"Contributing/Recipes: Story with custom docs",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:m};const S=["__page"];export{S as __namedExportsOrder,p as __page,n as default};
//# sourceMappingURL=story-with-custom-docs.stories-a23d8304.js.map
