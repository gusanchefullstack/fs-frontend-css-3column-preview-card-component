import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="font-bigShoulders text-base flex flex-wrap items-center justify-center md:my-[171px]">
        <Card icon="/images/icon-sedans.svg" buttonHoverBackColor="hover:bg-bright-orange" buttonBackColor="bg-bright-orange" txtColor="text-bright-orange" description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."/>
        <Card icon="/images/icon-suvs.svg" buttonHoverBackColor="hover:bg-dark-cyan" buttonBackColor="bg-dark-cyan" txtColor="text-dark-cyan" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."/>
        <Card icon="/images/icon-luxury.svg" buttonHoverBackColor="hover:bg-very-dark-cyan" buttonBackColor="bg-very-dark-cyan" txtColor="text-very-dark-cyan" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."/>
      </div>
    </>
  );
}

export default App;
