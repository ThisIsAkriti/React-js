const Contact = () => {
    return(
      <div className="flex justify-center">
            <div className="bg-gray-200 shadow-2xl p-6 mt-10">
                <h1 className="font-bold text-3xl p-4 m-4 text-center  border-2  border-t-gray-200 border-l-gray-200 border-r-gray-200 border-b-white pb-8 ">Contact Us</h1>
            
                <form className="mx-5">
                    <input 
                    type="text"
                    className="border border-gray-300 shadow-md p-2 m-2 rounded-lg"
                    placeholder="Name"/>
                    <input 
                    type="text"
                    className="border border-gray-300 p-2 m-2 rounded-lg shadow-md"
                    placeholder="Write something!"/>
                    <button className="font-bold text-xl m-4 border-gray-300 border px-4 py-2 bg-slate-200 rounded-lg shadow-md" >Submit</button>

                </form>
            
            
                <div className="mx-8 my-4 font-semibold font-sans flex-row">
                    <p className="my-2"> > If any query, feel free to contact us!</p>
                    <p className="my-2"> > For any assistance and queries, mail us at <span className="text-red-800">support@OkieDokie.com</span></p>
                    <p className="my-2"> > Our Operational Address is: Xaybzc , Uttarakhand.</p>
                </div>
            
            </div>
        </div>
    );
};

export default Contact;