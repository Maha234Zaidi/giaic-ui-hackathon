const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Testimonials Heading */}
      <div className="text-start mb-12">
        <h2 className="animate-bounce text-5xl leading-[57.6px] font-bold  text-black md:text-4xl font-integral">
          OUR HAPPY CUSTOMERS
        </h2>
      </div>

      {/* Testimonials Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {/* Card 1 */}
        <div className="p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-500 flex">⭐⭐⭐⭐⭐</div>
            <span className="text-green-600">✔</span>
          </div>
          <h3 className="font-bold text-lg mb-2 font-satoshi">Sarah M.</h3>
          <p className="text-gray-600 font-satoshi">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations."
          </p>
        </div>

        {/* Card 2 */}
        <div className=" p-6 rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-500 flex">⭐⭐⭐⭐⭐</div>
            <span className="text-green-600">✔</span>
          </div>
          <h3 className="font-bold text-lg mb-2 font-satoshi">Alex K.</h3>
          <p className="text-gray-600 font-satoshi">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to various tastes."
          </p>
        </div>

        {/* Card 3 */}
        <div className=" p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-500 flex">⭐⭐⭐⭐⭐</div>
            <span className="text-green-600">✔</span>
          </div>
          <h3 className="font-bold text-lg mb-2 font-satoshi">James L.</h3>
          <p className="text-gray-600 font-satoshi">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. Their collection is
            diverse and trendy!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
