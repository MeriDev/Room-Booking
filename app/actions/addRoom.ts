'use server';

import { createAdminClient } from '@/config/appwrite';
import { ID } from 'node-appwrite';
import checkAuth from './checkAuth';
import { revalidatePath } from 'next/cache';

const createRoom = async (previousState, formData) => {
  //create room

  const { databases, storage } = await createAdminClient();

  try {
    const { user } = await checkAuth();
    if (!user) {
      return {
        error: 'You must be logged in to create a room',
      };
    }

    //Image upload
    let imageID;
    const image = formData.get('image');

    if (image && image.size > 0 && image.name !== 'undefined') {
      try {
        const response = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS,
          ID.unique(),
          image
        );
        imageID = response.$id;
        console.log(imageID);
      } catch (error) {
        console.log('Error uploading image', error);
        return {
          error: 'Could not upload image',
        };
      }
    } else {
      console.log('No image file provided or file is invalid');
    }
    //Adding the room
    const roomData = {
      user_id: user.id,
      name: formData.get('name'),
      description: formData.get('description'),
      sqft: formData.get('sqft'),
      capacity: formData.get('capacity'),
      price_per_hour: formData.get('price_per_hour'),
      address: formData.get('address'),
      location: formData.get('location'),
      availability: formData.get('availability'),
      amenities: formData.get('amenities'),
      image: imageID,
    };

    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      ID.unique(),
      roomData
    );

    revalidatePath('/', 'layout');

    return { success: true };
  } catch (error) {
    console.log("Couldn't create room");
    const errorMessage =
      error.response.message || 'An unexpected error has occured';
    return {
      error: errorMessage,
    };
  }
};

export default createRoom;
