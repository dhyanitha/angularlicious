# Developer Notes :: Matt Vaughn

## #5 August 6, 2018
```
ng serve certificates-of-insurance --host local.pinnacol.com --port 8080
```

### Development Environment Setup
* install Angular CLI;
    * `npm install -g @angular/cli` 

### Artifactory
Is a proxy for npmjs.com repository.

1. local repository (i.e., npm-brian-local, npm-dev-local)
2. remote repository
3. virtual repository: an aggregate of local and remote
    1. npm-development is a virtual repo of npm-dev-local and npm-remote-cache.

npm-sandbox: use to develop and test without affecting other developers.

docker-local: this is where the applications are deployed; includes version information.
    * <version number>_<shaw>
    * 3.0.8_955c561

    * .npmrc file setup
    * https://artifactory.pinnacol.com/artifactory/webapp/#/home


npm-development | setup

```text
_auth = dmF1Z2hubTpBUDdBYm4zM1plTnpzdmhHZUczVWZQTTloYjg=
email = matt.vaughn@pinnacol.com
always-auth = true
```

* Code Review of Monorepo/Workspace
    * environments
        * appKey, authorization URL, appAPIPath, baseAPIUrl, etc.

## #4 August 3,2018

* review portals with Carla
    * policy holder
    * certificates
    * introduction to api team;
* developer workflow review with Emily