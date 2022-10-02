// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Category.belongsTo(Product, {

// });

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  // as: 'products_category',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: true,
  },
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: true,
  },
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
