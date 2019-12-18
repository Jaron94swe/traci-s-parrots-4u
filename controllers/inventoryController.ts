import db from "../models";
import sequelize from "sequelize"
const Op = sequelize.Op
// Routes
// =============================================================
export default function (app) {
  // Get route for returning posts of a specific category
  app.get("/api/products/", function (req, res) {
    console.log("this is my end point")
    db.Inventory.findAll({
      where: {
        quantity: {
          [Op.gt]: 0
        }
      }
    })
      .then(function (dbInventory) {
        res.json(dbInventory);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    console.log(req.body);
    db.Inventory.create({
      item: req.body.item,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      imageUrl: req.body.imageUrl
    })
      .then(function (dbInventory) {
        res.json(dbInventory);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Inventory.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbInventory) {
        res.json(dbInventory);
      });
  });

  // PUT route for updating posts
  app.put("/api/products", function (req, res) {
    db.Inventory.update(req.body,
      {
        where: {
          [Op.gt]: [{ quantity: 0 }]
        }
      })
      .then(function (dbInventory) {
        res.json(dbInventory);
      });
  });
};
