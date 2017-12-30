echo 'Welcome to KM QNA UI  Test Build Deployy (development)'
cd QnA-UI
(npm run setlocalregistry)&&(npm run installmodules)&&(npm run deploy:build-dev)
