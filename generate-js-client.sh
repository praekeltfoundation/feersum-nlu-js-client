#!/bin/bash

set -ex
shopt -s dotglob

GENERATE_RESPONSE_JSON=$(curl -X POST -H "content-type:application/json" -d '{
    "spec": {},
    "options": {
        "usePromises": true,
        "useES6": false
    },
    "swaggerUrl":"https://raw.githubusercontent.com/praekelt/feersum-nlu-api-wrappers/master/spec/swagger.yaml"
}' https://generator.swagger.io/api/gen/clients/javascript)
JSON_CLIENT_ZIPPED=$(echo $GENERATE_RESPONSE_JSON | jq -r .link)
curl $JSON_CLIENT_ZIPPED -o client.zip
unzip client.zip
rm -rf docs/ src/ test/
mv javascript-client/* .
rmdir javascript-client
rm client.zip
