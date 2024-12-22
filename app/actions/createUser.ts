'use server';

import { createAdminClient } from '@/config/appwrite';
import { ID } from 'node-appwrite';

async function createUser(previousState, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm-password');

  if (!name || !email || !password) {
    return {
      error: 'Please fill out all fields',
    };
  }

  if (password.length < 8) {
    return {
      error: 'Password must be at least 8 characters long',
    };
  }
  if (password !== confirmPassword) {
    return {
      error: 'Passwords do not match',
    };
  }

  //get account
  const { account } = await createAdminClient();

  try {
    account.create(ID.unique(), email, password, name);

    return {
      success: true,
    };
  } catch (error) {
    console.log('Registration error', error);

    return {
      error: 'Could not register user',
    };
  }
}

export default createUser;
