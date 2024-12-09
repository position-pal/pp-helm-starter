var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    "@semantic-release/github",
    "@semantic-release/git",
    [
        "semantic-release-helm",
        {   
            // Any other configuration should be specified here
            //registry: 'localhost:5000/repo/chart'
        }
    ]
)

module.exports = config