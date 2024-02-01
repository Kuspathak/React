

const NumberSelector = ({selectedNumber,setSelectedNumber}) => {
  
  const arrNumber = [1, 2, 3, 4, 5, 6];
 // Initialize with null

  const handleNumberClick = (value) => {
    setSelectedNumber(value);
  };

  return (
    <div className="w-96 h-24 ml-auto mr-10 mt-10 items-center text-center font-bold">
      <div className="gap-5 flex">
        {arrNumber.map((value, i) => (
          <div
            className={`border-2 border-black w-12 h-8 cursor-pointer ${
              selectedNumber === value ? "bg-gray-600 text-white" : ""
            }`}
            key={i}
            onClick={()=> handleNumberClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="mt-2">
        <h1>Select Number</h1>
      </div>
    </div>
  );
};

export default NumberSelector;
