// import React, { useState, useRef } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { toast } from 'react-toastify';
// import { forgotPassword } from '../apis/Api';

// export default function ForgetPassword() {
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState('');


//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const forgotPassword = (e) => {
//     e.preventDefault();
//     const data = {
//       email: email,
//     };

// //     // Rename the inner function to something else
// //     forgotPasswordApi(data)
// //       .then((res) => {
// //         if (res.data.success === true) {
// //           toast.success(res.data.message);
// //           setShowModal(false);
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //         toast.error(err.response?.data?.message || "Internal server error");
// // //       });
// //   };

// const handleForgotClick = (e) =>{
//   e.preventDefault()
//   forgotPassword({email}).then(res => {
//     toast.success("check your email for password reset")
//   }).catch(err => {
//     console.log(err)
//     toast.error("something went wrong")
//   })
// }

//   return (
//     <>
//       <h2 onClick={handleForgotClick} className="text-right text-sky-500 hover:text-sky-400 cursor-pointer">Forget Password ?</h2>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Forgot Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//             <div className='flex gap-1 lg:gap-2 md:gap-1 items-center'>
//               <div className=" flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 mx-0 sm:mx-0 sm:h-10 sm:w-10">
//                 {/* <UserIcon className="h-6 w-6 text-sky-600" aria-hidden="true" /> */}
//               </div>
//               <Modal.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
//                 Enter Your Email
//               </Modal.Title>
//             </div>
//             <div className="mt-2 w-90">
//               <Form onSubmit={forgotPassword}>
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Control
//                     placeholder="enter you email"
//                     onChange={handleEmail}
//                     type="text"
//                     className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
//                   />
//                 </Form.Group>
//                 <Button
//                   type="submit"
//                   className="mt-3 inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm   hover:bg-green-500 sm:mt-0 sm:w-auto"
//                 >
//                   Change Password
//                 </Button>
//               </Form>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };
// }

