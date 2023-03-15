const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const users = require('./users.json')

const server = http.createServer(async (req, res) => {
    if (req.url == '/' && req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        var obj = {
            name: 'Zaheer',
            department: 'Software Engineering'
        }
        res.end(JSON.stringify(obj));
    } else if (req.url == '/users' && req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users));
    } else if (req.url.match(/\/users\/([0-9])/) && req.method == 'GET') {
        let userid = req.url.split('/')[2];
        res.writeHead(200, { 'Content-Type': 'application/json' })
        let user = users.find(u => u.id == userid)
        res.end(JSON.stringify(user));
    } else if (req.url == '/users' && req.method == 'POST') {

        const getData = () => {
            return new Promise((resolve, reject) => {
                try {
                    let body = "";
                    // listen to data sent by client
                    req.on("data", (chunk) => {
                        // append the string version to the body
                        body += chunk.toString();
                    });
                    // listen till the end
                    req.on("end", () => {
                        // send back the data
                        resolve(body);
                    });
                } catch (error) {
                    reject(error);
                }
            });
        }

        let body = await getData();
        
        // console.log(body)
        // let usersNew = users.push(JSON.parse(body))

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(JSON.parse(body)));
    } else {
        res.end(`Route ${req.url} with ${req.method} method does not exist!`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
