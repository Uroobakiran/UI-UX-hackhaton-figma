import Image from "next/image";

const ProductCard = (props: { image: string; title: string; price?: number }) => {
  const { image, title, price } = props;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <Image
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        width={256}
        height={256}
        quality={80}
        priority={false}
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {price && <p className="text-gray-600 mt-2">Rs. {price.toLocaleString()}</p>}
        <button className="mt-4 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
