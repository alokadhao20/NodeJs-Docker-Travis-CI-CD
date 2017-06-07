REGISTRY_ORGANISATION=aloka
REGISTRY_USERNAME=aloka
REGISTRY_PASSWORD=noguess21
IMAGE_VERSION=v-${SHORT_COMMIT_ID}
repositoryName=$(echo $REPOSITORY_NAME | tr '[:upper:]' '[:lower:]')
echo "Generated docker repository name: $repositoryName"
echo "Image name will be: $REGISTRY_ORGANISATION/$repositoryName:$IMAGE_VERSION"
echo "Logging into dockerhub..." \
&& docker login --username="$REGISTRY_USERNAME" --password="$REGISTRY_PASSWORD" \
&& echo "Producing docker image from build..." \
&& docker build -t $REGISTRY_ORGANISATION/$repositoryName:latest -t $REGISTRY_ORGANISATION/$repositoryName:$IMAGE_VERSION . \
&& docker images \
&& echo "Pushing image to dockerhub..." \
&& docker push $REGISTRY_ORGANISATION/$repositoryName:$IMAGE_VERSION