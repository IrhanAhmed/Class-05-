import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-around">
      {/* First Product */}
      <div className="md:w-5/12 w-full mb-20">
        <div className="flex flex-col items-center">
          <Image
            src="/PP1.jpg"
            alt="Product One"
            width={300}
            height={300}
          />
          <p className="text-center pt-10">PKR 5,000</p>
        </div>
        <div className="flex justify-center items-center my-3">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </div>

      {/* Second Product */}
      <div className="md:w-6/12 w-full mb-20">
        <div className="flex flex-col items-center">
          <Image
            src="/PP2.png"
            alt="Product Two"
            width={350}
            height={300}
          />
          <p className="text-center pt-10">PKR 5,000</p>
        </div>
        <div className="flex justify-center items-center my-3">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </div>

      {/* Third Product */}
      <div className="md:w-6/12 w-full">
        <div className="flex flex-col items-center">
          <Image
            src="/PP3.jpg"
            alt="Product Three"
            width={250}
            height={250}
          />
          <p className="text-center pt-10">PKR 5,000</p>
        </div>
        <div className="flex justify-center items-center my-3">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
