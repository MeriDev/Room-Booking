import Heading from '@/components/Heading';

const myRooms = () => {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Heading title="My Room Listings" />
        <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">My Room 1</h4>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
            <a
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
            >
              <i className="fa fa-eye"></i> View
            </a>

            <button className="bg-red-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-700">
              <i className="fa fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default myRooms;
