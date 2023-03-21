import { useState } from "react";

const Section=({title,description,isVisible,setIsVisible})=>{
return(
    <div className="border border-black p-2 m-2">
       <h3 className=" font-bold text-xl ">{title}</h3>
       {isVisible? (<button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>) : (<button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>)
       }
      
      {isVisible && <p>{description }</p>}
       
       
    </div>
   
);
};


const Instamart=()=>{
    const[sectionConfig, setSectionConfig]=useState({
        showAbout:false,
        showTeam:false,
        showCarrer:false
    })
    return (
        <div>
            <h1 className="text-3xl p-2 m-2">Instamart</h1>
            <Section  
            title={"About Instamart"}
            description={"The base structure is a large multi-chambered cube with chamfered corners forming an unequal eight-sided structure that is approximately 55 metres (180 ft) on each of the four long sides. Each side of the iwan is framed with a huge pishtaq or vaulted archway with two similarly shaped arched balconies stacked on either side. This motif of stacked pishtaqs is replicated on the chamfered corner areas, making the design completely symmetrical on all sides of the building. Four minarets frame the tomb, one at each corner of the plinth facing the chamfered corners. The main chamber houses the false sarcophagi of Mumtaz Mahal and Shah Jahan; the actual graves are at a lower level.[20]"}
            isVisible={sectionConfig.showAbout}
            setIsVisible={()=>
            setSectionConfig({
                showAbout:true,
                showTeam:false,
                showCarrer:false
            })}
            
            />
            <Section  
            title={"Team Instamart"}
            description={"The base structure is a large multi-chambered cube with chamfered corners forming an unequal eight-sided structure that is approximately 55 metres (180 ft) on each of the four long sides. Each side of the iwan is framed with a huge pishtaq or vaulted archway with two similarly shaped arched balconies stacked on either side. This motif of stacked pishtaqs is replicated on the chamfered corner areas, making the design completely symmetrical on all sides of the building. Four minarets frame the tomb, one at each corner of the plinth facing the chamfered corners. The main chamber houses the false sarcophagi of Mumtaz Mahal and Shah Jahan; the actual graves are at a lower level.[20]"}
            isVisible={sectionConfig.showTeam}
            setIsVisible={()=>
            setSectionConfig({
                showAbout:false,
                showTeam:true,
                showCarrer:false
            })}
            
            />
             <Section  
            title={"Carrer of Instamart"}
            description={"The base structure is a large multi-chambered cube with chamfered corners forming an unequal eight-sided structure that is approximately 55 metres (180 ft) on each of the four long sides. Each side of the iwan is framed with a huge pishtaq or vaulted archway with two similarly shaped arched balconies stacked on either side. This motif of stacked pishtaqs is replicated on the chamfered corner areas, making the design completely symmetrical on all sides of the building. Four minarets frame the tomb, one at each corner of the plinth facing the chamfered corners. The main chamber houses the false sarcophagi of Mumtaz Mahal and Shah Jahan; the actual graves are at a lower level.[20]"}
            isVisible={sectionConfig.showCarrer}
            setIsVisible={()=>
            setSectionConfig({
                showAbout:false,
                showTeam:false,
                showCarrer:true
            })}
            
            />
        </div>
    )
}
export default Instamart