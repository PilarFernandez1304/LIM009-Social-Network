import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        GJR4GH4f: 
        {
          content: 'este es un post',
          likes: 0,
          state: 'private',
          user: 'user-a',
          userId: '9URN4KSD9kw9HKNlo47B',
          userPhoto: 'photo.jpg'
        },
        UN3nm7kO: 
        {
          content: 'agregando otro post',
          likes: 0,
          state: 'public',
          user: 'user-a',
          userId: '9URN4KSD9kw9HKNlo47B',
          userPhoto: 'photo.jpg'
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { createPost, getAllPosts, getPublicPosts, updatePost, deletePost } from '../src/controller/wall.js';

describe('Crear, modificar, borrar y leer posts', () => {
  it('debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  })

  it('deberia agregar un post', (done) => {
  	return createPost('9URN4KSD9kw9HKNlo47B', 'user-a', 'photo.jpg', 'This is a post content', 'public')
    .then(() => getAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'This is a post content');
    	expect(result.content).toBe('This is a post content');
    	done();
      }
    ));
  })

  it('debería poder eliminar un post', (done) => {
    return deletePost('UN3nm7kO')
    .then(() => getAllPosts(
      (data) => {
        const result = data.find((post) => post.id === 'UN3nm7kO');
        expect(result).toBe(undefined);
        done();
      }
    ));
  })

  it('debería poder modificar un post', (done) => {
    return updatePost('GJR4GH4f', 'Post actualizado', 'public')
    .then(() => getAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'Post actualizado');
    	expect(result.content).toBe('Post actualizado');
    	expect(result.state).toBe('public');
        done();
      }
    ));
  })

})
