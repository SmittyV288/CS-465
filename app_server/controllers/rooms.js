const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: 'Travlr Getaways'});
};

module.exports = {
    rooms
}