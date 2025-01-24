var publishCmd = `
yq e '.version = "{{nextRelease.version}}"' -i './Chart.yaml'
yq e '.appVersion = "{{nextRelease.version}}"' -i './Chart.yaml'
`

var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd,
        }
    ],
    "@semantic-release/github",
    "@semantic-release/git",
)

module.exports = config