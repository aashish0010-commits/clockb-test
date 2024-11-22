import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"; // Import the Navigation module
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; 
import { products } from "../Data/data";
import { items as categories } from "../Data/data";
import { topPicksData } from "../Data/data";
import { categoriesData } from "../Data/data";
import { brands } from "../Data/data";
import { handPicksData } from "../Data/data";
import { hotCakes } from "../Data/data";
import { creamCakesData } from "../Data/data";

const Categories = () => {
    return (
        <>
      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <a
              href={category.link} // Assuming `category.link` contains the URL for the category
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center"
            >
              <img
                src={category.icon}
                alt={category.label}
                className="w-10 h-10 object-contain"
              />
            </a>
            <p className="text-sm font-medium text-brown-700">{category.label}</p>
          </div>
        ))}
      </div>
      </>
    );
  };
  

const ProductCarousel = () => {
  return (
    <>
    <div className="container mx-auto py-6 px-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true} // Enable navigation
        modules={[FreeMode, Navigation]} // Include the Navigation module
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex-none w-full max-w-[380px] bg-white rounded-lg shadow-lg relative sm:w-[300px] md:w-[340px] lg:w-[380px]">
              <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg"></div>
                {/* Text content */}
                <div className="absolute bottom-4 left-4 text-white p-2 rounded-md">
                  <h3 className="text-md sm:text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm hidden sm:block">{product.description}</p>
                  <a
                    href={product.link}
                    className="mt-2 inline-block bg-white hover:bg-teal-600 text-black py-1 px-3 rounded-md transition-all duration-300 ease-in-out"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

const TopPicks = () => {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Top Picks</h2>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {topPicksData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain mb-4"
                />
                <p className="text-sm text-gray-600 uppercase">{item.brand}</p>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < item.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-500">
                    ({item.reviews})
                  </span>
                </div>
                <p className="text-lg font-semibold text-green-900">
                  {item.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  const CategoriesTwo = () => {
    return (
      <div className="py-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-[300px] h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute top-[80px] inset-0 flex flex-col justify-start items-start text-white text-left p-6">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="mt-3 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Brands = () => {
    return (
        <>
         <h2 className="text-3xl font-semibold text-center mb-6">Hand-Picked Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <a
              href={category.link} // Assuming `category.link` contains the URL for the category
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center"
            >
              <img
                src={category.icon}
                alt={category.label}
                className="w-10 h-10 object-contain"
              />
            </a>
            <p className="text-sm font-medium text-brown-700">{category.label}</p>
          </div>
        ))}
      </div>
      </>
    );
  };

  const HandPicks = () => {
    return (
      <div className="py-8">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {handPicksData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain mb-4"
                />
                <p className="text-sm text-gray-600 uppercase">{item.brand}</p>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < item.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-500">
                    ({item.reviews})
                  </span>
                </div>
                <p className="text-lg font-semibold text-green-900">
                  {item.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  const BrownieSection = () => {
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-gray-100">
        <div className="flex-1">
          <div className="relative h-[500px]"> 
            <img
              src="https://s3-alpha-sig.figma.com/img/24ac/7bfd/c3930e0ce6fafea0084f7d24633e2eed?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QNojSgJhObR09qLEojhdkwz1wl8YOezrPFBwOa6T8wIsIWaBLaFOi3ERj~3RVN9sLyM8jploUdhwG5mSe5oDHGuiuKAkWMigi6ibh3Xy0qabmrxr2chOBqMHWzRvSZ1Ny-SpOdwckoeGlPhV-iWI2TszKsvOFOaH7lO65UJoJHAQCKRiS~EWF4aBv5vOjV85cUB0qbX72W5iHeWRu4zQ7E5BvLbUREScTVM4GfRCWXgnXB0MVxHoWxH-dEKSkeK0JOWVgkWh2eapUyp4F-dOMe9YlVoGHxTXyS1srhjvoDe~h3QAy0TN5Iue89D3TLgRiaxRnI~Uey55~BRYFMrecA__"
              alt="Brownie Package"
              className="rounded-lg w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="relative text-white top-[200px] text-left text-lg font-normal p-4">
                "Our journey started in 2017, delivering delight in every bite. Taste the passion!"
              </p>
            </div>
          </div>
        </div>
  
        {/* Right Section - Carousel */}
        <div className="flex-1">
          <h2 className="text-xl text-center font-bold text-gray-800 mb-4">Exclusive Brownie</h2>
          <div className="flex space-x-4">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow p-4 w-64">
              <img
                src="https://s3-alpha-sig.figma.com/img/e053/0e89/9cb3b357f2d62d4cbc0addb5fededf19?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A2l-aEvfmJ563QTcPDFk1hFtYY-pII0aZtr6m4OePnV9GsR-koesE4zZR9tzOCtceK157hDGuYMtcvc47zdsBTXCagaUl21ztobX0W8z5DFFg7XhVh6EIeslGnco21W-oRKScM0u0TkUrstsXhVLiwZpEbEElxoW63ezPHtChYpLVFzv7cvu0NsYa~uTLaf99PYD0PAOKw9v13l-SsbEt6A8S0OsCgBsIFK5~B~V7RR00WxeJZuHGpIOH2Xx38~Oy7EZBRAvVNH3O4ZgZEBS--LDb79TZADDqVrakoS3~mBj9SF-vouqlltg~jQp-4o3MJRK~CQ3noMj3xIjpJB6wg__"
                alt="Brownie"
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500">KAFFE CODES</p>
              <h3 className="font-semibold text-gray-800 text-lg">
                Chocolate Brownie With Mint Leaves Toppings
              </h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm">★★★★★</span>
                <span className="ml-2 text-sm text-gray-500">(23)</span>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-2">NPR. 999</p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow p-4 w-64">
              <img
                src="https://s3-alpha-sig.figma.com/img/e053/0e89/9cb3b357f2d62d4cbc0addb5fededf19?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A2l-aEvfmJ563QTcPDFk1hFtYY-pII0aZtr6m4OePnV9GsR-koesE4zZR9tzOCtceK157hDGuYMtcvc47zdsBTXCagaUl21ztobX0W8z5DFFg7XhVh6EIeslGnco21W-oRKScM0u0TkUrstsXhVLiwZpEbEElxoW63ezPHtChYpLVFzv7cvu0NsYa~uTLaf99PYD0PAOKw9v13l-SsbEt6A8S0OsCgBsIFK5~B~V7RR00WxeJZuHGpIOH2Xx38~Oy7EZBRAvVNH3O4ZgZEBS--LDb79TZADDqVrakoS3~mBj9SF-vouqlltg~jQp-4o3MJRK~CQ3noMj3xIjpJB6wg__"
                alt="Brownie"
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500">KAFFE CODES</p>
              <h3 className="font-semibold text-gray-800 text-lg">
                Chocolate Brownie With Mint Leaves Toppings
              </h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm">★★★★★</span>
                <span className="ml-2 text-sm text-gray-500">(23)</span>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-2">NPR. 999</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Cakes = () => {
    return (
        <>
         <h2 className="text-3xl font-semibold text-center mt-6">Hot Cakes</h2>
      <div className="flex flex-wrap justify-center items-center gap-6 py-6">
        {hotCakes.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <a
              href={category.link} // Assuming `category.link` contains the URL for the category
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center"
            >
              <img
                src={category.icon}
                alt={category.label}
                className="w-10 h-10 object-contain"
              />
            </a>
            <p className="text-sm font-medium text-brown-700">{category.label}</p>
          </div>
        ))}
      </div>
      </>
    );
  };

  const CreamCakes = () => {
    return (
      <div className="py-8">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {creamCakesData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-[220px] object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </a>
                <div className="p-5">
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    {item.brand}
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < item.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-500">
                      ({item.reviews})
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-green-900 mb-3">
                    {item.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  

const Home = () => {
  return (
    <div className="container mx-auto px-5">
      <Categories />
      <ProductCarousel />
      <TopPicks />
      <CategoriesTwo />
      <Brands />
      <HandPicks />
      <BrownieSection/>
      <Cakes/>
      <CreamCakes/>
      
    </div>
  );
};

export default Home;
