displays the actual scores in the scoreboard (ie the sum of the positions all submissions have)

for example a team has done two exercises. They were the first one to hand in the flag in the first exercise and the 68th one to hand in the flag for the second one then their overall score is (1+68=) 69

# Installation

> [!NOTE]
> With installing you're basically giving the code permission to be executed in your browser. I suggest you take a look before installing.

to install either
1. use **`wget`** with the link from the release in the sidebar of the `*.xpi` file
2. [install from file](https://extensionworkshop.com/documentation/publish/distribute-sideloading/#install-addon-from-file) with the `*.xpi` from the realease in the sidebar
3. just click the `*.xpi` file in the release. This should just ask to install the addon

![screenshot](screenshot.png)

## Build a new version
### Setup
You need an API key from [addons.mozilla.org](https://addons.mozilla.org/en-US/developers/addon/api/key/) and a github token with the `repo` scope. Then you need to add them as secrets to your repository with the names **`MOZILLA_ISSUER`** and **`MOZILLA_SECRET`** for the mozilla key and **`GITHUB_TOKEN`** for the github token.

### Build
1. create a new tag with `git tag -a vx.x.x -m "Version x.x.x"`
2. push the tag with `git push origin vx.x.x`

Now the github action should build a new version and upload it to the release page. It can take a few minutes until the new version is available. You will receive an email from mozilla when the new version is available.