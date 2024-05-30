import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  return new Promise((resolve) => {
    Promise.all([createUser(), uploadPhoto()]).then(([user, photo]) => {
      resolve({ user, photo });
    }).catch(() => resolve({ user: null, photo: null }));
  });
}
