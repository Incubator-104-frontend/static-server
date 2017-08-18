function apiIndexController(req, res) {
    const result = {hello: 'world'};
    res.send(result);
}

module.exports = apiIndexController;