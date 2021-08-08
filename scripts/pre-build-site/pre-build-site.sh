npm run build:package

npm pack
UI_PACKAGE_NAME=$(ls | grep data-view-naive)
tar -xzvf $UI_PACKAGE_NAME
mv package node_modules/data-view-naive
rm $UI_PACKAGE_NAME
