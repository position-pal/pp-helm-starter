var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    "@semantic-release/github",
    "@semantic-release/git",
    [
        "@pubgcorp/semantic-release-helm",
        {   
            "ociRegistry": "oci://ghcr.io/position-pal",
            "versionUpdatePolicy": "sync",
            "appVersionUpdatePolicy": "desync"
        }
    ]
)

module.exports = config