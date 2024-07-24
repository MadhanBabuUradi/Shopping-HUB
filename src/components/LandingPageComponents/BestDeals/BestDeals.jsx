import ProductCard from '../../ProductCard/ProductCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './BestDeals.css'
const BestDeals = () => {
    // const breakPoints = [
    //     { width: 1, itemsToShow: 2 },
    //     { width: 550, itemsToShow: 3 },
    //     { width: 768, itemsToShow: 4 },
    //     { width: 1200, itemsToShow: 5 }
    //   ];

    const settings = {
      items: 4, 
      mouseTrackingEnabled: true,
      infinite: true, 
      showArrows: false,
      responsive: {
        0: { items: 2 }, 
        690:{items:3},
        900: { items: 4 },
        1100: { items: 5 },
      },
    };

      const BestDealsArray = [
        {
          id: 1,
          name: 'Canon Camera',
          description: 'Canon Camera with 50% off',
          rating: 120,
          img: 'https://www.zdnet.com/a/img/resize/8772c5255eb7b45ef14b7cc9eccb568e4be03969/2023/05/16/145bd0b5-77dc-44d2-b950-37d2a6beb8d3/canon-eos.jpg?auto=webp&fit=crop&height=900&width=1200',
          price: '1000',
        },
        {
          id: 2,
          name: 'Apple iPhone 12',
          description: 'Latest iPhone with advanced features',
          rating: 95,
          img: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-finish-select-202207-purple_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1662150034211',
          price: '1200',
        },
        {
          id: 3,
          name: '4K Smart TV',
          description: 'High-quality smart TV for immersive entertainment',
          rating: 78,
          img: 'https://i.gadgets360cdn.com/products/televisions/large/1548154796_832_samsung_40-inch-led-ultra-hd-4k-tv-ua40mu6100klxl.jpg',
          price: '1500',
        },
        {
          id: 4,
          name: 'Sony PlayStation 5',
          description: 'Next-generation gaming console',
          rating: 102,
          img: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/E1ERbu5WUAATC54-photoutils.com_-scaled.jpeg?ssl=1&quality=80&w=f',
          price: '499',
        },
        {
          id: 5,
          name: 'Air Jordan Shoes',
          description: 'Classic basketball shoes with premium quality',
          rating: 64,
          img: 'https://www.highsnobiety.com/static-assets/thumbor/nI3VcQHauvbw62L6WpDwSXoTS3A=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/02/12163548/air-jordan-1-university-blue-release-info-02.jpg',
          price: '150',
        },
        {
          id: 6,
          name: 'Dyson Vacuum Cleaner',
          description: 'Powerful and efficient vacuum cleaner',
          rating: 83,
          img: 'https://rukminim1.flixcart.com/image/850/1000/l3ahpjk0/vacuum-cleaner/w/8/y/omni-glide-dyson-original-imagegfrdj5wf8hu.jpeg?q=90',
          price: '299',
        },
        {
          id: 7,
          name: 'Amazon Echo Dot',
          description: 'Smart speaker with Alexa voice assistant',
          rating: 122,
          img: 'https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.fit_scale.size_760x427.v1601313845.jpg',
          price: '49',
        },
        {
          id: 8,
          name: ' Stand Mixer',
          description: 'Versatile kitchen appliance for baking and cooking',
          rating: 95,
          img: 'https://hips.hearstapps.com/hmg-prod/images/gh-121721-best-stand-mixers-1639690990.png?crop=1.00xw:0.773xh;0,0.182xh&resize=1200:*',
          price: '30',
        },
        {
          id: 9,
          name: 'Fitbit Smartwatch',
          description: 'Fitness tracker with heart rate monitoring',
          rating: 76,
          img: 'https://limton.co.in/wp-content/uploads/2022/01/FITBIT-Versa-3-Smartwatch.jpg',
          price: '199',
        },
        {
          id: 10,
          name: 'Bose Headphones',
          description: 'Premium noise-canceling headphones',
          rating: 108,
          img: 'https://www.soundguys.com/wp-content/uploads/2021/04/bose-noise-cancelling-headphones-700-product-image-format.jpg',
          price: '60',
        },
      ];
      
  return (
    <div>
        <div className='text-best-deals'>
            Best Deals For You!
        </div>
        <div className='carousel'>
    
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          autoPlayInterval={2000}
          buttonsDisabled={true}
          dotsDisabled={false}
          showArrows={false}
          disableButtonsControls={true}
          responsive={settings.responsive}
        >
          {BestDealsArray.map((item) => (
            <ProductCard key={item.id} id={item.id*1000} name={item.name} img={item.img} description={item.description} price={item.price} rating={item.rating}/>
          ))}
        </AliceCarousel>

        </div>
    </div>
  )
}

export default BestDeals