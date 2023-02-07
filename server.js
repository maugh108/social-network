const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

//conexión a mongoose ¿porqué con localhost no funciona? preguntar en clase
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetwork', {
  useFindAndModify: false,
  useNewUrlParser: true,
});

// Log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`now listening on localhost:${PORT}`));