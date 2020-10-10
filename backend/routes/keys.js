const router = require('express').Router();
let Key = require('../models/key.model');

router.route('/').get((req, res) => {
  Key.find()
    .then(keys => res.json(keys))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const key = req.body.key;

  const newKey = new Key({
    username,
    key,
  });

  newKey.save()
    .then(() => res.json('Key added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Key.findById(req.params.id)
    .then(key => res.json(key))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Key.findByIdAndDelete(req.params.id)
    .then(() => res.json("Key deleted!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Key.findById(req.params.id)
    .then(key => {
      key.username = req.body.username;
      key.key = req.body.key;

      key.save()
        .then(() => res.json("Key updated!"))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;