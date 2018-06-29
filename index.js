import express from 'express';
import data from './data/data.json'
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) =>
{
   res.json(data);
});

app.get('/item/:id', (req, res) =>
{
  console.log(req.params.id);
  let user = Number(req.params.id);
  console.log(`${user}`);
  console.log(data[user]);
  res.send(data[user]);
  

  
});

app.post('/newItem', (req, res) =>
{
    res.send("Thanks for sending POST request to /newItem");
});

app.put('/item', (req, res) =>
{
    res.send("Thanks for sending PUT request to /item");
});

app.delete('/item', (req, res) =>
{
    res.send("Thanks for sending DELETE request to /item");
});



app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}`);
    console.log(data);

})