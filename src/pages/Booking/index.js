import tableImg from '../../assets/table.jpeg';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './booking.css';

const ReservationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Your name must have at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest")
      .max(20, "Max 20 guests")
      .required("Number of guests is required"),
    occasion: Yup.string()
      .required("Occasion is required"),
    date: Yup.date()
      .required("Date is required")
      .min(new Date(), "Date must be in the future"),
    hour: Yup.string()
      .required("Hour is required"),
    observations: Yup.string()
});


export default function Reservation(){
    return(
        <>
            <div className="banner-single d-flex justify-content-center align-items-center bg-verde py-4">
                <div className="container">
                    <div className="banner-header">
                        <h1 className='fw-bold'>Reservation</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className='reservation'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h4 className='fw-bold'>Reserve your table</h4>
                            <p>In order to reserve your table you can fill the forma, in case you are facing problems with the reservation form you can reach us:</p>
                            <ul className='my-3'>
                                <li>reservation@little-lemon.com</li>
                                <li>+351 XXX XXX XXX</li>
                            </ul>
                            <article>
                                <img src={tableImg} className='w-100' alt='table-img'/>
                            </article>
                        </div>
                        <div className='col-md-6'>
                        <Formik
                            initialValues={{
                            name: "",
                            email: "",
                            guests: 1,
                            date: "",
                            hour: "",
                            occasion: "",
                            observations: ""
                            }}
                            validationSchema={ReservationSchema}
                            onSubmit={(values, { resetForm }) => {
                            console.log("Form submitted:", values);
                            toast.success("Reservation sent successfully!");
                            resetForm();
                            }}
                        >
                                {({ isSubmitting, isValid, dirty }) => (
                                    <Form className='p-4'>
                                        <div className='mb-2'>
                                        <label className='form-label'>Name:</label>
                                        <Field type="text" name="name" placeholder="Enter your name" className="form-control" />
                                        <ErrorMessage name="name" component="div" className='text-danger' />
                                        </div>

                                        <div className='mb-2'>
                                        <label className='form-label'>E-mail:</label>
                                        <Field type="email" name="email" placeholder="Enter your email" className="form-control"/>
                                        <ErrorMessage name="email" component="div" className='text-danger'/>
                                        </div>

                                        <div className='mb-2'>
                                        <label className='form-label'>Guests</label>
                                        <Field type="number" name="guests" min="1" max="20" placeholder="1 - 20" className="form-control"/>
                                        <ErrorMessage name="guests" component="div" className='text-danger' />
                                        </div>

                                        <div className='mb-2'>
                                            <label className='form-label'>Occasion:</label>
                                            <Field as="select" name="occasion" className="form-select">
                                                <option value="">Occasion</option>
                                                <option value="Birthday ">Birthday</option>
                                                <option value="Meeting">Meeting</option>
                                                <option value="Dinner">Dinner</option>
                                            </Field>
                                            <ErrorMessage name="occasion" component="div" className='text-danger' />
                                        </div>

                                        <div className='mb-2'>
                                        <label className='form-label' >Date</label>
                                        <Field type="date" name="date" className="form-control" />
                                        <ErrorMessage name="date" component="div" className='text-danger' />
                                        </div>

                                        <div className='mb-2'>
                                        <label className='form-label'>Hour:</label>
                                        <Field as="select" name="hour" className="form-select">
                                            <option value="">Select</option>
                                            <option value="12:00">12:00</option>
                                            <option value="13:00">13:00</option>
                                            <option value="14:00">14:00</option>
                                            <option value="19:00">19:00</option>
                                            <option value="20:00">20:00</option>
                                            <option value="21:00">21:00</option>
                                        </Field>
                                        <ErrorMessage name="hour" component="div" className='text-danger' />
                                        </div>

                                        <div className='mb-4'>
                                        <label className='form-label'>Observações:</label>
                                        <Field as="textarea" name="observations" className="form-control" rows="5"/>
                                        </div>

                                        <button 
                                        type="submit" 
                                        disabled={isSubmitting || !isValid || !dirty}
                                        className={`btn btn-md ${isValid && dirty ? "btn-dark" : "btn-secondary"}`}>
                                        {isSubmitting ? "Sending..." : "Reserve a table"}
                                        </button>
                                        <ToastContainer position="top-right" autoClose={3000}/>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}