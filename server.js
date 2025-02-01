import http from "http";

const PORT = 3000;

const routes = {
    "/": "First route in Node.Js",
    "/books": "Book's route",
    "/authors": "Author's route",
};

const server = http.createServer((req, res) => {
    //writeHead => para criar o cabeçalho da requisição
    res.writeHead(200, { "Content-Type": "text/plain" });

    // res.end(routes[req.url]); => req.url ->
    res.end(routes[req.url]);
});

// 3000 é a porta a ser usado, depois precisa de uma arrow function
server.listen(PORT, () => {
    console.log("Servidor escutando");
});
