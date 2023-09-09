const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: 'Travlr Getaways'});
};

module.exports = {
    news
}