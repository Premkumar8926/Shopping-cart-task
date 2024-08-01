import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";

function App() {
  // State to manage cart items
  const [items, setItems] = useState([]);
  
  // State to manage total price of items in the cart
  const [total, setTotal] = useState(0);

  // State to manage the search term for filtering products
  const [searchTerm, setSearchTerm] = useState("");

  // State to manage the currently displayed page ('products' or 'cart')
  const [currentPage, setCurrentPage] = useState("products");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise-cancellation and 20 hours of battery life.",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718800407/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/302220_0_stfn4s.png?tr=w-360"
    },
    {
      id: 2,
      name: "4K Ultra HD TV",
      price: 599.99,
      description: "65-inch 4K Ultra HD TV with smart features and vibrant picture quality.",
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722282945/Croma%20Assets/Entertainment/Television/Images/302527_0_riknqr.png?tr=w-360"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 29.99,
      description: "Portable Bluetooth speaker with deep bass and waterproof design.",
      image: "https://i5.walmartimages.com/asr/52ff3b2a-29e1-4772-8bb2-0afe221f299c_1.c8cb9cea86ad3c723c2ed5110ed5120f.jpeg"
    },
    {
      id: 4,
      name: "Smartphone",
      price: 799.99,
      description: "Latest smartphone with a powerful processor, 128GB storage, and a stunning display.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 5,
      name: "Laptop",
      price: 1099.99,
      description: "15-inch laptop with a fast processor, 16GB RAM, and 512GB SSD for multitasking.",
      image: "https://i5.walmartimages.com/asr/ee1840e1-d589-498f-810c-0d4ee6cc9a4e.f05cdc65e3976a4b7af1aec5806d8034.jpeg"
    },
    {
      id: 6,
      name: "Smartwatch",
      price: 199.99,
      description: "Smartwatch with heart rate monitor, GPS, and customizable watch faces.",
      image: "https://cdn.mos.cms.futurecdn.net/DxpaKaHPBL5yF8vBjh2MjX.jpg"
    },
    {
      id: 7,
      name: "Tablet",
      price: 349.99,
      description: "10-inch tablet with 64GB storage, ideal for work and entertainment on the go.",
      image: "https://th.bing.com/th/id/OIP.Zk8F5CI1UKocMt2ZHM2EqAAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 499.99,
      description: "Next-gen gaming console with stunning graphics and immersive gameplay.",
      image: "https://th.bing.com/th/id/OIP.DeO4sGev2N1hskLk-4545wAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: 9,
      name: "Digital Camera",
      price: 449.99,
      description: "High-resolution digital camera with optical zoom and image stabilization.",
      image: "https://th.bing.com/th/id/OIP.Yx-bfdy9v6mgZaXrGs224QHaHa?rs=1&pid=ImgDetMain"
    },
    {
      id: 10,
      name: "Wireless Earbuds",
      price: 79.99,
      description: "Compact wireless earbuds with a secure fit and excellent sound quality.",
      image: "https://th.bing.com/th?id=OIP.QhyCymu-j3H1UuAtRDU8EwHaHu&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
      id: 11,
      name: "Electric Toothbrush",
      price: 39.99,
      description: "Electric toothbrush with multiple brushing modes and long-lasting battery.",
      image: "https://th.bing.com/th/id/OIP.udkTV_zcBfAXpnPhD6NQEQHaE8?rs=1&pid=ImgDetMain"
    },
    {
      id: 12,
      name: "E-Reader",
      price: 129.99,
      description: "E-reader with a high-resolution display and weeks of battery life.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
    },
    {
      id: 13,
      name: "Smart Home Assistant",
      price: 49.99,
      description: "Voice-controlled smart home assistant with integration for multiple devices.",
      image: "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5"
    },
    {
      id: 14,
      name: "Robot Vacuum",
      price: 249.99,
      description: "Robot vacuum cleaner with smart mapping and powerful suction.",
      image: "https://images.unsplash.com/photo-1603204991364-d3cb0e99e8f9"
    },
    {
      id: 15,
      name: "Portable Charger",
      price: 19.99,
      description: "Portable charger with fast charging capability and a compact design.",
      image: "https://images.unsplash.com/photo-1578857225838-6fd02eeae313"
    },
    {
      id: 16,
      name: "Action Camera",
      price: 299.99,
      description: "Action camera with 4K recording and waterproof casing for extreme adventures.",
      image: "https://images.unsplash.com/photo-1597466765990-64ad1c35dafc"
    },
    {
      id: 17,
      name: "Bluetooth Headset",
      price: 49.99,
      description: "Bluetooth headset with noise cancellation and a comfortable fit for all-day use.",
      image: "https://images.unsplash.com/photo-1514809810890-9da9d292b0f1"
    },
    {
      id: 18,
      name: "VR Headset",
      price: 399.99,
      description: "Virtual reality headset with immersive experiences and high-resolution display.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45"
    },
    {
      id: 19,
      name: "Smart Thermostat",
      price: 149.99,
      description: "Smart thermostat with energy-saving features and remote control via app.",
      image: "https://images.unsplash.com/photo-1607083208853-e8c65a2f59f6"
    },
    {
      id: 20,
      name: "Digital Photo Frame",
      price: 89.99,
      description: "Digital photo frame with Wi-Fi connectivity and customizable slideshows.",
      image: "https://images.unsplash.com/photo-1495833854991-1c027d393450"
    }
  ];

   // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to add a product to the cart
  const addToCart = (product) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      setTotal(updatedItems.reduce((sum, item) => sum + item.price, 0));
      return updatedItems;
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== productId);
      setTotal(updatedItems.reduce((sum, item) => sum + item.price, 0));
      return updatedItems;
    });
  };

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />
      <div className="container my-4">
        {currentPage === "products" && (
          <div className="row">
            <div className="col-lg-8">
              <h1>Products</h1>
              <div className="d-flex flex-wrap">
                {filteredProducts.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItems={items}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {currentPage === "cart" && (
          <div className="row">
            <div className="col-lg-12">
              <h1>Cart ({items.length} items)</h1>
              <Cart total={total} items={items} removeFromCart={removeFromCart} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
