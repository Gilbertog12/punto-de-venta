import z from 'zod'

const productSchema = z.object({
  
    nombre: z.string({
          invalid_type_error: 'nombre must be a string',
    required_error: 'nombre is required.'
    }),
    descripcion : z.string(),
    codigo: z.number(),
    precioVenta:z.number(),
    precioCompra :z.number(),
    stock :z.number(),
    unidadMedida : z.string(),
    categoria : z.string(),
    activo : z.boolean(),
     createdAt: z.string().datetime().transform((str) => new Date(str)),
  updatedAt: z.string().datetime().transform((str) => new Date(str))
  
})

export function validateProduct (input) {
  return productSchema.safeParse(input)
}

export function validatePartialProduct (input) {
  return productSchema.partial().safeParse(input)
}