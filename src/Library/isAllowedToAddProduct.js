export function isAllowedToAddProduct({ id, quantity }, cartItems) {
  const foundProduct = cartItems.find((item) => item.product_id === id);
  const _quantity = foundProduct ? foundProduct.quantity : 0;
  return _quantity < quantity;
}
