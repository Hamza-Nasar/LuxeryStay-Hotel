import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

interface BookingForm {
    firstName: string;
    lastName: string;
    email: string;
    checkIn: Date | null;
    checkOut: Date | null;
}

export default function BookingPage() {
    const [form, setForm] = useState<BookingForm>({
        firstName: '',
        lastName: '',
        email: '',
        checkIn: null,
        checkOut: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (field: keyof BookingForm, date: Date | null) => {
        setForm({
            ...form,
            [field]: date,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // EmailJS ke liye template params
        const templateParams = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            checkIn: form.checkIn ? form.checkIn.toDateString() : "N/A",
            checkOut: form.checkOut ? form.checkOut.toDateString() : "N/A",
        };

        try {
            // emailjs send
            await emailjs.send(
                "service_xgfdg0g",   // replace with your service id
                "template_03yzz97",  // replace with your template id
                templateParams,
                "9UEFdZsBGg4AzHWtg"    // replace with your public key
            );

            Swal.fire({
                title: '✨ Booking Confirmed!',
                text: `Thank you ${form.firstName} ${form.lastName}, your stay has been booked successfully. A confirmation has been sent to your email.`,
                icon: 'success',
                confirmButtonText: 'OK!',
                confirmButtonColor: '#4F46E5',
                background: '#f9fafb',
            });

            setForm({
                firstName: '',
                lastName: '',
                email: '',
                checkIn: null,
                checkOut: null,
            });
        } catch (error) {
            Swal.fire({
                title: '❌ Booking Failed',
                text: 'Something went wrong while sending confirmation. Please try again.',
                icon: 'error',
                confirmButtonText: 'Retry',
                confirmButtonColor: '#DC2626',
                background: '#fff5f5',
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-2xl p-8">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                    🏨 Book Your Stay
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                            required
                        />

                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                            required
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                                Check-In Date
                            </label>
                            <DatePicker
                                selected={form.checkIn}
                                onChange={(date) => handleDateChange('checkIn', date)}
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                                Check-Out Date
                            </label>
                            <DatePicker
                                selected={form.checkOut}
                                onChange={(date) => handleDateChange('checkOut', date)}
                                className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300"
                    >
                        Confirm Booking ✨
                    </button>
                </form>
            </div>
        </div>
    );
}
