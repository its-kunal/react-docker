import ReactSVG from "./assets/react.svg";

const HomePage = () => {
  return (
    <div className="select-none flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-start gap-x-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Hello React</h1>
        <img src={ReactSVG} alt="" className="h-10 animate-spin" />
      </div>
      <div className="max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white ">
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">A Poem on Life</div>
          <p className="text-gray-700 text-base ">
            Life is a journey, a winding road, With moments of joy and times
            that explode.
            <div></div>We navigate through both darkness and light, Learning and
            growing, finding our might.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
