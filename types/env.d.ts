export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_APPWRITE_KEY: string;
      NEXT_PUBLIC_APPWRITE_ENDPOINT: string;
      NEXT_PUBLIC_APPWRITE_PROJECT: string;
      NEXT_PUBLIC_APPWRITE_DATABASE: string;
      NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS: string;
      NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS: string;
      NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_AVATARS: string;
      NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS: string;
      NEXT_PUBLIC_URL: string;
    }
  }
}
