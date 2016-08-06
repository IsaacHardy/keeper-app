import Keeper from '../models/keeper';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all keepers
 * @param req
 * @param res
 * @returns void
 */
export function getKeepers(req, res) {
  Keeper.find().sort('-dateAdded').exec((err, keepers) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ keepers });
  });
}

/**
 * Save a keeper
 * @param req
 * @param res
 * @returns void
 */
export function addKeeper(req, res) {
  if (!req.body.keeper.name || !req.body.keeper.round) {
    res.status(403).end();
  }

  const newKeeper = new Keeper(req.body.keeper);

  // Let's sanitize inputs
  newKeeper.name = sanitizeHtml(newKeeper.name);
  newKeeper.round = sanitizeHtml(newKeeper.round);

  newKeeper.cuid = cuid();
  newKeeper.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ keeper: saved });
  });
}

/**
 * Get a single keeper
 * @param req
 * @param res
 * @returns void
 */
export function getKeeper(req, res) {
  Keeper.findOne({ cuid: req.params.cuid }).exec((err, keeper) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ keeper });
  });
}

/**
 * Delete a keeper
 * @param req
 * @param res
 * @returns void
 */
export function deleteKeeper(req, res) {
  Keeper.findOne({ cuid: req.params.cuid }).exec((err, keeper) => {
    if (err) {
      res.status(500).send(err);
    }

    keeper.remove(() => {
      res.status(200).end();
    });
  });
}
