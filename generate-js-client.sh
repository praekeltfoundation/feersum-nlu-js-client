#!/bin/bash

set -ex

GENERATE_RESPONSE_JSON=$(curl -X POST -H "content-type:application/json" -d '{"swaggerUrl":"https://nlu.playground.feersum.io/nlu/v2/swagger.json"}' https://generator.swagger.io/api/gen/clients/javascript)
JSON_CLIENT_ZIPPED=$(echo $GENERATE_RESPONSE_JSON | jq -r .link)
curl $JSON_CLIENT_ZIPPED -o client.zip
unzip -d . client.zip
mv javascript-client/* .
rm client.zip

