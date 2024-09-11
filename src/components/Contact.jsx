// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
// import Footer from "./Footer";
// const Contact = () => {
// 	const formRef = useRef();
// 	const [form, setForm] = useState({
// 		name: "",
// 		email: "",
// 		message: "",
// 	});


// 	const [loading, setLoading] = useState(false);

// 	const handleChange = (e) => {
// 		const { target } = e;
// 		const { name, value } = target;

// 		setForm({
// 			...form,
// 			[name]: value,
// 		});
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setLoading(true);

// 		// cleaning the form data
// 		const username = form.name.trim();
// 		const user_email = form.email.trim();
// 		const user_message = form.message.trim();

// 		if (username === '' || user_email === '' || user_message === '') {
// 			setLoading(false);
// 			toast.error("Please fill all the fields.", {
// 				position: 'bottom-right',
// 			});
// 			return;
// 		}
// 		console.log(username,user_email,user_message)

// 		emailjs
// 			.send(
// 				EMAIL_JS_SERVICE_ID,
// 				EMAIL_JS_TEMPLATE_ID,
// 				{
// 					from_name: username,
// 					to_name: "GAYATHRI CHILKURI",
// 					reply_to: user_email,
// 					to_email: "chilukurigayathri1@gmail.com",
// 					message: user_message,
// 				},
// 				EMAIL_JS_PUBLIC_KEY
// 			)
// 			.then(
// 				() => {
// 					setLoading(false);
// 					toast.success("Message sent successfully!", {
// 						position: 'bottom-right',
// 					});
// 					setForm({
// 						name: "",
// 						email: "",
// 						message: "",
// 					});
// 				},
// 				(error) => {
// 					setLoading(false);
// 					console.error(error);
// 					toast.error("Uh, oh! Something went wrong. Please try again later.", {
// 						position: 'bottom-right',
// 					});
// 				}
// 			);
// 	};

// 	return (

//         <div className='relative z-0 bg-black w-screen h-screen mt-12'>   
// 			<div className='text-white contact overflow-x-hidden pt-12 mt-8 ' id='contact'>
// 				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl' >
// 					<p className='font-light'>REACH OUT TO ME</p>
// 					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
// 					<form
// 						ref={formRef}
// 						onSubmit={handleSubmit}
// 						className='mt-12 flex flex-col gap-8'
// 					>
// 						<label className='flex flex-col'>
// 							<span className=' font-medium mb-4'>Your Name</span>
// 							<input
// 								type='text'
// 								name='name'
// 								value={form.name}
// 								onChange={handleChange}
// 								placeholder="Enter your name"
// 								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
// 								required
// 							/>
// 						</label>
// 						<label className='flex flex-col'>
// 							<span className=' font-medium mb-4'>Your email</span>
// 							<input
// 								type='email'
// 								name='email'
// 								value={form.email}
// 								onChange={handleChange}
// 								placeholder="Ex:abc@gmail.com"
// 								className='py-4 px-6 rounded-lg  font-medium bg-gray-900'
// 								required
// 							/>
// 						</label>
// 						<label className='flex flex-col'>
// 							<span className='font-medium mb-4'>Your Message</span>
// 							<textarea
// 								rows={7}
// 								name='message'
// 								value={form.message}
// 								onChange={handleChange}
// 								placeholder='Do you have anything to say?'
// 								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
// 								required
// 							/>
// 						</label>

// 						<button
// 							type='submit'
// 							className='pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900'
// 						>
// 							{loading ? "Sending..." : "Send"}
// 						</button>
// 					</form>
// 				</div>
// 				<ToastContainer />
// 			</div>
// 		<Footer/>
//         </div>
// 	);
// };

// export default Contact;
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="relative z-0 bg-black w-screen h-screen mt-12">
      <div className="text-white flex flex-col justify-center items-center h-full">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 mb-8">
          Let's Connect!
        </h2>
        <p className="font-light mb-12">
          I'm always open to connecting with new people and discussing
          opportunities. You can reach out to me via LinkedIn or send me an
          email.
        </p>

        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/gayathri-chilukuri-140439289/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-3 px-6 bg-gradient-to-r from-gray-500 to-pink-500 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <FaLinkedin size={24} />
            <span className="font-bold">LinkedIn</span>
          </a>
          <a
            href="mailto:chilukurigayathri1@gmail.com"
            className="flex items-center gap-3 py-3 px-6 bg-gradient-to-r from-gray-500 to-pink-500 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <FaEnvelope size={24} />
            <span className="font-bold">Gmail</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
