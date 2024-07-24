import './ProductListing.css'
import FilterSection from '../../components/ProductPage/FliterSection/FilterSection'
import ProductList from '../../components/ProductPage/ProductsList/ProductsList'

const ProductListing = () => {
  return (
    <>
        <div className="product-listing-page-containe">
          <FilterSection/>
          <ProductList/>
        </div>
    </>
  )
}

export default ProductListing
