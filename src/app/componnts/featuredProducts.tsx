import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-around">
      {/* First Product (Local Image) */}
      <div className="md:w-5/12 w-full mb-20 flex flex-col items-center">
        <Image
          src="https://cdn.shopify.com/s/files/1/0554/9424/6423/files/hero-desk_2_a7af6170-3cff-4876-8b2d-043b294b4927.png?v=1654967076"
          alt="Product Three"
          width={300}
          height={300}
        />
        <p className="text-center pt-10">PKR 5,000</p>
        <button className="px-10 py-4 bg-blue-600 text-white rounded-md my-3">
          Buy Now
        </button>
      </div>

      {/* Second Product (External Image) */}
      <div className="md:w-6/12 w-full mb-20 flex flex-col items-center">
        <Image
          src="https://tse4.mm.bing.net/th?id=OIP.I8UrgvPmNZFlXuIoDRoPtAHaE8&pid=Api&P=0&h=220"
          alt="Product Two"
          width={300}
          height={300}
        />
        <p className="text-center pt-10">PKR 5,000</p>
        <button className="px-10 py-4 bg-blue-600 text-white rounded-md my-3">
          Buy Now
        </button>
      </div>

      {/* Third Product (Local Image) */}
      <div className="md:w-6/12 w-full flex flex-col items-center">
        <Image
          src="http://4.bp.blogspot.com/-xSZWi7i6pdE/TgTIzuILX1I/AAAAAAAAAEA/FfUkGFr7Hwk/s1600/cos.jpg"
          alt="Product One"
          width={300}
          height={300}
        />
        <p className="text-center pt-10">PKR 5,000</p>
        <button className="px-10 py-4 bg-blue-600 text-white rounded-md my-3">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
