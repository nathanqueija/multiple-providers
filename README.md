## React - Multiple Providers

I wrote and article with a detailed explanation of what problem I am trying to solve here. If you'd like to know more about you can find it [here](https://medium.com/@nathanqueija/how-to-share-state-between-different-packages-using-react-context-api-40cc0ceda50d?postPublishedType=repub)

Sometimes you need to use separate data contexts from different packages to combine your dataflow.
This Repo shows a use case where you can use the complete package as a UI component self contained or just the data layer from that package.
This way you can leverage the power of spliting packages in their own repos and build feature focused teams that share the same API to communicate with different modules.

Note: The `@madebyme` simulates a npm domain that would have all this packages available for download so imagine that you are importing them from your node_modules instead of a local folder.
