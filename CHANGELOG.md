## 1.0.0 (2025-01-26)

### Features

* test feature ([dd49a80](https://github.com/position-pal/pp-helm-starter/commit/dd49a80834b4abc94c55a0230615eabc869adaa4))

### Dependency updates

* **deps:** add renovate.json ([5b24e73](https://github.com/position-pal/pp-helm-starter/commit/5b24e7314b41d11437cf0d309dd817b46079fc72))

### Bug Fixes

* change version of publish action ([03ae300](https://github.com/position-pal/pp-helm-starter/commit/03ae300945e4ca47076ed26b4ae9088982da84c4))
* change version of publish action to v4.1.0 ([f3e7ea9](https://github.com/position-pal/pp-helm-starter/commit/f3e7ea99cbcec2bcd03f4245a977072bd6b7f897))
* fix script for updating helm version ([b050b66](https://github.com/position-pal/pp-helm-starter/commit/b050b667bc80da621684a970c1e2b8a9c0e9568f))
* remove version for publish action ([aa4f6ba](https://github.com/position-pal/pp-helm-starter/commit/aa4f6ba4812ef88883098d6b3dbff58cafbd316a))

### Build and continuous integration

* add envs forr repo username and password ([ce4bd4d](https://github.com/position-pal/pp-helm-starter/commit/ce4bd4d521cbd42a07f99d83fdfcee2a9baf4cd1))
* add semantic release configuration for helm and conventional-commits messages ([c056144](https://github.com/position-pal/pp-helm-starter/commit/c0561444dbb3edb1d1afd11d18c137afd544f1ac))
* adding basic worflows for the ci ([09de84c](https://github.com/position-pal/pp-helm-starter/commit/09de84c59e4719a0a4357b3ed8ef0e53a8d3eeb0))
* adding ghcr pushing step ([851bd38](https://github.com/position-pal/pp-helm-starter/commit/851bd38ef6922890744b9a746a9af1b61f2d97da))
* adding mergify configuration file ([779e0ce](https://github.com/position-pal/pp-helm-starter/commit/779e0ce623b58b3ad690f946e495da8a33acb03c))
* adding workflow for release a new version of the helm file ([69ae5a1](https://github.com/position-pal/pp-helm-starter/commit/69ae5a1fd77ca9fe8c52a02909106b9780be176b))
* adding write permissions ([67235b5](https://github.com/position-pal/pp-helm-starter/commit/67235b5451e6b7e2b6f9d230f21d6d72143ee6f5))
* change execution order for semantic-release plugins ([b1999c7](https://github.com/position-pal/pp-helm-starter/commit/b1999c798a102c51129e1ee647207a09fb51a315))
* change registry to github oci registry ([e25e2c6](https://github.com/position-pal/pp-helm-starter/commit/e25e2c69c968687a27c782810afd9960dbb072f5))
* changing GITHUB_TOKEN ([e157a7e](https://github.com/position-pal/pp-helm-starter/commit/e157a7e2c1ae7ba4514146d6edf84a76620c9437))
* **deps:** change semantic release plugin for helm ([b407ff8](https://github.com/position-pal/pp-helm-starter/commit/b407ff85edb6fb18c642855de834844041d95787))
* **deps:** remove unused dependencies ([6d17cb1](https://github.com/position-pal/pp-helm-starter/commit/6d17cb1091a8a1cc7c987431145cbf4ada6435fe))
* edit ci action for linting and testing charts ([c0e2c06](https://github.com/position-pal/pp-helm-starter/commit/c0e2c0697543c75896008fb7857defdb3d66cc04))
* edit GITHUB_TOKEN env ([d938a6f](https://github.com/position-pal/pp-helm-starter/commit/d938a6fff09e7fd2f1be25af9faead59099bad90))
* edit login information for publishing packages ([d499268](https://github.com/position-pal/pp-helm-starter/commit/d4992687fac4f71fb4340629dad6315a4c8c4930))
* edit release action installing dependencies from package.json instead of package-lock.json ([76123cb](https://github.com/position-pal/pp-helm-starter/commit/76123cb71ab2e09c33573b3035d09c5fa4299a95))
* edit release.yaml worflow removing caching option ([afc6aa3](https://github.com/position-pal/pp-helm-starter/commit/afc6aa39b06e077219ba244320a4f8997c10cd0f))
* enabling deploying permissions to write ([c8f5167](https://github.com/position-pal/pp-helm-starter/commit/c8f51678e65aaefa2e8bd73ea2ac2029739ede80))
* ensure that the last step of release is executed when a new tag is released ([2d49670](https://github.com/position-pal/pp-helm-starter/commit/2d49670f4f73692a40eaf72b26aae7b3b0778298))
* fixing indentation problem on ci.yml ([34d9536](https://github.com/position-pal/pp-helm-starter/commit/34d95367720d3e624546f855b92615f0aba1ccc5))
* joing action on release.yml file ([30cb4c7](https://github.com/position-pal/pp-helm-starter/commit/30cb4c7a4f8d29cc2b43b2fd8a8027b9bc3ab660))
* re-enabling package write to action permission ([a5df556](https://github.com/position-pal/pp-helm-starter/commit/a5df5563875c041f6cac7c11b582733c5baaaa96))
* remove semantic-release-helm3, handle updating of chart appVersion and version using custom publishCmd ([de749a2](https://github.com/position-pal/pp-helm-starter/commit/de749a27fccf798e21a9351c75f69814992215e2))
* removing oci prefix ([ef9211e](https://github.com/position-pal/pp-helm-starter/commit/ef9211efab6793235e43cbfe277867531f050ee4))
* renaming action ([921da60](https://github.com/position-pal/pp-helm-starter/commit/921da60cd905a637808a26413c32bb6f99fb2996))
* updating Chart version using exececutable script ([9033cce](https://github.com/position-pal/pp-helm-starter/commit/9033ccecb0bf261e5331ed96a903b8e87dee98b8))
* updating configuration for semantic release ([b5080be](https://github.com/position-pal/pp-helm-starter/commit/b5080be20e03157b67b7ab4ac174b25aaf17814e))

### General maintenance

* add .gitignore to the folder ([28cc90a](https://github.com/position-pal/pp-helm-starter/commit/28cc90a1857426dfad3bcb6c529054125860b8a7))
* **builds:** change semantic-release-helm to a new plugin ([b8d1337](https://github.com/position-pal/pp-helm-starter/commit/b8d1337895505bd501665557842541dfe39bbbf3))
* edit chart name ([efded43](https://github.com/position-pal/pp-helm-starter/commit/efded43fb25f4999ef1d8bddaf3a1852e8a5345e))
* first commit ([93bbce6](https://github.com/position-pal/pp-helm-starter/commit/93bbce62e998576d3e436f006043a20db17ab81a))
* fixing typo on workflows file name ([b52c80c](https://github.com/position-pal/pp-helm-starter/commit/b52c80c590ef12dbc7281e73a8bbfbd67138ed19))
* initialized npm package repository ([73e9a65](https://github.com/position-pal/pp-helm-starter/commit/73e9a65fdfd4b62a6ba6edbee841ca5711bd3b61))
* **release:** 1.0.0 [skip ci] ([2508638](https://github.com/position-pal/pp-helm-starter/commit/2508638740b0c00ae438cbf90d70675332cb6cdf))
* test commit ([ed10389](https://github.com/position-pal/pp-helm-starter/commit/ed103897c35407f7f1e0cb91f53372cd5a0ad1c9))

## 1.0.0 (2025-01-25)

### Features

* test feature ([dd49a80](https://github.com/position-pal/pp-helm-starter/commit/dd49a80834b4abc94c55a0230615eabc869adaa4))

### Bug Fixes

* change version of publish action ([03ae300](https://github.com/position-pal/pp-helm-starter/commit/03ae300945e4ca47076ed26b4ae9088982da84c4))
* change version of publish action to v4.1.0 ([f3e7ea9](https://github.com/position-pal/pp-helm-starter/commit/f3e7ea99cbcec2bcd03f4245a977072bd6b7f897))
* fix script for updating helm version ([b050b66](https://github.com/position-pal/pp-helm-starter/commit/b050b667bc80da621684a970c1e2b8a9c0e9568f))
* remove version for publish action ([aa4f6ba](https://github.com/position-pal/pp-helm-starter/commit/aa4f6ba4812ef88883098d6b3dbff58cafbd316a))

### Build and continuous integration

* add envs forr repo username and password ([ce4bd4d](https://github.com/position-pal/pp-helm-starter/commit/ce4bd4d521cbd42a07f99d83fdfcee2a9baf4cd1))
* add semantic release configuration for helm and conventional-commits messages ([c056144](https://github.com/position-pal/pp-helm-starter/commit/c0561444dbb3edb1d1afd11d18c137afd544f1ac))
* adding basic worflows for the ci ([09de84c](https://github.com/position-pal/pp-helm-starter/commit/09de84c59e4719a0a4357b3ed8ef0e53a8d3eeb0))
* adding ghcr pushing step ([851bd38](https://github.com/position-pal/pp-helm-starter/commit/851bd38ef6922890744b9a746a9af1b61f2d97da))
* adding workflow for release a new version of the helm file ([69ae5a1](https://github.com/position-pal/pp-helm-starter/commit/69ae5a1fd77ca9fe8c52a02909106b9780be176b))
* adding write permissions ([67235b5](https://github.com/position-pal/pp-helm-starter/commit/67235b5451e6b7e2b6f9d230f21d6d72143ee6f5))
* change execution order for semantic-release plugins ([b1999c7](https://github.com/position-pal/pp-helm-starter/commit/b1999c798a102c51129e1ee647207a09fb51a315))
* change registry to github oci registry ([e25e2c6](https://github.com/position-pal/pp-helm-starter/commit/e25e2c69c968687a27c782810afd9960dbb072f5))
* changing GITHUB_TOKEN ([e157a7e](https://github.com/position-pal/pp-helm-starter/commit/e157a7e2c1ae7ba4514146d6edf84a76620c9437))
* **deps:** change semantic release plugin for helm ([b407ff8](https://github.com/position-pal/pp-helm-starter/commit/b407ff85edb6fb18c642855de834844041d95787))
* **deps:** remove unused dependencies ([6d17cb1](https://github.com/position-pal/pp-helm-starter/commit/6d17cb1091a8a1cc7c987431145cbf4ada6435fe))
* edit ci action for linting and testing charts ([c0e2c06](https://github.com/position-pal/pp-helm-starter/commit/c0e2c0697543c75896008fb7857defdb3d66cc04))
* edit GITHUB_TOKEN env ([d938a6f](https://github.com/position-pal/pp-helm-starter/commit/d938a6fff09e7fd2f1be25af9faead59099bad90))
* edit login information for publishing packages ([d499268](https://github.com/position-pal/pp-helm-starter/commit/d4992687fac4f71fb4340629dad6315a4c8c4930))
* edit release action installing dependencies from package.json instead of package-lock.json ([76123cb](https://github.com/position-pal/pp-helm-starter/commit/76123cb71ab2e09c33573b3035d09c5fa4299a95))
* edit release.yaml worflow removing caching option ([afc6aa3](https://github.com/position-pal/pp-helm-starter/commit/afc6aa39b06e077219ba244320a4f8997c10cd0f))
* enabling deploying permissions to write ([c8f5167](https://github.com/position-pal/pp-helm-starter/commit/c8f51678e65aaefa2e8bd73ea2ac2029739ede80))
* fixing indentation problem on ci.yml ([34d9536](https://github.com/position-pal/pp-helm-starter/commit/34d95367720d3e624546f855b92615f0aba1ccc5))
* joing action on release.yml file ([30cb4c7](https://github.com/position-pal/pp-helm-starter/commit/30cb4c7a4f8d29cc2b43b2fd8a8027b9bc3ab660))
* re-enabling package write to action permission ([a5df556](https://github.com/position-pal/pp-helm-starter/commit/a5df5563875c041f6cac7c11b582733c5baaaa96))
* remove semantic-release-helm3, handle updating of chart appVersion and version using custom publishCmd ([de749a2](https://github.com/position-pal/pp-helm-starter/commit/de749a27fccf798e21a9351c75f69814992215e2))
* removing oci prefix ([ef9211e](https://github.com/position-pal/pp-helm-starter/commit/ef9211efab6793235e43cbfe277867531f050ee4))
* renaming action ([921da60](https://github.com/position-pal/pp-helm-starter/commit/921da60cd905a637808a26413c32bb6f99fb2996))
* updating Chart version using exececutable script ([9033cce](https://github.com/position-pal/pp-helm-starter/commit/9033ccecb0bf261e5331ed96a903b8e87dee98b8))
* updating configuration for semantic release ([b5080be](https://github.com/position-pal/pp-helm-starter/commit/b5080be20e03157b67b7ab4ac174b25aaf17814e))

### General maintenance

* add .gitignore to the folder ([28cc90a](https://github.com/position-pal/pp-helm-starter/commit/28cc90a1857426dfad3bcb6c529054125860b8a7))
* **builds:** change semantic-release-helm to a new plugin ([b8d1337](https://github.com/position-pal/pp-helm-starter/commit/b8d1337895505bd501665557842541dfe39bbbf3))
* edit chart name ([efded43](https://github.com/position-pal/pp-helm-starter/commit/efded43fb25f4999ef1d8bddaf3a1852e8a5345e))
* first commit ([93bbce6](https://github.com/position-pal/pp-helm-starter/commit/93bbce62e998576d3e436f006043a20db17ab81a))
* fixing typo on workflows file name ([b52c80c](https://github.com/position-pal/pp-helm-starter/commit/b52c80c590ef12dbc7281e73a8bbfbd67138ed19))
* initialized npm package repository ([73e9a65](https://github.com/position-pal/pp-helm-starter/commit/73e9a65fdfd4b62a6ba6edbee841ca5711bd3b61))
* test commit ([ed10389](https://github.com/position-pal/pp-helm-starter/commit/ed103897c35407f7f1e0cb91f53372cd5a0ad1c9))
