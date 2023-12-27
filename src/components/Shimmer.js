
const Shimmer = () => {
  
  const cardCount = 9; 
  const shimmerCards = Array.from({ length: cardCount }, (_, index) => (
    <div
      key={index}
      className="w-[250px] mx-2 my-4 overflow-hidden rounded-lg shadow-lg bg-white p-4 animate-pulse"
    >
      <div className="h-40 bg-gray-300 mb-4"></div>
      <div className="flex justify-between items-center mb-2">
        <div className="h-4 w-20 bg-gray-300"></div> 
        <div className="h-4 w-8 bg-gray-300"></div> 
      </div>
      <div className="h-4 w-24 bg-gray-300 mb-2"></div> 
      <div className="h-4 w-32 bg-gray-300"></div> 
    </div>
  ));
  return <div className="flex flex-wrap">{shimmerCards}</div>;
};
    
  


export default Shimmer;