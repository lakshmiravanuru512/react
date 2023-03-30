const Shimmer=()=>{
   return  ( <div className="resto-list" data-testid="shimmer"> 
  {Array(15).fill("").map((e,index)=>(<div key={index}className="shimmerCard"></div>))} 
   
   </div>);
};
export default Shimmer;
