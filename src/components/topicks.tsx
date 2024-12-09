import ProductCard from "@/components/cart";

const TopPicks = () => {
  return (
    <div className="px-4 sm:px-8 py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Picks For You</h2>
        <p className="text-gray-600 mt-4">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard image="/img/cart1.png" title="Outdoor Bar Table" price={30000} />
        <ProductCard image="/img/cart2.png" title="Dining Chair" price={15000} />
        <ProductCard image="/img/cart3.png" title="Console Table" price={10000} />
        <ProductCard image="/img/cart4.png" title="Sofa Set" price={50000} />
      </div>
    </div>
  );
};

export default TopPicks;
