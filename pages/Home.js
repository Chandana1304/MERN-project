import spotify_logo from "../assts/spotify_logo_white.svg";
import IconText from "../components/IconText"

const Home = () => {
    return(
        <div className="h-full w-full flex">
           {/*this is side bar*/}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div> 
                <div className="logoDiv p-6">
                    <img src={spotify_logo} alt="spotify logo"width={125}/>
                </div>
                <div className="py-5">
                <div>
                    <IconText iconName={"material-symbols:home"}
                    displayText={"Home"}/>
                </div>
                <div>
                <IconText iconName="material-symbols:search" width="24" height="24" 
                    displayText={"Search"}/>
                </div>
                <div>
                <IconText iconName="bx:library" width="24" height="24" 
                    displayText={"Library"}/>
                </div> 
                </div> 
                <div className="pt-4">
                <div>
                <IconText iconName="basil:add-solid" width="24" height="24"
                    displayText={"Create playlist"}/>
                </div>
                <div>
                <IconText iconName="mdi:heart" width="24" height="24" 
                    displayText={"Liked Songs"}/>
            </div>
            </div>
            </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-6 py-1 rounded-full item-center justify-center cursor-pointer ">
                         <IconText iconName="gridicons:globe"  />
                         <div className="al-2 text-5m font-semibold">
                            English
                        </div>
                    </div>
                </div>
                </div>
            {/*this is main page*/}
            <div className="h-full w-4/5 bg-app-black">
                <div className="navbar w-full h-1/10 bg-black opacity-30">
                    
                </div>
                <div className="content">

                </div>
            </div>
        
        
        </div>
    );

};


export default Home;
