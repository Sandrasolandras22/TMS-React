import { authorizedAxiosInstance } from 'api/authorizedAxiosInstance';
import { Post } from 'types/posts.types';

const tokenApiPath = `${process.env.REACT_APP_API_PATH}/blog/posts/`;

export async function createPost(params: {
  text: string;
  title: string;
  lessonNum: number;
  image?: File;
}): Promise<Post> {
  const formData = new FormData();

  formData.append('text', params.text);
  formData.append('title', params.title);
  formData.append('lesson_num', `${params.lessonNum}`);
  formData.append('image', params.image || '');

  const { data } = await authorizedAxiosInstance.post<Post>(
    tokenApiPath,
    formData
  );

  return data;
}
