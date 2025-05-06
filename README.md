# Mercdev Finance App

## Get started

1. Install node https://nodejs.org/en/ and yarn https://yarnpkg.com/

2. Install project dependencies:
    ```shell script
    # install node modules
    yarn install
    ```
3. Run app in dev mode
    ```shell script
   # [optional] you can change port of node server to PORT_NUMBER=0..65535
   export PORT=PORT_NUMBER
   
    # run node server with app
   yarn start   
    ```
## Develop
1. Pull the latest changes from `develop`.
2. Create your feature branch `feature/*`, where short task description should be used in place of *.
3. Do several commits during development.
    - Use git message convention http://karma-runner.github.io/4.0/dev/git-commit-msg.html to keep project history clean and smooth. 
4. When the code is ready, merge the latest changes from `develop` into your branch and resolve merge conflicts if there are any. 
5. Push your branch to the remote.
6. Go to https://gitlab.com/markov3/mercdev-finance-app/-/merge_requests and create merge request from your branch to `develop`.
    - Use the same naming convention for merge requests and commits.
    - If you want to share the code that is not ready yet (work in progress), use the `WIP` prefix before the merge request name.
    - Select "Squash commits" and "Remove source branch" options.