docker rm -f airlines
docker rmi airlines
docker build -t airlines .
docker run --rm -d --name airlines -p 3000:80 airlines

echo ">>>> App Running On http://localhost:3000 🚀"