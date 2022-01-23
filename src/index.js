const { App } = require("./app")

const app = new App();

app.use((req, res) => {
    console.info("coucou")
})

app.get("/", (req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
})

app.post("/test", async (req, res) => {
    const chunks = [];

    for await (const chunk of req) {
        chunks.push(chunk);
    }

    const json = JSON.parse(Buffer.concat(chunks).toString())

    console.info(json)

    // Produce json
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ hello: "World" }));
})

app.start(8080)
