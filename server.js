app.get('/blogs/infos/:slug', (req, res) => {
  res.redirect(301, `/blog/infos/${req.params.slug}`);
}); 