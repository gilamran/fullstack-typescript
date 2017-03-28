import * as express from 'express';
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World2!');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!')
});
