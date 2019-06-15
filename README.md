## React - Multiple Providers

Sometimes you need to use separate data contexts from different packages to combine your dataflow.
This Repo shows a use case where you can use the complete package as a UI component self contained or just the data layer from that package.
This way you can leverage the power of spliting packages in their own repos and build feature focused teams that share the same API to communicate woth different modules.

Note: The `@madebyus` simulates a npm domain that would have all this packages available for download so imagine that you are importing them from your node_modules instead of a local folder.
