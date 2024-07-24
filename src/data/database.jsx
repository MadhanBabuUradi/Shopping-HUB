
const Categories = [
      {
        "id": 1,
        "name": "Electronics",
        "img": "https://cdn.mos.cms.futurecdn.net/BwSR4PFK3i5ZyhFEmZUBMS-1200-80.jpg",
        "products": [
          {
            "id": 1,
            "name": "Canon Camera",
            "description": "Canon Camera with 50% off",
            "rating": 120,
            "img": "https://media.takealot.com/covers_images/e6b127fd49164812bf517f9d316f49e2/s-xlpreview.file",
            "price": 1000
          },
          {
            "id": 2,
            "name": "Apple iPhone 13",
            "description": "The latest iPhone from Apple",
            "rating": 200,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4j_T_sSI3OL0vZ0xSF68RYa1CUt7O89r8Q&usqp=CAU",
            "price": 1200
          },
          {
            "id": 3,
            "name": "Samsung 4K Smart TV",
            "description": "High-quality 4K smart TV from Samsung",
            "rating": 180,
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJXyUki7Yli1dmQJZqVZQcVBB-wqYQzAEXhp3_ZjttKlZKwB7x8ReGy-IdSDXNH5audc&usqp=CAU",
            "price": 1500
          },
          {
            "id": 4,
            "name": "DJI Mavic Air 2",
            "description": "Advanced drone with 4K camera",
            "rating": 150,
            "img": "data:image/jpeg;base64,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",
            "price": 900
          },
          {
            "id": 5,
            "name": "Sony Noise Cancelling Headphones",
            "description": "Premium noise-canceling headphones",
            "rating": 120,
            "img": "data:image/jpeg;base64,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",
            "price": 250
          },
          {
            "id": 6,
            "name": "Xbox Series X",
            "description": "Next-gen gaming console from Microsoft",
            "rating": 170,
            "img": "https://i.insider.com/5df3a1aafd9db259783fbd2a?width=1200&format=jpeg",
            "price": 500
          },
          {
            "id": 7,
            "name": "Fitbit Charge 5",
            "description": "Advanced fitness tracker",
            "rating": 90,
            "img": "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/images/desktop/features-cover-charge5-21.jpg",
            "price": 150
          },
          {
            "id": 8,
            "name": "Amazon Echo (4th Gen)",
            "description": "Smart speaker with Alexa",
            "rating": 100,
            "img": "https://www.expertreviews.co.uk/sites/expertreviews/files/2020/10/amazon_echo_2021_review.jpg",
            "price": 80
          },
          {
            "id": 9,
            "name": "LG UltraWide Monitor",
            "description": "Wide-screen monitor for productivity",
            "rating": 120,
            "img": "https://www.lg.com/in/images/monitors/md07573225/feature/49WQ95C-W-mnt-ultrawide-01-1-lg-ultrawide-monitor-curved-mobile.jpg",
            "price": 400
          },
          {
            "id": 10,
            "name": "Anker Powerbank",
            "description": "High-capacity portable charger",
            "rating": 70,
            "img": "https://static.toiimg.com/thumb/msid-71502001,width-400,resizemode-4/71502001.jpg",
            "price": 40
          }
        ]
      },
      {
        "id": 2,
        "name": "Tech",
        "img": "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/master/w_2560%2Cc_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg",
        "products": [
          {
            "id": 11,
            "name": "Logitech MX Master 3",
            "description": "High-performance wireless mouse",
            "rating": 100,
            "img": "https://9to5mac.com/wp-content/uploads/sites/6/2019/09/logitech-mx-master-3.jpg?quality=82&strip=all&w=1600",
            "price": 80
          },
          {
            "id": 12,
            "name": "Samsung Galaxy Tab S7",
            "description": "Powerful Android tablet",
            "rating": 150,
            "img": "https://southport.in/cdn/shop/files/samsung-india-electronics-tab-wi-fi-4gb-64gb-mystic-black-samsung-galaxy-tab-s7-fe-12-4-sm-t735nzke-8806092506909-40927034999043_1200x1200.jpg?v=1687866594",
            "price": 600
          },
          {
            "id": 13,
            "name": "Lenovo ThinkPad X1 Carbon",
            "description": "Premium business laptop",
            "rating": 180,
            "img": "https://m.media-amazon.com/images/I/71eDgN-KWJL.jpg",
            "price": 1300
          },
          {
            "id": 14,
            "name": "Nintendo Switch OLED",
            "description": "Upgraded version of Nintendo Switch",
            "rating": 120,
            "img": "https://www.cnet.com/a/img/resize/29870c3dc5015b1b1a92d5f85aede3de66c233d6/hub/2021/10/05/83c35cd5-4664-410d-b15a-5c5d706ba3e7/switch-oled-tabletop.jpg?auto=webp&fit=crop&height=1200&width=1200",
            "price": 350
          },
          {
            "id": 15,
            "name": "Razer BlackWidow V3",
            "description": "Mechanical gaming keyboard",
            "rating": 100,
            "img": "https://smcinternational.in/extra/gaming-accessories-gallery/51633682391razer-blackwidow-v3-phantom-yellow-switch.jpg",
            "price": 120
          },
          {
            "id": 16,
            "name": "Beats Studio Buds",
            "description": "Wireless earbuds by Beats",
            "rating": 80,
            "img": "https://m.media-amazon.com/images/I/51utxdpV8cS.jpg",
            "price": 100
          },
          {
            "id": 17,
            "name": "Alienware Aurora R12",
            "description": "Gaming desktop by Alienware",
            "rating": 180,
            "img": "https://media.ldlc.com/r1600/ld/products/00/05/83/08/LD0005830899_1_0005831011_0005835606.jpg",
            "price": 2000
          },
          {
            "id": 18,
            "name": "Canon Pixma Pro-100",
            "description": "Professional photo printer",
            "rating": 90,
            "img": "https://m.media-amazon.com/images/I/71Aidih2F+L.jpg",
            "price": 300
          },
          {
            "id": 19,
            "name": "HyperX Cloud II",
            "description": "Gaming headset with 7.1 surround sound",
            "rating": 120,
            "img": "https://m.media-amazon.com/images/I/61fsEVFmu6L.jpg",
            "price": 100
          },
          {
            "id": 20,
            "name": "Apple Watch Series 7",
            "description": "Advanced smartwatch from Apple",
            "rating": 150,
            "img": "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
            "price": 400
          }
        ]
      },
      {
        "id": 3,
        "name": "Clothing",
        "img": "https://static01.nyt.com/images/2019/09/25/world/25cli-clothes-still-promo/25cli-clothes-still-promo-superJumbo-v2.jpg",
        "products": [
          {
            "id": 21,
            "name": "Men's Jeans",
            "description": "Stylish and comfortable jeans for men",
            "rating": 80,
            "img": "https://5.imimg.com/data5/SELLER/Default/2022/5/IM/PA/FU/112693237/mens-bell-bottom-denim-jeans.jpeg",
            "price": 50
          },
          {
            "id": 22,
            "name": "Women's Jacket",
            "description": "Fashionable jacket for women",
            "rating": 70,
            "img": "https://m.media-amazon.com/images/I/41+aGYIgYWL.jpg",
            "price": 80
          },
          {
            "id": 23,
            "name": "Unisex Hoodie",
            "description": "Cozy hoodie for both men and women",
            "rating": 90,
            "img": "https://www.thesun.co.uk/wp-content/uploads/2022/12/image-1072.png?strip=all&w=859",
            "price": 40
          },
          {
            "id": 24,
            "name": "Men's Formal Shirt",
            "description": "Elegant shirt for formal occasions",
            "rating": 80,
            "img": "https://cpimg.tistatic.com/05986079/b/4/Mens-Formal-Shirts.jpg",
            "price": 60
          },
          {
            "id": 25,
            "name": "Women's Casual Dress",
            "description": "Casual and trendy dress for women",
            "rating": 90,
            "img": "https://esposagroup.com/wp-content/uploads/2022/01/smart-casual-dress-code.jpg",
            "price": 70
          },
          {
            "id": 26,
            "name": "Unisex Sneakers",
            "description": "Comfortable sneakers for daily wear",
            "rating": 80,
            "img": "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fHww&w=1000&q=80",
            "price": 60
          },
          {
            "id": 27,
            "name": "Women's Summer Dress",
            "description": "Light and airy dress for summer",
            "rating": 70,
            "img": "https://imgeng.jagran.com/images/2023/mar/Summer%20Dresses%20For%20Women1679645990208.jpg",
            "price": 45
          },
          {
            "id": 28,
            "name": "Men's Polo Shirt",
            "description": "Classic polo shirt for men",
            "rating": 60,
            "img": "https://src1.ilogo.in/images/products/683/custom-mens-premium-polo-shirt.webp",
            "price": 30
          },
          {
            "id": 29,
            "name": "Women's High Heels",
            "description": "Elegant high heels for women",
            "rating": 90,
            "img": "https://5.imimg.com/data5/SELLER/Default/2023/3/291921090/IG/OY/FA/182365761/women-s-high-heel-sandals-500x500.jpg",
            "price": 70
          },
          {
            "id": 30,
            "name": "Unisex Beanie",
            "description": "Warm and stylish beanie for winter",
            "rating": 80,
            "img": "https://kmd-assets.imgix.net/catalog/product/a/0/a0992_732_federate_beanie_v2_green_b.jpg",
            "price": 20
          }
        ]
      },
      {
        "id": 4,
        "name": "Furniture",
        "img": "https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/6358e-rental-bangalore.jpg?fit=1000%2C750&ssl=1",
        "products": [
          {
            "id": 31,
            "name": "Sofa Set",
            "description": "Comfortable and modern sofa set",
            "rating": 150,
            "img": "https://www.arra.co.in/image/cache/catalog/Series%202000/Sofa%20Sets%20(1100%20x%20900)/ARRA2421%20(Rome)/ARRA2421_1-1100x900.jpg",
            "price": 800
          },
          {
            "id": 32,
            "name": "Dining Table with Chairs",
            "description": "Elegant dining set with chairs",
            "rating": 120,
            "img": "https://m.media-amazon.com/images/I/81x9tv3UufL.jpg",
            "price": 600
          },
          {
            "id": 33,
            "name": "Bed Frame with Headboard",
            "description": "Sturdy bed frame with headboard",
            "rating": 140,
            "img": "https://casper.com/dw/image/v2/BFHV_PRD/on/demandware.static/-/Sites-casper-master/default/dw6ebf0f71/product_images/Repose%20Bed%20Frame/FNBRWFNOK_Casper_Repose_Wood_Fra%20(4).jpg?sw=1023&sh=1023",
            "price": 500
          },
          {
            "id": 34,
            "name": "Wardrobe",
            "description": "Spacious wardrobe for clothes storage",
            "rating": 100,
            "img": "https://www.at-home.co.in/cdn/shop/products/FLWDEMIRATES4DWG.jpg?v=1654058280",
            "price": 400
          },
          {
            "id": 36,
            "name": "Study Desk",
            "description": "Compact study desk for work and study",
            "rating": 80,
            "img": "https://www.houseofobjects.in/cdn/shop/products/evasamllstudytablewhiteashcream_1024x.jpg?v=1614678980",
            "price": 120
          },
          {
            "id": 37,
            "name": "Bookshelf",
            "description": "Tall bookshelf for organizing books",
            "rating": 70,
            "img": "https://img.staticmb.com/mbcontent/images/uploads/2022/6/Floating-Wall-Bookshelf-Design.jpg",
            "price": 180
          },
          {
            "id": 39,
            "name": "Office Chair",
            "description": "Ergonomic office chair for comfort",
            "rating": 80,
            "img": "https://www.nilkamalfurniture.com/cdn/shop/files/NilkamalThamesNeoMidBackFabricChairblack_600x.jpg?v=1684127758",
            "price": 200
          },
        ]
      },
      {
        "id": 5,
        "name": "Grocery",
        "img": "https://entrackr.com/storage/2020/03/grocery-store.jpg",
        "products": [
          {
            "id": 41,
            "name": "Rice (5 kg)",
            "description": "High-quality rice for daily use",
            "rating": 80,
            "img": "https://www.jiomart.com/images/product/original/490863679/daawat-pulav-basmati-rice-5-kg-product-images-o490863679-p590319436-0-202208251734.jpg?im=Resize=(420,420)",
            "price": 20
          },
          {
            "id": 42,
            "name": "Cooking Oil (1 liter)",
            "description": "Healthy cooking oil for all-purpose use",
            "rating": 90,
            "img": "https://cdn.marico.in/uploads/07-1652967326-5380.jpg",
            "price": 10
          },
          {
            "id": 43,
            "name": "Fresh Vegetables Bundle",
            "description": "Assorted bundle of fresh vegetables",
            "rating": 70,
            "img": "https://freshonline.ie/cdn/shop/products/Large-Vegetable-Bundle_03dddab1-15f8-4593-89b2-b3d229ee902f_1024x.jpg?v=1635041780",
            "price": 15
          },
          {
            "id": 44,
            "name": "Assorted Fruits",
            "description": "Variety of fresh fruits",
            "rating": 80,
            "img": "https://thumbs.dreamstime.com/b/composition-assorted-fruits-balanced-diet-76099713.jpg",
            "price": 25
          },
          {
            "id": 45,
            "name": "Fresh Chicken (1 kg)",
            "description": "High-quality chicken for cooking",
            "rating": 90,
            "img": "https://sangareddy.eatmukka.com/croppie_uploads/site_id/96/products/22/ori/22_1666456689.webp",
            "price": 8
          },
          {
            "id": 46,
            "name": "Bread Loaf",
            "description": "Freshly baked bread for breakfast",
            "rating": 80,
            "img": "https://assets.bonappetit.com/photos/5f84743360f032defe1f5376/4:3/w_1648,h_1236,c_limit/Pullman-Loaf-Lede-new.jpg",
            "price": 4
          },
          {
            "id": 47,
            "name": "Milk (1 liter)",
            "description": "Fresh and nutritious milk",
            "rating": 90,
            "img": "https://www.pngkey.com/png/detail/438-4381068_organic-1-milk-one-litre-carton-one-liter.png",
            "price": 3
          },
          {
            "id": 49,
            "name": "Pasta (500g)",
            "description": "Delicious pasta for quick meals",
            "rating": 80,
            "img": "https://m.media-amazon.com/images/I/61C5CyvI4rS.jpg",
            "price": 2
          },
          {
            "id": 50,
            "name": "Tea Bags",
            "description": "Classic tea bags for tea lovers",
            "rating": 90,
            "img": "https://www.jiomart.com/images/product/original/490582715/lipton-pure-light-green-tea-bags-25-pcs-product-images-o490582715-p490582715-0-202306091223.jpg?im=Resize=(420,420)",
            "price": 4
          }
        ]
      },
      {
        "id": 6,
        "name": "Beauty",
        "img": "https://tlc.sndimg.com/content/dam/images/tlc/tlcme/fullset/2022/april/rx_eco%20friendly%20cosmetics.jpg.rend.hgtvcom.406.271.suffix/1650386135910.jpeg",
        "products": [
          {
            "id": 51,
            "name": "Facial Cleanser",
            "description": "Gentle facial cleanser for all skin types",
            "rating": 90,
            "img": "https://s3.images-iherb.com/cet/cet92735/y/2.jpg",
            "price": 15
          },
          {
            "id": 52,
            "name": "Body Lotion",
            "description": "Hydrating body lotion for smooth skin",
            "rating": 80,
            "img": "https://i.mscwlns.co/mosaic-wellness/image/upload/v1658497292/staging/products/niacinamide-body-lotion/CAROUSEL/0-1.png?tr=w-800",
            "price": 12
          },
          {
            "id": 53,
            "name": "Hair Shampoo",
            "description": "Nourishing shampoo for healthy hair",
            "rating": 90,
            "img": "https://hips.hearstapps.com/hmg-prod/images/gh-best-shampoo-dry-hair-64ad905ad9984.jpg",
            "price": 10
          },
          {
            "id": 54,
            "name": "Face Mask",
            "description": "Revitalizing face mask for a glowing complexion",
            "rating": 70,
            "img": "https://pubs.acs.org/cms/10.1021/acsnano.1c11181/asset/images/acsnano.1c11181.social.jpeg_v03",
            "price": 8
          },
          {
            "id": 55,
            "name": "Perfume",
            "description": "Fragrant perfume for a lasting impression",
            "rating": 80,
            "img": "https://thumbs.dreamstime.com/b/chanel-no-french-perfume-parfum-bottle-box-isolated-dark-background-iconic-famous-was-created-parisian-fashion-93975536.jpg",
            "price": 25
          },
          {
            "id": 56,
            "name": "Nail Polish Set",
            "description": "Assorted nail polish set for nail art",
            "rating": 70,
            "img": "https://img0.junaroad.com/uiproducts/18768009/zoom_0-1670306129.jpg",
            "price": 18
          },
          {
            "id": 57,
            "name": "Eye Shadow Palette",
            "description": "Versatile eye shadow palette for various looks",
            "rating": 80,
            "img": "https://swissbeauty.in/cdn/shop/products/SB-730_01B.jpg?v=1676292575",
            "price": 30
          },
          {
            "id": 58,
            "name": "Lipstick Set",
            "description": "Set of lipsticks in different shades",
            "rating": 70,
            "img": "https://m.media-amazon.com/images/I/51Qy3tKdAyL.jpg",
            "price": 20
          },
          
        ]
      },
      {
        "id": 7,
        "name": "Books",
        "img": "https://static.toiimg.com/photo/msid-80383465/80383465.jpg",
        "products": [
          {
            "id": 61,
            "name": "The Midnight Library",
            "description": "Bestselling fiction novel by Matt Haig",
            "rating": 90,
            "img": "https://poetrybooksya.com/wp-content/uploads/2022/02/Blog-Post_MIDNIGHT-LIBRARY-833x554-1.png",
            "price": 15
          },
          {
            "id": 62,
            "name": "Educated: A Memoir",
            "description": "Memoir by Tara Westover",
            "rating": 80,
            "img": "https://5.imimg.com/data5/SELLER/Default/2022/10/EJ/GS/WN/113288716/educated-500x500.jpg",
            "price": 12
          },
          {
            "id": 63,
            "name": "Sapiens: A Brief History of Humankind",
            "description": "Historical non-fiction by Yuval Noah Harari",
            "rating": 90,
            "img": "https://www.thenewatlantis.com/wp-content/uploads/2015/12/237A0957.jpg",
            "price": 20
          },
          {
            "id": 64,
            "name": "Atomic Habits",
            "description": "Self-help book by James Clear",
            "rating": 80,
            "img": "https://accidentallyretired.com/wp-content/uploads/2021/09/Atomic-Habits-by-James-Clear.jpg",
            "price": 18
          },
          {
            "id": 66,
            "name": "Born a Crime",
            "description": "Autobiography by Trevor Noah",
            "rating": 80,
            "img": "https://kidskintha.com/wp-content/uploads/2020/04/Trevor-Noah.webp",
            "price": 16
          },
          {
            "id": 67,
            "name": "Becoming",
            "description": "Memoir by Michelle Obama",
            "rating": 90,
            "img": "https://res.cloudinary.com/itimages/image/upload/f_auto,q_auto,w_500,c_limit/prd/splash_cover_art/fruljyech4ln0emapizn",
            "price": 22
          },
          {
            "id": 68,
            "name": "The Subtle Art of Not Giving a F*ck",
            "description": "Self-help book by Mark Manson",
            "rating": 80,
            "img": "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_share/the-subtle-art-of-not-giving-a-f-ck_FrontImage_587.jpg",
            "price": 14
          },
          {
            "id": 69,
            "name": "The Silent Patient",
            "description": "Thriller novel by Alex Michaelides",
            "rating": 90,
            "img": "https://libromaniacs.com/wp-content/uploads/2021/12/the-silent-patient-book-club-questions.jpg",
            "price": 15
          },
        ]
      },
      {
        "id": 8,
        "name": "Sports",
        "img": "https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Fwritingillini.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F7737369.jpeg",
        "products": [
          {
            "id": 71,
            "name": "Basketball",
            "description": "Official-sized basketball for games",
            "rating": 80,
            "img": "https://thumbs.dreamstime.com/b/basketball-isolated-28666494.jpg",
            "price": 25
          },
          {
            "id": 72,
            "name": "Football",
            "description": "Regulation football for matches",
            "rating": 70,
            "img": "https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg",
            "price": 20
          },
          {
            "id": 74,
            "name": "Tennis Racket",
            "description": "High-quality tennis racket",
            "rating": 80,
            "img": "https://static.independent.co.uk/2021/06/30/10/tennis%20rackets%20indybest.jpg",
            "price": 80
          },
          {
            "id": 75,
            "name": "Golf Clubs Set",
            "description": "Complete set of golf clubs",
            "rating": 90,
            "img": "https://m.media-amazon.com/images/I/41KXRBjowBL._AC_SR300,300.jpg",
            "price": 250
          },
          {
            "id": 76,
            "name": "Bicycle",
            "description": "Durable bicycle for commuting",
            "rating": 80,
            "img": "https://justbuycycles.com/cdn/shop/products/T03130_1_1024x1024.jpg?v=1588938617",
            "price": 350
          },
          {
            "id": 77,
            "name": "Dumbbell Set",
            "description": "Adjustable dumbbell set for strength training",
            "rating": 90,
            "img": "https://m.media-amazon.com/images/I/714jNRc5E3L.jpg",
            "price": 120
          },
          {
            "id": 79,
            "name": "Treadmill",
            "description": "Foldable treadmill for home workouts",
            "rating": 80,
            "img": "https://images.unsplash.com/photo-1637714409323-d5e6e9731252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlYWRtaWxsfGVufDB8fDB8fHww&w=1000&q=80",
            "price": 600
          },
          {
            "id": 80,
            "name": "Boxing Gloves",
            "description": "High-quality boxing gloves",
            "rating": 70,
            "img": "https://img.freepik.com/free-vector/realistic-red-pair-leather-boxing-gloves-with-lacing_88138-295.jpg",
            "price": 30
          }
        ]
      },
      {
        "id": 9,
        "name": "Toys",
        "img": "https://thememo.com.au/cdn/shop/collections/Toys_1200x1200.jpg?v=1637713653",
        "products": [
          {
            "id": 81,
            "name": "LEGO Classic Bricks Box",
            "description": "Assorted LEGO bricks set",
            "rating": 90,
            "img": "https://brickcatch.com/wp-content/uploads/2020/09/lego-10698-large-creative-brick-box-scaled.jpg",
            "price": 30
          },
          {
            "id": 82,
            "name": "Barbie Dreamhouse",
            "description": "Barbie's luxurious dreamhouse",
            "rating": 80,
            "img": "https://todaysparent.mblycdn.com/tp/resized/2018/10/1600x900/barbie-dreamhouse.jpg",
            "price": 80
          },
          {
            "id": 83,
            "name": "Hot Wheels Car Set",
            "description": "Set of Hot Wheels toy cars",
            "rating": 90,
            "img": "https://5.imimg.com/data5/BV/TF/EK/SELLER-5892480/hot-wheels-car-set-pack-of-10-500x500.jpg",
            "price": 20
          },
          {
            "id": 84,
            "name": "Puzzle Set",
            "description": "Set of colorful puzzles for kids",
            "rating": 70,
            "img": "https://cdn.fcglcdn.com/brainbees/images/products/720x720/11244443a.webp",
            "price": 15
          },
          {
            "id": 85,
            "name": "Teddy Bear",
            "description": "Soft and cuddly teddy bear",
            "rating": 80,
            "img": "https://thumbs.dreamstime.com/b/romantic-teddy-bears-2445682.jpg",
            "price": 10
          },
          {
            "id": 86,
            "name": "Art Set",
            "description": "Art set for creative kids",
            "rating": 90,
            "img": "https://cdn.fcglcdn.com/brainbees/images/products/720x720/11284795a.webp",
            "price": 25
          },
          {
            "id": 87,
            "name": "Remote Control Car",
            "description": "Remote control car for fun play",
            "rating": 80,
            "img": "https://images.meesho.com/images/products/102581414/j44zf_512.jpg",
            "price": 35
          },
          {
            "id": 88,
            "name": "Board Games Set",
            "description": "Set of classic board games",
            "rating": 70,
            "img": "https://assets.ajio.com/medias/sys_master/root/h53/h31/15561993322526/-288Wx360H-4913945020-multi-MODEL.jpg",
            "price": 30
          },
          {
            "id": 89,
            "name": "Doctor Playset",
            "description": "Doctor-themed playset for kids",
            "rating": 80,
            "img": "https://m.media-amazon.com/images/I/6122AmbzXDL.jpg",
            "price": 20
          },
        ]
      }
    ]
  export default Categories;