import AnimatedText from "./AnimatedText";

function Banner() {
  
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between gap-8">
        {/* images */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="banner" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 ">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img src="/images/home/b-food1.png" alt="food1" className="rounded-2xl"/>
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className=" hidden sm:flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img src="/images/home/b-food1.png" alt="food1" className="rounded-2xl"/>
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-5 pr-7 mt-8 sm:mt-40">
          <AnimatedText/> 
          <p className="text-xl text-[#4A4A4A]">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <button className="btn bg-green text-white px-8 py-3 font-semibold rounded-full">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;