var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "semantic-release-helm3",
        {   
            "chartPath": "."
        }
    ],
    "@semantic-release/git",
    "@semantic-release/github",
)

module.exports = config