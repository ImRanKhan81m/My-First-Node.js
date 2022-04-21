
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Loook Mamaaa!!!! I can code Node Now!!!!')
});


const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017889347894' },
    { id: 2, name: 'Mahmud', email: 'Mahmud@gmail.com', phone: '017889347894' },
    { id: 3, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '017889347894' },
    { id: 4, name: 'Kabila', email: 'Kabila@gmail.com', phone: '017889347894' },
    { id: 5, name: 'Sraboni', email: 'Sraboni@gmail.com', phone: '017889347894' },
    { id: 6, name: 'Sakib khan', email: 'Sakibkhan@gmail.com', phone: '017889347894' },
    { id: 7, name: 'Sabila', email: 'Sabila@gmail.com', phone: '017889347894' },
    { id: 8, name: 'Suhana', email: 'Suhana@gmail.com', phone: '017889347894' },
]
app.get('/user', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    } else {
        res.send(users);
    }

})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour soud fazle flaber')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})