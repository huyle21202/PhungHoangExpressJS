import express,{Express} from "express";
const authRoute = require('./routes/auth');
const app:Express = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Hello World ExpressJS! dhjsdhjsjdhsjdh')
})

app.use('/auth', authRoute);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})