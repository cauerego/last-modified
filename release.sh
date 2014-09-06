#!/bin/sh
mkdir release

cp manifest.json release
cp icon* release
cp main* release
cp screenshot*.png release

zip -r release.zip release

rm -r release
