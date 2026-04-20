import Card from "../ui/Card";
import Button from "../ui/Button";

export const ProductCard = ({ product }) => {
  return (
    <Card className="hover:shadow-md transition flex flex-col">
      <div>
        {/* Product Name */}
        <h3 className="text-lg font-display font-semibold">{product.name}</h3>

        {/* Description */}
        <p className="text-sm text-muted mt-2 font-body">
          {product.description}
        </p>

        {/* Price */}
        <p className="mt-4 font-body font-medium text-foreground">
          {product.price}
        </p>
      </div>

      {/* Action Button pinned at bottom */}
      <Button className="mt-auto w-full">Add to Cart</Button>
    </Card>
  );
};
