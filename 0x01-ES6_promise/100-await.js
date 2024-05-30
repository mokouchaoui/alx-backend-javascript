import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [user, photo] = await Promise.all([createUser(), uploadPhoto()]);
    return { user, photo };
  } catch (err) {
    return {
      user: null,
      photo: null,
    };
  }
}
