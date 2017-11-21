#!/bin/bash

set -ex

GENERATE_RESPONSE_JSON=$(curl -X POST -H "content-type:application/json" -d '{
    "spec": {},
    "options": {
        "usePromises": true,
        "useES6": true
    },
    "swaggerUrl":"https://nlu.playground.feersum.io/nlu/v2/swagger.json"
}' https://generator.swagger.io/api/gen/clients/javascript)
JSON_CLIENT_ZIPPED=$(echo $GENERATE_RESPONSE_JSON | jq -r .link)
curl $JSON_CLIENT_ZIPPED -o client.zip
unzip client.zip
rm -rf docs/ src/ test/
mv javascript-client/* .
rm client.zip
