
const Widgets = ({records}:any) => {
    // const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    return (
        <>
            <div className="widget-box w-[33%] border p-5">
                <label className="text-2xl font-bold block mb-4">Records</label>
                <div className="text-xl">{records}</div>
            </div>
            <div className="widget-box  w-[33%] border p-5">
                <label className="text-2xl font-bold block mb-4">Current Time</label>
                {/* <div className="text-xl">{currentDate}</div> */}
                <div className="text-xl">{currentTime}</div>
            </div>
            <div className="widget-box  w-[33%] border p-5">
                <label className="text-2xl font-bold">Video</label>
                <div className="widgetNumber">500</div>
            </div>
        </>
    );
};
  
export default Widgets;