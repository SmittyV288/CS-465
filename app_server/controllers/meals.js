const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: 'Travlr Getaways'});
};

module.exports = {
    meals
}