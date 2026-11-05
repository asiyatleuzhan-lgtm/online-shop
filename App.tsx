import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, SlidersHorizontal, Plus, ChevronLeft, Minus, Share2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  qty: string;
  price: number;
  img: string;
  desc: string;
}

export default function App() {
  // Беттер: 'welcome', 'signin', 'shop', 'detail', 'cart'
  const [currentPage, setCurrentPage] = useState<string>('welcome');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const categories = [
    { id: 1, name: 'Fresh Fruits', bg: 'bg-emerald-100', text: 'text-emerald-700' },
    { id: 2, name: 'Cooking Oil', bg: 'bg-amber-100', text: 'text-amber-700' },
    { id: 3, name: 'Meat & Fish', bg: 'bg-rose-100', text: 'text-rose-700' },
    { id: 4, name: 'Bakery & Snacks', bg: 'bg-purple-100', text: 'text-purple-700' },
  ];

  const products: Product[] = [
    { id: 1, name: 'Organic Bananas', qty: '7pcs, Priceg', price: 4.99, img: '🍌', desc: 'Apples are among the most popular fruits, and for good reason. They are an exceptionally healthy fruit with many research-backed benefits.' },
    { id: 2, name: 'Red Apple', qty: '1kg, Priceg', price: 6.49, img: '🍎', desc: 'Fresh red apples straight from the farm. Rich in fiber and vitamins.' },
    { id: 3, name: 'Bell Pepper Red', qty: '1kg, Priceg', price: 2.99, img: '🫑', desc: 'Crunchy and sweet bell peppers, perfect for salads and cooking.' },
    { id: 4, name: 'Ginger', qty: '250g, Priceg', price: 1.99, img: '🫚', desc: 'Fresh organic ginger root with powerful health benefits.' },
  ];

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setCurrentPage('detail');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center sm:p-4">
      <div className="w-full max-w-md bg-white min-h-screen sm:min-h-[812px] sm:rounded-[36px] shadow-2xl flex flex-col justify-between overflow-hidden relative font-sans">

        {/* 1-БЕТ: WELCOME SCREEN */}
        {currentPage === 'welcome' && (
          <div className="h-full min-h-screen sm:min-h-[812px] flex flex-col justify-end p-8 text-white bg-gradient-to-b from-emerald-600 via-emerald-800 to-gray-900 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none text-9xl select-none">
              🥕🥦🍎
            </div>

            <div className="text-center mb-10 z-10 flex flex-col items-center">
              <div className="text-6xl mb-4 animate-bounce">🥕</div>
              <h1 className="text-4xl font-bold mb-3 tracking-wide leading-tight">
                Welcome<br/>to our store
              </h1>
              <p className="text-emerald-100 text-sm mb-8 font-light">
                Get your groceries in as fast as one hour
              </p>
              
              <button 
                onClick={() => setCurrentPage('signin')}
                className="w-full bg-[#53B175] text-white py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-500 transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {/* 2-БЕТ: SIGN IN SCREEN (ТЕЛЕФОН НӨМІРІН ЕНГІЗУ) */}
        {currentPage === 'signin' && (
          <div className="flex flex-col h-full min-h-screen sm:min-h-[812px] bg-white justify-between p-6">
            <div>
              <div className="w-full h-48 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-6xl">📱</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-2">Get your groceries<br/>with nectar</h2>
              <p className="text-sm text-gray-400 mb-6">Enter your mobile number</p>

              <div className="flex items-center border-b border-gray-300 py-3 gap-3">
                <span className="text-xl">🇰🇿</span>
                <span className="font-semibold text-gray-700">+7</span>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="701 123 4567" 
                  className="w-full outline-none text-lg text-gray-800"
                  maxLength={12}
                />
              </div>
            </div>

            <div>
              <button 
                onClick={() => {
                  if(phoneNumber.length < 5) {
                    alert('Телефон нөмірін толық енгізіңіз!');
                    return;
                  }
                  setCurrentPage('shop');
                }}
                className="w-full bg-[#53B175] text-white py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-600 transition shadow-lg cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* 3-БЕТ: MAIN SHOP SCREEN */}
        {currentPage === 'shop' && (
          <>
            <div className="p-5 overflow-y-auto pb-24">
              <div className="flex flex-col items-center mb-5">
                <span className="text-3xl mb-1">🥕</span>
                <span className="text-xs text-gray-400 font-medium">Dhaka, Banasree</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 bg-gray-100 rounded-2xl flex items-center px-4 py-3 gap-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Search Store" className="bg-transparent outline-none w-full text-sm" />
                </div>
                <button className="bg-gray-100 p-3 rounded-2xl">
                  <SlidersHorizontal className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <div className="bg-[#F2F5F1] rounded-2xl p-4 mb-6 flex justify-between items-center relative overflow-hidden border border-emerald-100">
                <div className="z-10">
                  <h2 className="text-lg font-bold text-gray-800">Fresh Vegetables</h2>
                  <p className="text-[#53B175] text-xs font-semibold">Get Up To 40% OFF</p>
                </div>
                <div className="text-5xl">🥦</div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800 text-xl">Exclusive Offer</h3>
                  <button className="text-[#53B175] text-sm font-semibold">See all</button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {products.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => openProductDetail(item)}
                      className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition cursor-pointer bg-white"
                    >
                      <div className="text-center text-5xl my-3">{item.img}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{item.qty}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('cart');
                          }}
                          className="bg-[#53B175] text-white p-2.5 rounded-xl hover:bg-emerald-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800 text-xl">Groceries</h3>
                  <button className="text-[#53B175] text-sm font-semibold">See all</button>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {categories.map((cat) => (
                    <div key={cat.id} className={`${cat.bg} ${cat.text} px-4 py-4 rounded-2xl flex items-center gap-3 min-w-[170px] font-semibold cursor-pointer`}>
                      <span className="text-2xl">🍎</span>
                      <span className="text-sm">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-3 px-2 z-20">
              <button onClick={() => setCurrentPage('shop')} className="flex flex-col items-center text-[#53B175]">
                <ShoppingBag className="w-6 h-6" />
                <span className="text-[10px] font-semibold mt-1">Shop</span>
              </button>
              <button onClick={() => setCurrentPage('shop')} className="flex flex-col items-center text-gray-400">
                <Search className="w-6 h-6" />
                <span className="text-[10px] font-semibold mt-1">Explore</span>
              </button>
              <button onClick={() => setCurrentPage('cart')} className="flex flex-col items-center text-gray-400">
                <ShoppingBag className="w-6 h-6" />
                <span className="text-[10px] font-semibold mt-1">Cart</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <Heart className="w-6 h-6" />
                <span className="text-[10px] font-semibold mt-1">Favourite</span>
              </button>
              <button className="flex flex-col items-center text-gray-400">
                <User className="w-6 h-6" />
                <span className="text-[10px] font-semibold mt-1">Account</span>
              </button>
            </div>
          </>
        )}

        {/* 4-БЕТ: PRODUCT DETAIL SCREEN */}
        {currentPage === 'detail' && selectedProduct && (
          <div className="flex flex-col h-full min-h-screen sm:min-h-[812px] bg-white justify-between">
            <div>
              <div className="bg-gray-100 p-6 rounded-b-[30px] relative flex justify-center items-center h-72">
                <button 
                  onClick={() => setCurrentPage('shop')} 
                  className="absolute left-5 top-5 p-2 bg-white rounded-xl shadow-sm text-gray-700"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button className="absolute right-5 top-5 p-2 bg-white rounded-xl shadow-sm text-gray-700">
                  <Share2 className="w-5 h-5" />
                </button>
                <div className="text-8xl">{selectedProduct.img}</div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                    <p className="text-sm text-gray-400">{selectedProduct.qty}</p>
                  </div>
                  <Heart className="w-6 h-6 text-gray-400 cursor-pointer" />
                </div>

                <div className="flex justify-between items-center my-6">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-gray-200 rounded-xl text-gray-400 hover:text-gray-600"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg w-6 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-gray-200 rounded-xl text-[#53B175]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${(selectedProduct.price * quantity).toFixed(2)}
                  </span>
                </div>

                <hr className="my-4 border-gray-100" />

                <div className="mb-4">
                  <h3 className="font-bold text-gray-800 mb-2">Product Detail</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{selectedProduct.desc}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <button 
                onClick={() => setCurrentPage('cart')}
                className="w-full bg-[#53B175] text-white py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-600 transition shadow-lg cursor-pointer"
              >
                Add To Basket
              </button>
            </div>
          </div>
        )}

        {/* 5-БЕТ: CART SCREEN */}
        {currentPage === 'cart' && (
          <div className="flex flex-col h-full min-h-screen sm:min-h-[812px] bg-white justify-between">
            <div className="p-5">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <button onClick={() => setCurrentPage('shop')} className="text-gray-600">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-lg font-bold text-gray-800">My Cart</h2>
                <div className="w-6"></div>
              </div>

              <div className="space-y-4">
                {products.slice(0, 2).map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-100">
                    <div className="text-4xl mr-4">{item.img}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.qty}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button className="p-1 border border-gray-200 rounded-lg text-gray-400">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-semibold">1</span>
                        <button className="p-1 border border-gray-200 rounded-lg text-[#53B175]">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900 block mb-3">${item.price.toFixed(2)}</span>
                      <button className="text-gray-300 text-sm hover:text-red-500">✕</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-100">
              <button 
                onClick={() => alert('Order Placed Successfully!')}
                className="w-full bg-[#53B175] text-white py-4 rounded-2xl font-semibold text-lg flex justify-between items-center px-6 hover:bg-emerald-600 transition shadow-lg cursor-pointer"
              >
                <span>Go to Checkout</span>
                <span className="bg-emerald-700 text-xs px-2 py-1 rounded-md">$11.48</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}