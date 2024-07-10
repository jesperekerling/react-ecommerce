
import PropTypes from 'prop-types';
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
  })).isRequired,
};

const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
      <div className="bg-gray-300/50 rounded-lg animate-pulse aspect-square" />
    </div>
  );
};

ProductListSkeleton.displayName = 'ProductListSkeleton';