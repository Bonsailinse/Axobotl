# Contribution guide

## Developing axobotl

You consider contributing changes to commitizen – thank you!
Please consider these guidelines when filing a pull request:

- Code contributions should match the existing code style. `turbo lint` could help you check.
- Discuss additions/changes with us [on Discord](https://discord.gg/TynN4mjajp) before working on them.
- Check the dev branch to make sure someone hasn't worked on the same thing already.
- Commits follow the [Angular.js commit conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).
  - We use [commitizen](https://github.com/commitizen/cz-cli) to ensure uniform commits. Try `npx cz`.
- Pull requests should point to the dev branch, not main.

## Creating releases

Axobotl uses [semantic-release](https://github.com/semantic-release/semantic-release)
to release new versions automatically.

- Commits of type `fix` will trigger bugfix releases, think `0.0.1`
- Commits of type `feat` will trigger feature releases, think `0.1.0`
- Commits with `BREAKING CHANGE` in body or footer will trigger breaking releases, think `1.0.0`

All other commit types will trigger no new release.
