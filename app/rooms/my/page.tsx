import Heading from '@/components/Heading';
import getMyRooms from '@/app/actions/getMyRooms';
import MyRoomCard from '@/components/MyRoomCard';

import { RoomPropsTypes } from '@/types';

type myRoomType = RoomPropsTypes;

async function myRooms() {
  const rooms = await getMyRooms();

  return (
    <>
      <Heading title="My Rooms" />
      {rooms.length > 0 ? (
        rooms.map(room => <MyRoomCard key={room.$id} room={room} />)
      ) : (
        <p>You have no rooms listings</p>
      )}
    </>
  );
}

export default myRooms;
