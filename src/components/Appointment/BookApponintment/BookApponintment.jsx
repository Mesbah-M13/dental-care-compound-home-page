import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookApponintment = ({date}) => {

    const bookingData =[
        {
            id: 1,
            subject: 'Teeth Orthodonics',
            visitingHour: '08.00 AM - 09.00 AM',
            totalSpace: 10,
        },
        {
            id: 2,
            subject: 'Cosmetic Dentistry',
            visitingHour: '09.00 AM - 10.00 AM',
            totalSpace: 8,
        },
        {
            id: 3,
            subject: 'Teeth Cleaning',
            visitingHour: '10.00 AM - 11.00 AM',
            totalSpace: 9,
        },
        {
            id: 4,
            subject: 'Cavity Protection',
            visitingHour: '11.00 AM - 12.00 PM',
            totalSpace: 5,
        },
        {
            id: 5,
            subject: 'Pediatric Dental',
            visitingHour: '06.00 PM - 07.00 PM',
            totalSpace: 10,
        },
        {
            id: 6,
            subject: 'Oral Surgery',
            visitingHour: '07.00 PM - 08.00 PM',
            totalSpace: 10,
        },
    ]
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Abailable appointments on {date.toDateString()}</h2>
            <div className="row">{
                bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id }></BookingCard>)
            }</div>
        </section>
    );
};

export default BookApponintment;