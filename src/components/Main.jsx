const Main = () => {
    return ( 
        <div className="max-w-[90%] mx-auto p-4" >
            <div className="max-h-[500px] relative">
            <div className="w-full h-full bg-black/40 absolute  flex flex-col justify-center">
                <h1 className="px-6 text-white font-bold  xxs:text-3xl medium:text-5xl largerStart:text-6xl lg:text-7xl">The <span className="text-orange-500">Best</span></h1>
                <h1 className="px-6 text-white font-bold  xxs:text-3xl medium:text-5xl largerStart:text-6xl lg:text-7xl"><span className="text-orange-500">Food</span> Delivered</h1>
            </div>

            <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="" />
            </div>

        </div>
     );
}
 
export default Main;