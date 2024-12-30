// import rooms from '@/data/rooms.json';
import getAllRooms from './actions/getAllRooms';

import Heading from '@/components/Heading';
import RoomCard from '@/components/RoomCard';

async function Home() {
  const rooms = await getAllRooms();

  return (
    <>
      {rooms.length > 0 ? (
        <div>
          <Heading title="Available Rooms" />
          {rooms.map(room => (
            <RoomCard key={room.$id} room={room} />
          ))}
        </div>
      ) : (
        <p>No rooms available at the moment.</p>
      )}
    </>
  );
}

export default Home;
