'use server';

import { createAdminClient } from '@/config/appwrite';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function getSingleRoom(id: string) {
  try {
    const { databases } = await createAdminClient();

    const room = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );

    //revalidate the cache
    revalidatePath('/', 'layout');

    return room;
  } catch (error) {
    console.log('Failed to Get room', error);
    redirect('/error');
  }
}

export default getSingleRoom;
