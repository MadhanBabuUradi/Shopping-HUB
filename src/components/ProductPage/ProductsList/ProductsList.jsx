import { useSelector } from 'react-redux';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './ProductsList.css';

const ratingSystem = {
  'less': [0, 70],
  'average': [70, 170],
  'high': [170, 10000],
  'all': [0, 10000]
};

const ProductListing = () => {

  const Categories = useSelector((state) => state.productlist.value);
  const categoryFilterArray = useSelector((state) => state.categoryFilter.value);
  const selectedPrice = useSelector((state) => state.priceFilter.value);
  const selectedRating = useSelector((state) => state.ratingFilter.value);

  return (
    <div className='product-listing-section'>
      <div className='heading'>ProductListing</div>
      <div className='cards-grid'>
        {Categories.map((category) => (
          categoryFilterArray.includes(category.name) &&
          category.products.map((product) => {
            const [minRating, maxRating] = ratingSystem[selectedRating];
            console.log(minRating, maxRating);
            if (
              (product.price <= selectedPrice || selectedPrice === 500 && product.price >= 500) &&
              (minRating <= product.rating && product.rating <= maxRating)
            ) {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  img={product.img}
                  description={product.description}
                />
              );
            } else {
              return null;
            }
          })
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
