 import { Producto } from '../modelsSimulados/producto.model.js';

 const productos = [
  new Producto({
    id: 1,
    nombre: 'Agua Cristal 600ml',
    descripcion: 'Agua embotellada sin gas',
    codigo: '770999099',
    precioVenta: 2500,
    precioCompra: 1800,
    stock: 30,
    unidadMedida: 'unidad',
    categoria: 'bebidas'
  }),
  new Producto({
    id: 2,
    nombre: 'Galletas Festival',
    codigo: '770999100',
    precioVenta: 1500,
    precioCompra: 1000,
    stock: 50,
    categoria: 'snacks'
  })
];

export default productos;
