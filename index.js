import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('combined', {
    stream: {
        write: (message) => {
            console.log(JSON.stringify({ message: message.trim() }));
        },
    },
}));

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item não encontrado' });
    res.json(item);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item não encontrado' });
    item.name = req.body.name;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).json({ message: 'Item não encontrado' });
    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem[0]);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

export default app;
