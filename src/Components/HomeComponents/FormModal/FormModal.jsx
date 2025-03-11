import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './FormModal.css';

function FormModal() {
  const [isOpen, setIsOpen] = useState(true);
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.user_name.trim().length < 3) {
      toast.error('Name should be at least 3 characters long.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    if (formData.message.trim().length < 5) {
      toast.error('Message should be at least 5 characters long.');
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm('service_qj4c7yw', 'template_yoh5j4k', form.current, 'hVlbfE5o2pNq23Wm4')
      .then(
        () => {
          toast.success('Email sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' }); // Reset form
          closeModal();
        },
        (error) => {
          toast.error('Failed to send email. Try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="login-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&#x2715;</button>
            <h2 className='form-headline'>Who’s Visiting?</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="user-box">
                <input 
                  type="text" 
                  name="user_name" 
                  value={formData.user_name} 
                  onChange={handleChange} 
                  required 
                />
                <label>Your name</label>
              </div>
              <div className="user-box">
                <input 
                  type="email" 
                  name="user_email" 
                  value={formData.user_email} 
                  onChange={handleChange} 
                  required 
                />
                <label>Your Email</label>
              </div>
              <div className="user-box">
                <textarea 
                  name="message" 
                  rows="1" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
                <label>Share your message</label>
              </div>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
