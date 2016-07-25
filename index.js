import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.get('/health', (req, res) => {
  res.json({
    health: 'OK'
  })
});

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.render('index');
});

let port = process.env.PORT || 12345;
app.listen(port, (err) => {
  if (err) return console.log(`Error starter server : ${err}`);
  console.log(`Server is listening at port ${port}`)
});
