const Shimmer=()=>{
   return  ( <div className="resto-list"> 
  {Array(15).fill("").map((e,index)=>(<div key={index}className="shimmerCard"></div>))} 
   
   </div>);
};
export default Shimmer;
