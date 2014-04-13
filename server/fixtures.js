// Fixture data
if (db.focuses.find().count() === 0) {
  var now = new Date().getTime();

  // Insert 3 focuses
  var primalId = db.focuses.insert({
    title: "Primal Supple Leopard",
    imageUrl: "/snow-leopard.jpg"
  });
  var programmerId = db.focuses.insert({
    title: "Pragmatic Programmer",
    imageUrl: "/forestApple.jpg"
  });
  var elephantId = db.focuses.insert({
    title: "Elephant Rider",
    imageUrl: "/buddha-riding-elephant.jpg"
  });

  // Insert 3 tasks for each focus
  db.tasks.insert({
    focusId: primalId,
    title: "Primal Task!",
    completed: false,
  });
  db.tasks.insert({
    focusId: primalId,
    title: "Primal Task!",
    completed: false,
  });
  db.tasks.insert({
    focusId: primalId,
    title: "Primal Task!",
    completed: false,
  });

  db.tasks.insert({
    focusId: programmerId,
    title: "Programming Task!",
    completed: false,
  });
  db.tasks.insert({
    focusId: programmerId,
    title: "Programming Task!",
    completed: false,
  });
  db.tasks.insert({
    focusId: programmerId,
    title: "Programming Task!",
    completed: false,
  });

  db.tasks.insert({
    focusId: elephantId,
    title: "Elephant Rider Task!",
    completed: false,
  });
  db.tasks.insert({
    focusId: elephantId,
    title: "Elephant Rider Task!",
    completed: false,
  });
  db.tasks.insert({
    focusId: elephantId,
    title: "Elephant Rider Task!",
    completed: false,
  });
}