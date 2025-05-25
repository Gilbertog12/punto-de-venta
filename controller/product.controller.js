import productos from '../fakeData/productos.js';
import { randomUUID } from 'node:crypto'
import { validateProduct } from '../schemas/product.schema.js';

export class productController{

static getProducts(req,res){

    res.status(200).json(productos)

}
static getProductById(req,res){

    const { id } = req.params
    console.log( typeof id)
    const product =  productos.findIndex(product =>  product.id === parseInt(id))
    // console.log(product);
    if( product === -1) {

        res.status(404).json({message: "Product not found!"})
    }

    res.status(200).json(productos[product])

}

static createProduct(req,res){
    const result = validateProduct(req.body)

    if (!result.success) {
    // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newProduct = {
        id : randomUUID(),
        ...req.body
    }

    productos.push(newProduct)

    res.status(201).json(newProduct)
}

}