const populated = localStorage.getItem("products");

// UnComment the line below to delete the products from ur localstorage
// localStorage.removeItem("products");

if (!populated) {
  const products = [
    {
      name: "Classic Tee",
      shortDescription: "Stylish classic tee for everyday wear.",
      longDescription:
        "Experience unparalleled comfort and style with our classic tee, perfect for any occasion. Crafted with high-quality materials and attention to detail, this piece is a must-have in your wardrobe. Available in various sizes.",
      price: 59.23,
      image: "assets/products/alex-hddife-6wWiZlA2n0Q-unsplash.jpeg",
      category: "topRated",
    },
    {
      name: "Vintage Jeans",
      shortDescription: "Stylish vintage jeans for everyday wear.",
      longDescription:
        "Experience unparalleled comfort and style with our vintage jeans, perfect for any occasion. Crafted with high-quality materials and attention to detail, this piece is a must-have in your wardrobe. Available in various sizes.",
      price: 33.76,
      image: "assets/products/andreea-chidu-FPV2_FbNHoE-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Leather Jacket",
      shortDescription: "Stylish leather jacket for everyday wear.",
      longDescription:
        "Experience unparalleled comfort and style with our leather jacket, perfect for any occasion. Crafted with high-quality materials and attention to detail, this piece is a must-have in your wardrobe. Available in various sizes.",
      price: 81.72,
      image: "assets/products/brian-lawson-jRztw-pVdyk-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Elegant Skirt",
      shortDescription: "Stylish elegant skirt for everyday wear.",
      longDescription:
        "Experience unparalleled comfort and style with our elegant skirt, perfect for any occasion. Crafted with high-quality materials and attention to detail, this piece is a must-have in your wardrobe. Available in various sizes.",
      price: 66.84,
      image: "assets/products/uji-kanggo-gumilang-sMn0sxR8v2E-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Casual Hoodie",
      shortDescription: "Stylish casual hoodie for everyday wear.",
      longDescription:
        "Experience unparalleled comfort and style with our casual hoodie, perfect for any occasion. Crafted with high-quality materials and attention to detail, this piece is a must-have in your wardrobe. Available in various sizes.",
      price: 59.64,
      image: "assets/products/christian-bolt-VW5VjskNXZ8-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Silk Blouse",
      shortDescription: "Elegant silk blouse for a refined look.",
      longDescription:
        "Elevate your style with our silk blouse, offering a touch of elegance for any event. Made with premium silk, it provides comfort and sophistication. Ideal for your wardrobe's luxury collection.",
      price: 75.99,
      image: "assets/products/christian-bolt-WhnbNX5yeJo-unsplash.jpeg",
      category: "bestSellers",
    },
    {
      name: "Denim Shorts",
      shortDescription: "Comfortable denim shorts for summer days.",
      longDescription:
        "Stay cool and fashionable with our denim shorts, perfect for hot summer days. High-quality denim ensures durability and style, making these shorts a seasonal essential.",
      price: 45.0,
      image: "assets/products/diego-vedita-PW1EOs9R-Xw-unsplash.jpeg",
      category: "topRated",
    },
    {
      name: "Formal Suit",
      shortDescription: "Sleek formal suit for special occasions.",
      longDescription:
        "Make a statement at any formal event with our sleek suit. Tailored for a perfect fit, it combines style and sophistication, ensuring you stand out in the crowd.",
      price: 150.0,
      image: "assets/products/engin-akyurt-jaZoffxg1yc-unsplash.jpeg",
      category: "bestSellers",
    },
    {
      name: "Running Sneakers",
      shortDescription: "High-performance running sneakers for athletes.",
      longDescription:
        "Hit the ground running with our high-performance sneakers. Designed for athletes, they offer superior comfort and support, enhancing your running experience.",
      price: 120.0,
      image: "assets/products/faith-yarn-jX2cntCbrAo-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Winter Coat",
      shortDescription: "Warm winter coat for chilly days.",
      longDescription:
        "Brave the cold in style with our winter coat. Offering warmth and comfort during chilly days, it's a must-have for your winter wardrobe.",
      price: 200.0,
      image: "assets/products/florencia-simonini-PDZAMYvduVk-unsplash.jpeg",
      category: "topRated",
    },
    {
      name: "Summer Dress",
      shortDescription: "Light summer dress for sunny days.",
      longDescription:
        "Embrace the sunshine with our light summer dress. Perfect for sunny days, it offers both comfort and style, making it a summer wardrobe essential.",
      price: 85.0,
      image: "assets/products/kai-gabriel-2s3GhhJz2uY-unsplash.jpeg",
      category: "bestSellers",
    },
    {
      name: "Athletic Leggings",
      shortDescription: "Flexible athletic leggings for workouts.",
      longDescription:
        "Maximize your workout potential with our athletic leggings. Offering flexibility and comfort, they're perfect for any exercise routine.",
      price: 50.0,
      image: "assets/products/kevin-gil-musngi-eCikWiyY6IY-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Beach Sandals",
      shortDescription: "Stylish beach sandals for summer.",
      longDescription:
        "Step into summer with our stylish beach sandals. Perfect for the beach or any summer outing, they offer both comfort and style.",
      price: 35.0,
      image: "assets/products/laura-chouette-LXHyNufB8Ds-unsplash.jpeg",
      category: "topRated",
    },
    {
      name: "Wool Scarf",
      shortDescription: "Cozy wool scarf for winter warmth.",
      longDescription:
        "Keep warm this winter with our cozy wool scarf. Soft and comfortable, it's the perfect addition to your winter attire.",
      price: 40.0,
      image: "assets/products/laura-chouette-q4Wrsho-t2E-unsplash.jpeg",
      category: "bestSellers",
    },
    {
      name: "Graphic T-Shirt",
      shortDescription: "Trendy graphic t-shirt for casual wear.",
      longDescription:
        "Make a statement with our graphic t-shirt. Trendy and comfortable, it's perfect for casual wear and pairs well with any outfit.",
      price: 25.0,
      image:
        "assets/products/mohamad-javad-barakouhi-rJvs1om1G0o-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Cargo Pants",
      shortDescription: "Durable cargo pants for outdoor adventures.",
      longDescription:
        "Ready for any adventure, our cargo pants are both durable and stylish. With multiple pockets, they're practical for outdoor activities.",
      price: 65.0,
      image: "assets/products/taylor-dG4Eb_oC5iM-unsplash.jpeg",
      category: "topRated",
    },
    {
      name: "Sweatshirt",
      shortDescription: "Cozy sweatshirt for relaxed days.",
      longDescription:
        "Stay comfortable on relaxed days with our cozy sweatshirt. Soft and stylish, it's perfect for lounging at home or casual outings.",
      price: 55.0,
      image: "assets/products/patrik-velich-v9eKhg8YaOA-unsplash.jpeg",
      category: "bestSellers",
    },
    {
      name: "Linen Shirt",
      shortDescription: "Breathable linen shirt for warm weather.",
      longDescription:
        "Keep cool in warm weather with our breathable linen shirt. Lightweight and comfortable, it's ideal for sunny days and warm evenings.",
      price: 70.0,
      image: "assets/products/raoul-croes-q3NX2NbbYmI-unsplash.jpeg",
      category: "newArrivals",
    },
    {
      name: "Knit Sweater",
      shortDescription: "Soft knit sweater for cozy comfort.",
      longDescription:
        "Experience cozy comfort with our soft knit sweater. Perfect for chilly days, it offers warmth and style, making it a winter essential.",
      price: 75.0,
      image: "assets/products/suhendro-purnomo-f0oLkvrnVOo-unsplash.jpeg",
      category: "topRated",
    },
    {
      name: "Ankle Boots",
      shortDescription: "Stylish ankle boots for any occasion.",
      longDescription:
        "Elevate your outfit with our stylish ankle boots. Versatile and fashionable, they're suitable for any occasion, pairing well with both casual and formal wear.",
      price: 90.0,
      image: "assets/products/mohammad-faruque-0ZYPu-nLOwU-unsplash.jpeg",
      category: "bestSellers",
    },
  ];

  localStorage.setItem("products", JSON.stringify(products));
}
