import { ProductCard } from "../components/products/ProductCard";
import { productsData } from "../data/productsData";
import Section from "../components/ui/Section";
import { ShoppingCart } from "lucide-react";

export const Products = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <Section title="Available Products" align="center">
        <div className="grid md:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </div>
  );
};
