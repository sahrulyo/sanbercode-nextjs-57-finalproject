import { useQuery } from '@tanstack/react-query'; 
import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const fetchPosts = async () => {
  try {
    console.log('Fetching posts...');
    const postsCollection = collection(db, 'posts');
    const querySnapshot = await getDocs(postsCollection);
    const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched posts:', posts);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
};

export const usePostsQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    onError: (error) => {
      console.error('Error loading posts:', error);
    }
  });
};
