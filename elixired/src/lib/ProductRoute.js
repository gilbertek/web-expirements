class ProductRoute {
  constructor(arg = {}) {
    Object.assign(this, {
      route_abbr:        arg.route_abbr,
      route_code:        arg.route_code,
      route_description: arg.route_description
    });
  }
}

export default ProductRoute;
