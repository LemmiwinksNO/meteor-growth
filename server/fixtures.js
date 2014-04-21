// Fixture data
if (db.focuses.find().count() === 0) {
  var now = new Date();

  // Create user
  var userId = Accounts.createUser({
    'email' : 'macreasy@gmail.com',
    'password': '123456'  // encrypted automatically
  });

  // Insert 3 focuses
  var primalId = db.focuses.insert({
    title: "Primal Supple Leopard",
    userId: userId,
    imageUrl: "/snow-leopard.jpg",
    why: "For suppleness!"
  });
  var programmerId = db.focuses.insert({
    title: "Pragmatic Programmer",
    userId: userId,
    imageUrl: "/forestApple.jpg",
    why: "Building things feels good.\nUsefulness - Create things that add value\nMoney"
  });
  var elephantId = db.focuses.insert({
    title: "Elephant Rider",
    userId: userId,
    imageUrl: "/buddha-riding-elephant.jpg",
    why: "Think more effectively and creatively.\nIncrease presence."
  });

  // Insert 3 tasks for each focus
  db.tasks.insert({
    title: "Primal Task!",
    focusId: primalId,
    userId: userId,
    completed: false,
    created: now - 1 * 24 * 3600 * 1000,
  });
  db.tasks.insert({
    title: "Primal Task!",
    focusId: primalId,
    userId: userId,
    completed: false,
    created: now - 3 * 24 * 3600 * 1000,
  });
  db.tasks.insert({
    title: "Primal Task!",
    focusId: primalId,
    userId: userId,
    completed: false,
    created: now - 7 * 24 * 3600 * 1000,
  });

  db.tasks.insert({
    title: "Programming Task!",
    focusId: programmerId,
    userId: userId,
    completed: false,
    created: now - 1 * 24 * 3600 * 1000,
  });
  db.tasks.insert({
    title: "Programming Task!",
    focusId: programmerId,
    userId: userId,
    completed: false,
    created: now - 3 * 24 * 3600 * 1000,
  });
  db.tasks.insert({
    title: "Programming Task!",
    focusId: programmerId,
    userId: userId,
    completed: false,
    created: now - 7 * 24 * 3600 * 1000,
  });

  db.tasks.insert({
    title: "Elephant Rider Task!",
    focusId: elephantId,
    userId: userId,
    completed: false,
    created: now - 1 * 24 * 3600 * 1000,
  });
  db.tasks.insert({
    title: "Elephant Rider Task!",
    focusId: elephantId,
    userId: userId,
    completed: false,
    created: now - 3 * 24 * 3600 * 1000,
  });
  db.tasks.insert({
    title: "Elephant Rider Task!",
    focusId: elephantId,
    userId: userId,
    completed: false,
    created: now - 7 * 24 * 3600 * 1000,
  });
}