import BookingCard from '@/components/BookingCard';
import Heading from '@/components/Heading';
import getMyBookings from '../actions/getMyBookings';

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <>
      <Heading title="My Bookings" />
      {bookings.length > 0 ? (
        bookings.map(booking => (
          <BookingCard key={booking.$id} booking={booking} />
        ))
      ) : (
        <p className="text-gray-600 mt-4">You have no bookings</p>
      )}
    </>
  );
};

export default BookingsPage;
