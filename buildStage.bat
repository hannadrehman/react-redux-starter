echo 'Welcome to KM QNA UI Test Deploy  Build (Stage/production)'
cd QnA-UI
(npm run setlocalregistry)&&(npm run installmodules)&&(npm run deploy:build-prod)
