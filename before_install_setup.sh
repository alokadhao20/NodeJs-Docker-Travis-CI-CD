#!/bin/bash
setupNpmrc () {
    echo "setting up .netrc file echo-------"
    echo $TRAVIS_COMMIT
    echo $GIT_USER_TOKEN
    export COMMIT_MESSAGE=$(git show -s --format=%B $TRAVIS_COMMIT | tr -d '\n')
	export REPOSITORY_NAME=$(echo $TRAVIS_REPO_SLUG | gawk -F/ '{print $2}')
	export SHORT_COMMIT_ID=${TRAVIS_COMMIT:0:8}
}

# 1. GitHub and NPMJS tokens
setupNpmrc