// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`--------------Now listening on PORT ${PORT}-----------------`)
  );
});
