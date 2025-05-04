const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let movies = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        stars: ["Tim Robbins", "Morgan Freeman"],
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        stars: ["Marlon Brando", "Al Pacino"],
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        stars: ["Christian Bale", "Heath Ledger"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    }
];

app.get('/api/Movies', (req, res) => {
    res.json(movies);
});

app.get('/api/Movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < movies.length) {
        res.json(movies[id]);
    } else {
        res.status(404).json({ message: "Movie tidak ditemukan" });
    }
});

app.post('/api/Movies', (req, res) => {
    const { title, director, stars, description } = req.body;
    if (title && director && stars && description) {
        movies.push({ title, director, stars, description });
        res.status(201).json({ message: "Movie berhasil ditambahkan", movies });
    } else {
        res.status(400).json({ message: "Data movie tidak lengkap" });
    }
});

app.delete('/api/Movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < movies.length) {
        const deleted = movies.splice(id, 1);
        res.json({ message: "Movie berhasil dihapus", deleted });
    } else {
        res.status(404).json({ message: "Movie tidak ditemukan" });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});