import React from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import GoogleBtn from '../Components/Buttons/GoogleBtn';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'

const Register = () => {
    const { register } = useAuth();

    return (
        <main>
            <div className="page-wrapper">
                <HeaderLink />
                <div className="w-full overflow-hidden flex items-center min-h-[100vh] p-[50px_0]">
                    <div className="wraper">
                        <form className="w-[600px] sm:w-[500px] md:w-[1170px] col:w-full flex flex-wrap bg-white m-auto shadow-[0px_14px_60px_rgba(0,0,0,0.06)] rounded-[10px] overflow-hidden" onSubmit={register}>
                            <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[600px] text-center p-[50px] col:p-[30px_10px] register">
                            </div>
                            <div
                                className="w-full md:w-1/2 p-[70px_85px] md:p-[50px] col:p-[30px_10px] min-h-[600px] flex flex-col justify-center">
                                <h2 className="text-[30px] mb-[10px] text-[#147e03] font-heading-font font-semibold">Create Account</h2>
                                <p className="text-[15px] mb-[40px] text-[#687693] leading-[20px]">Sign up for a free account here</p>
                                <div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">First Name</label>
                                        <input type="text" id="text" name="name" placeholder="Your first name here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                    </div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Last Name</label>
                                        <input type="text" id="last-name" name="last-name" placeholder="Your last name here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                    </div>
                                    <div className="w-full">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your email here.."
                                            className="rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />
                                    </div>
                                    <div className="w-full relative">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Category</label>
                                        <select name="category" id="category" className="pwd6 relative rounded-[2px] w-full mb-[15px] px-[20px] h-[60px] border-[#e5e5e5]
                                            border-[1px] block focus:outline-0">
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200 first:border-t-0" value="Lecturer/Researcher">Lecturer/Researcher</option>
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200" value="Registered Dietitian/Clinical Nutritionist">Registered Dietitian/Clinical Nutritionist</option>
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200" value="nutrition student">Nutrition Student</option>
                                            <option class="text-gray-500 bg-white border-b-[1px] border-gray-200 last:border-b-0" value="others">Others</option>
                                        </select>
                                    </div>
                                    <div className="w-full relative">
                                        <label className="font-heading-font text-[#687693] text-[15px] block">Password</label>
                                        <input type="password" placeholder="" value="123456" name="pass" id="password"
                                            className="pwd6 relative rounded-[2px] w-full mb-[15px] pl-[20px] h-[60px] border-[#e5e5e5] border-[1px] block focus:outline-0" />

                                        <span className="absolute right-[10px] top-[45px]">
                                            <button className="btn btn-default reveal6" type="button">
                                                <i className="ti-eye" id="togglePassword"></i>
                                            </button>
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        <button type="submit" className=" h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex
                                    items-center mt-[20px] w-full
                                     justify-center capitalize text-[#fff]
                                 border-[#ffba08] border-[2px] transition-all hover:bg-transparent hover:text-[#ffba08]
                                 ">Sign Up</button>
                                    </div>
                                </div>
                                <h4
                                    className="border-t-[#e5e5e5] border-transparent border-[1px] mt-[45px] border-dashed text-center font-medium mb-[20px]">
                                    <span
                                        className="text-[16px] uppercase inline-block px-[25px] bg-white relative top-[-14px] text-[#147e03]">OR</span>
                                </h4>
                                <ul className="flex items-center justify-center mb-[20px] flex-wrap">
                                    <GoogleBtn />
                                </ul>
                                <p className="text-[16px] text-[#687693] text-center">Already have an account?
                                    <Link to="/login" className='text-[#147e03]'> Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Register;