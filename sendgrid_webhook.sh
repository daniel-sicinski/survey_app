function localtunnel {
  lt -s 2u4fn3i4ufnw --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done