var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    "@semantic-release/github",
    "@semantic-release/git",
    [
        "@pubgcorp/semantic-release-helm",
        {   
            "chartRepository": "https://position-pal.github.io/pp-helm-starter/",
            "versionUpdatePolicy": "sync",
            "appVersionUpdatePolicy": "desync"
        }
    ]
)

module.exports = config