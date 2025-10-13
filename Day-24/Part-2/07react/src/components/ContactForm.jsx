import { useState } from "react";
import { useContactForm } from "../hooks/useContactForm.js";

export function ContactForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    
  const { submitContact, errorMessage, loading, successMessage } =
        useContactForm();
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitContact(form)
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}    
                    onChange={handleChange}
                    placeholder="your name..."
                />

                <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your email..."
                />

                <textarea
                    type="text"
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="your message..."
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Sending...": "Send"}
                </button>
            </form>
            {successMessage && <p>{ successMessage }</p>}
            {errorMessage && <p>{ errorMessage }</p>}
        </div>
    )
}
