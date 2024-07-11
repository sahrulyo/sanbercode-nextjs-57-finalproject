import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { useMutation, useQueryClient } from 'react-query';

export const useAddPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (newPost) => {
      const postsCollection = collection(db, 'posts');
      const docRef = await addDoc(postsCollection, newPost);
      return { id: docRef.id, ...newPost };
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
};

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (postId) => {
      const postRef = doc(db, 'posts', postId);
      await deleteDoc(postRef);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
};

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ postId, updatedPost }) => {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, updatedPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
};
