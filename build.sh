failed() {
    echo 'Build failed, aborting...'
    exit
}
echo 'Starting build...'
rm -rf build
echo 'Cleaned build folder...'
echo 'Building project...'
cd 'frontend'
echo 'Building frontend...'
npm run build 1> /dev/null || failed
cd '../backend'
echo 'Building backend...'
npm run build 1> /dev/null || failed
echo 'Build succeeded...'
