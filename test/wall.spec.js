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
          userPhoto: 'photo.jpg',
          image: 'myImagen1.jpg'
        },
        UN3nm7kO: 
        {
          content: 'agregando otro post',
          likes: 0,
          state: 'public',
          user: 'user-a',
          userId: '9URN4KSD9kw9HKNlo47B',
          userPhoto: 'photo.jpg',
          image: 'myImagen2.jpg'
        },
        KJ8v55TS: 
        {
          content: 'otro post privado',
          likes: 0,
          state: 'private',
          user: 'user-a',
          userId: '9URN4KSD9kw9HKNlo47B',
          userPhoto: 'photo.jpg',
          image: 'myImagen3.jpg'
        },
      }
    }
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { createPost, getAllPosts, getPublicPosts, updatePost, deletePost, uploadImage, likePost } from '../src/controller/wall.js';

describe('getPublicPosts', () => {
     it('No debería leer todos los posts privados', (done) => {
    return getPublicPosts((data) => {
        const result = data.find((post) => post.state === 'private');
        expect(result).toBe(undefined);
        done();
      }
    )
  })

   it('debería leer todos los posts públicos', (done) => {
    return getPublicPosts((data) => {
        const result = data.filter((post) => post.state === 'public');
        expect(result.length).toBe(1);
        expect(result[0].content).toBe('agregando otro post');
        done();
      }
    )
  })
});

describe('getAllPosts', () => {
	it('debería leer todos los posts', (done) => {
    return getAllPosts((data) => {
        const result = data.filter((post) => post.state);
        expect(result.length).toBe(3);
        done();
      }
    )
  })

    it('debería leer todos los posts privados', (done) => {
    return getAllPosts((data) => {
        const result = data.filter((post) => post.state === 'private');
        expect(result.length).toBe(2);
        done();
      }
    )
  })

   it('debería leer todos los posts públicos', (done) => {
    return getAllPosts((data) => {
        const result = data.filter((post) => post.state === 'public');
        expect(result.length).toBe(1);
        expect(result[0].content).toBe('agregando otro post');
        done();
      }
    )
  })
});

describe('createPost', () => {
  it('debería ser una función', () => {
    expect(typeof createPost).toBe('function');
  })

  it('deberia agregar un post', (done) => {
  	return createPost('9URN4KSD9kw9HKNlo47B', 'user-a', 'photo.jpg', 'This is a post content', 'private')
    .then(() => getAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'This is a post content');
    	expect(result.content).toBe('This is a post content');
    	done();
      }
    ));
  })
});

describe('deletePost', () => {
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
});

describe('updatePost', () => {
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

describe('likePost', () => {
  it('debería ser una función', () => {
    expect(typeof likePost).toBe('function');
  });
  it('Debería poder dar like', (done) => {
  return likePost('GJR4GH4f', 1 )
  .then(() => getAllPosts(
    (data) => {
      const result = data.find((post) => post.likes === 1);
      expect(result.likes).toBe(1);
      done()
    }
  ))
})
})





