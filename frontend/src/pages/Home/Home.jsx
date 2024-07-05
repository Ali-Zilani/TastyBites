import Banner from "../../components/Banner"
import AnimatedText from "../../components/AnimatedText";

function Home() {
  
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between gap-8">
        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-5 pr-7">
          <AnimatedText/> 
          <p className="text-xl text-[#4A4A4A]">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <button className="btn bg-green text-white px-8 py-3 font-semibold rounded-full">Order Now</button>
        </div>
        {/* images */}
        <div className="md:w-1/2">Right</div>
      </div>
    </div>
  )
}

export default Home