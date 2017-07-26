class ProductStrength {
  constructor(arg = {}) {
    Object.assign(this, {
      product_strength_code:        arg.product_strength_code,
      product_strength_description: arg.product_strength_description
    });
  }
}

export default ProductStrength;

