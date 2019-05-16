1. Install dependency on the top level is not recommended of Yarn workspace, and you will got an error like

> Command failed: yarn add --dev ember-highcharts --non-interactive
error Running this command will add the dependency to the workspace root rather than the workspace itself, which might not be what you want - if you really meant it, make it explicit by running this command again with the -W flag (or --ignore-workspace-root-check).

2. If you install a dependency on a workspace package under it's path(packages/engine-a-lazy) which is just initialized, you will likely get an error like

> node_modules appears empty, you may need to run `yarn install`

cause it doesn't have a "node_modules" folder yet.

3. It's also impossible to install an ember-addon dependency which has a default blueprint like "ember-highcharts".

The first time I read [Ember and Yarn Workspaces](https://medium.com/square-corner-blog/ember-and-yarn-workspaces-fca69dc5d44a) blog post, I thought that the yarn workspace could be the solution for the specific dependency of lazy engine which is if one lazy engine has an specific addon dependency, this addon would better be bundled into the the engine's own engine-vendor.js but the global vendor.js, but now it seems won't work.

This repo is kind of contrived, but you will meet these issues if you want to use yarn workspace in an Ember project from the scratch.
