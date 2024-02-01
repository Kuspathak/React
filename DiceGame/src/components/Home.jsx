const Home = ({toggle}) => {
    return (
      <div className="flex mx-auto my-auto text-white font-bold max-w-1180 h-screen items-center">
        <div>
          <img src="images/dice.png" alt="dice" />
        </div>
        <div className="mx-auto flex-col items-center">
          <div className="mt-4 text-6xl">LUDO GAME</div>
          <div className="items-center">
            <button className="mt-4 border border-gray-300 rounded w-40 h-10 hover:bg-gray-500"
            onClick={toggle}>
              Play
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  