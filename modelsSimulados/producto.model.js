export class Producto {
  constructor({
    id,
    nombre,
    descripcion = '',
    codigo,
    precioVenta,
    precioCompra = 0,
    stock = 0,
    unidadMedida = 'unidad',
    categoria = 'general',
    activo = true,
    createdAt = new Date(),
    updatedAt = new Date()
  }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.codigo = codigo;
    this.precioVenta = precioVenta;
    this.precioCompra = precioCompra;
    this.stock = stock;
    this.unidadMedida = unidadMedida;
    this.categoria = categoria;
    this.activo = activo;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

// module.exports = Producto;
