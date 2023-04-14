Allow users to filter the table by providing one of the attributes as the `filterField`. This works best with categorical columns.

```svelte
<Table
  data="{yourData}"
  filterField="{'Region'}"
  paginated="{true}"
  title="{'Press Freedom Index'}"
  notes="{'Source: Reporters Without Borders'}"
/>
```