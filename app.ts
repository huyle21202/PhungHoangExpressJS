import express,{Express} from "express";
const authRoute = require('./routes/auth');
const testRoute = require('./routes/test');
const productRoute = require('./routes/product');
const brandRoute = require('./routes/brand');
const groupRoute = require('./routes/group');
const app:Express = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello World ExpressJS! dhjsdhjsjdhsjdh')
})

app.use('/auth', authRoute);
app.use('/test', testRoute);
app.use('/product', productRoute);
app.use('/brand', brandRoute);
app.use('/group', groupRoute);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})