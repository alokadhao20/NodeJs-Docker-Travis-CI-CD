#!/bin/bash
installSetup () {
    echo $TRAVIS_COMMIT
    echo $GIT_USER_TOKEN
    echo $COMMIT_MESSAGE
    echo $REPOSITORY_NAME
    echo $SHORT_COMMIT_ID
}


installSetup