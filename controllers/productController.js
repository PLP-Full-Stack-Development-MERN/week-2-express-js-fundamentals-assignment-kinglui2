const products = []; // Array to hold products

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const newProduct = req.body;

    // Validate required fields
    if (!newProduct.name || !newProduct.price) {
        return res.status(400).json({ error: "Name and price are required" });
    }

    products.push(newProduct);
    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    
    // Validate ID
    if (isNaN(id) || id < 0 || id >= products.length) {
        return res.status(400).json({ error: "Invalid product ID" });
    }

    const updatedProduct = req.body;
    products[id] = updatedProduct;
    res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    
    // Validate ID
    if (isNaN(id) || id < 0 || id >= products.length) {
        return res.status(400).json({ error: "Invalid product ID" });
    }

    products.splice(id, 1);
    res.status(204).send();
};
