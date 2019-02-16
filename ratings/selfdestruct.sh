#!/bin/sh
# Run this script to clean your react-native environment if it's giving you
# "Unable to resolve module" problems.
DIR="$( cd "$( dirname "$0" )" && pwd )"
cd $DIR
rm -rf node_modules/
rm -rf android/build android/app/build
rm -rf ios/build
yarn install
cd android && ./gradlew cleanBuildCache && cd ..
watchman watch-del-all
rm -rf $TMPDIR/react-*
yarn start --reset-cache
