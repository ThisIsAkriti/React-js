const Contact = () => {
    return(
    <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
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
    </div>
    );
};

export default Contact;