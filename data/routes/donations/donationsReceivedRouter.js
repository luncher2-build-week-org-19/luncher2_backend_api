const { express } = require("../../../configMiddleware/configMW.js");
const { protected, checkRole } = require("../../middleware/protectedMW.js");

const donatedDb = require("../../helpers/donationsReceivedDb.js");
const router = express.Router();

router.get("/all", (req, res) => {
    donatedDb
        .getAllDonated()
        .then(donated => {
            res.status(200).json(donated);
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});

module.exports = router;
