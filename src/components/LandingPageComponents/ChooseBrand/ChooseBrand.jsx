import BrandCard from '../../BrandCard/BrandCard'
import './ChooseBrand.css'
const ChooseBrand = () => {

  const brandsArray = [
    { id: 1, name: 'Samsung', img: 'https://i.gadgets360cdn.com/products/televisions/large/1548154796_832_samsung_40-inch-led-ultra-hd-4k-tv-ua40mu6100klxl.jpg' },
    { id: 2, name: 'Apple', img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-finish-select-202207-purple_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1662150034211' },
    { id: 3, name: 'Sony', img: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/E1ERbu5WUAATC54-photoutils.com_-scaled.jpeg?ssl=1&quality=80&w=f' },
    { id: 4, name: 'Nike', img: 'https://www.highsnobiety.com/static-assets/thumbor/nI3VcQHauvbw62L6WpDwSXoTS3A=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/02/12163548/air-jordan-1-university-blue-release-info-02.jpg' },
    { id: 5, name: 'Dyson', img: 'https://rukminim1.flixcart.com/image/850/1000/l3ahpjk0/vacuum-cleaner/w/8/y/omni-glide-dyson-original-imagegfrdj5wf8hu.jpeg?q=90' },
    { id: 6, name: 'Adidas', img: 'https://yt3.googleusercontent.com/7rR9lmy7LlKH--10O_sS8ITz6Fm84FrvMHY7GHS4dD8jZSM-3RE0LA9dTV5jRL7ukPWL5B2j=s900-c-k-c0x00ffffff-no-rj' },

  ]

  return (
    <div className="brand">
      <div className="brand-text">
        Choose By Brand
      </div>
      <div className="brand-container">
        <div className="brand-cards">
          {brandsArray.map((brand) => <BrandCard key={brand.id} name={brand.name} img={brand.img} />)}
        </div>
      </div>
    </div>
  )
}

export default ChooseBrand