import * as React from 'react';

import ImageUploading, {
  ImageListType,
  ImageUploadingPropsType
} from 'react-images-uploading';

import { createPost } from 'api/createPost';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import {
  ImageContainer,
  ImageDropArea,
  ImagePreview,
  ImageRemove
} from 'pages/AddPostPage/appPosts.styled';

export function AddPostsPage() {
  const [title, setTitle] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');
  const [lessonNum, setLessonNum] = React.useState<number>(0);
  const [images, setImages] = React.useState<ImageListType>([]);

  const onChange: ImageUploadingPropsType['onChange'] = (imageList) => {
    setImages(imageList);
  };

  return (
    <div>
      <h1>Add Post</h1>
      <Input
        label="Title"
        value={title}
        onChange={({ currentTarget: { value } }) => setTitle(value)}
      />
      <Input
        label="Text"
        value={text}
        onChange={({ currentTarget: { value } }) => setText(value)}
      />
      <Input
        label="Lesson"
        value={lessonNum}
        type="number"
        onChange={({ currentTarget: { value } }) => setLessonNum(+value)}
      />
      <ImageUploading
        multiple={false}
        allowNonImageType={false}
        value={images}
        onChange={onChange}
        dataURLKey="dataURL"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <ImageContainer>
            {imageList.length === 0 && (
              <ImageDropArea
                isDragging={isDragging}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop Post Image...
              </ImageDropArea>
            )}
            {imageList.map((image, index) => (
              <React.Fragment
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
              >
                <div className="image-item">
                  <ImagePreview
                    src={image.dataURL}
                    alt=""
                  />
                </div>
                <ImageRemove onClick={() => onImageRemove(index)} />
              </React.Fragment>
            ))}
          </ImageContainer>
        )}
      </ImageUploading>

      <Button
        text="Add Post"
        shouldFitContainer
        onClick={() => {
          createPost({
            lessonNum,
            title,
            text,
            image: images[0].file
          })
            .then((post) => console.log(post))
            .catch((err) => console.dir(err));
        }}
      />
    </div>
  );
}
