// Restores the Yarn 1 `yarn versions` command, which Yarn 4 dropped.
// CI pipelines built for Yarn 1 run it before `yarn install`, where a plain
// package.json script cannot run yet.
module.exports = {
  name: `plugin-versions`,
  factory: (require) => {
    const { BaseCommand } = require(`@yarnpkg/cli`);
    const { YarnVersion } = require(`@yarnpkg/core`);

    class VersionsCommand extends BaseCommand {
      static paths = [[`versions`]];

      async execute() {
        const versions = { yarn: YarnVersion, ...process.versions };
        this.context.stdout.write(`${JSON.stringify(versions, null, 2)}\n`);
      }
    }

    return { commands: [VersionsCommand] };
  },
};
