import { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        to: '',
        subject: 'Test Email',
        message: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:8080/send-email', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         });
    //         if (response.ok) {
    //             toast.success("Message sent successfully");
    //             setFormData({
    //                 to: '',
    //                 subject: 'Test Email',
    //                 message: '',
    //                 name: ''
    //             });
    //         } else {
    //             toast.error("Failed to send message. Please try again later.");
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         toast.warn("An error occurred. Please try again later.");
    //     }
    // };

    return (
        <div className="bg-yellow-300 py-8 flex flex-col items-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-semibold text-center mb-4">Contact Us</h1>
                <p className="text-center mb-6">How can we help you?</p>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
                    <label htmlFor="name" className="block font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-black rounded"
                    />
                    
                    <label htmlFor="email" className="block font-bold mb-2">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="to"
                        placeholder="Your email.."
                        value={formData.to}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-black rounded"
                    />
                    
                    <label htmlFor="message" className="block font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message.."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-black rounded resize-vertical"
                        rows="6"
                    ></textarea>
                    
                    <button type="submit" className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
