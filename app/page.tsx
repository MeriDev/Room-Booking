import rooms from '@/data/rooms.json';
import Heading from '@/components/Heading';
import RoomCard from '@/components/RoomCard';

function Home() {
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
        <p>No romms available at the moment.</p>
      )}
    </>
  );
}

export default Home;
