import { useState } from "react"
import bgImg from "./my-pic/bgImg.jpeg"
import { useFormik} from 'formik';
import { signUpSchema, signUpSchema2 } from "../schemas";

const initialValues = {
    name:"",
    email: "",
    password: "",
}

const Guest = () =>{

    const {values , errors , handleBlur , touched, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,signUpSchema2,
        onSubmit: (values , action) => {
            console.log(
                "file: Registraition.jsx ~line11 Registration ~ values",
                values
            )     
            action.resetForm();  
                 
        }
    })
  
    const [islogin , setIsLogin] = useState(true);
    const toggleLoginForm = () => {
        setIsLogin(!islogin);
    }
    return(
        <>
            <div className="absolute">
                <img
                className="h-screen w-screen object-cover -mt-10"
                src= {bgImg} alt="background image"/>
            </div>
            <div className="flex justify-center mt-8 ">
                <div className=" bg-purple-500 text-black bg-opacity-60 absolute border-purple-600 border rounded-md w-3/12 p-8">
                    <form className="flex flex-col " onSubmit={handleSubmit}>
                        <h1 className="text-center text-2xl border-b border-b-purple-600 pb-4 text-white font-bold">{islogin ? "Login" : "Create an account "}</h1>
                        
                        <input
                        className="p-2 pl-4 bg-slate-200 mt-6 rounded-md mb-3"
                        type="text" placeholder="Your Name" name="name" 
                        value={values.name} onChange={handleChange} onBlur = {handleBlur}
                        />
                        {errors.name && touched.name ? (<p className="text-red-900">{errors.name}</p>) : null}
                        
                        <input
                        className="p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3"
                        type="text" placeholder="Email Address" name="email"
                        value={values.email} onChange={handleChange} onBlur = {handleBlur}
                        />
                        {errors.email && touched.email ? (<p className="text-red-900">{errors.email}</p>) : null}
                        
                        {!islogin && <input
                        className="p-2 pl-4 bg-slate-200 mt-4 rounded-md mb-3"
                        type="text" placeholder="Password"  name="password"
                        value={values.password} onChange={handleChange} onBlur = {handleBlur}
                        />}
                        {!islogin && errors.password && touched.password ? (<p className="text-red-900">{errors.password}</p>) : null}
                        
                        <button className=" mt-4 bg-purple-700 p-2 rounded-md text-white font-semibold text-lg mb-2" type="Submit">{islogin? "Login" : "Create an account"}</button>
                        <p className="
                         text-white font-semibold cursor-pointer mt-3 mb-3"
                          onClick={toggleLoginForm}
                          >
                           {islogin? "Or Create an account" : "Already registered? Login"} 
                        </p>
                        
                    </form>
                </div>
            </div>
        </>
    )
}
export default Guest ;