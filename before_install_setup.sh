#!/bin/bash
setupNpmrc () {
    echo "setting up .netrc file echo-------"
    echo $TRAVIS_COMMIT
    echo $GIT_USER_TOKEN
    export COMMIT_MESSAGE=$(git show -s --format=%B $TRAVIS_COMMIT | tr -d '\n')
}

# 1. GitHub and NPMJS tokens
setupNpmrc