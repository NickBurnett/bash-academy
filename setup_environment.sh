echo 'Setting up development environment...'
echo 'Installing backend dependencies...'
cd backend && npm install 1>/dev/null && cd ..
echo 'Installing frontend dependencies...'
cd frontend && npm install 1>/dev/null && cd ..
echo 'Installing runtime dependencies...'
npm install