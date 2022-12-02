const ThreeItem = () => {
    return ( 
        <div className="max-w-[90%] mx-auto p-4 bg-purple-300 h-[200px]">
            {/* item 1 */}
       { /*  <div className="w-full h-full bg-black/40 absolute flex flex-col justify-center"> */}

       {/* wrapping three items in one div for centering with flexbox */}
       <div className="flex justify-between items-center">
    
       <div className="rounded-xl w-[500px] h-full bg-pink-700 relative overflow-hidden">
       <div className="w-full h-full bg-black/40 absolute  flex flex-col justify-center">
       <h1 className="absolute top-2 p-2">Sun's Out, BOGO's Out</h1>
        <h3 className="absolute top-8 p-2">Through 8/26</h3>

        <button className="absolute bottom-4 ml-2 bg-white">Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className="w-full  max-h-[170px] object-cover rounded-xl" alt="" />
       </div>


       <div className="rounded-xl w-[500px] h-full bg-pink-700 relative overflow-hidden">
       <div className="w-full h-full bg-black/40 absolute  flex flex-col justify-center">
       <h1 className="absolute top-2 p-2">Sun's Out, BOGO's Out</h1>
        <h3 className="absolute top-8 p-2">Through 8/26</h3>

        <button className="absolute bottom-4 bg-white">Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className="w-full  max-h-[170px] object-cover rounded-xl" alt="" />
       </div>

     
       <div className="rounded-xl w-[500px] h-full bg-pink-700 relative overflow-hidden">
       <div className="w-full h-full bg-black/40 absolute  flex flex-col justify-center">
       <h1 className="absolute top-2 p-2">Sun's Out, BOGO's Out</h1>
        <h3 className="absolute top-8 p-2">Through 8/26</h3>

        <button className="absolute bottom-4 bg-white">Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className="w-full  max-h-[170px] object-cover rounded-xl" alt="" />
       </div>

    </div>
        </div>
    );
}
 
export default ThreeItem;