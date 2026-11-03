import test from 'node:test'
import assert from 'node:assert/strict'
import { firstImage, socialImage, absoluteUrl } from '../utils/social.mjs'

test('first Markdown image is selected through nested minimark nodes', () => {
  const body = { type: 'minimark', value: [['p', {}, 'Text', ['img', { src: '/uploads/first.jpg', alt: 'First' }]], ['img', { src: '/second.jpg' }]] }
  assert.equal(firstImage(body).src, '/uploads/first.jpg')
  assert.deepEqual(socialImage({ body }), { url: 'https://www.craigpeters.me/uploads/first.jpg', alt: 'First', isDefault: false })
})
test('explicit image overrides article image; image-free posts use default', () => {
  assert.equal(socialImage({ shareImage: '/cover.png', pictures: '/photo.jpg' }).url, 'https://www.craigpeters.me/cover.png')
  assert.equal(socialImage({ title: 'Text only' }).isDefault, true)
  assert.equal(socialImage({ pictures: '/photo.jpg' }).isDefault, false)
})
test('expanded AST and relative/external URLs are supported', () => {
  assert.equal(firstImage({ children: [{ tag: 'img', props: { src: 'photo.jpg' } }] }).src, 'photo.jpg')
  assert.equal(absoluteUrl('photo.jpg', '/posts/example'), 'https://www.craigpeters.me/posts/photo.jpg')
  assert.equal(absoluteUrl('https://example.com/photo.jpg'), 'https://example.com/photo.jpg')
  assert.equal(absoluteUrl('data:image/png;base64,abc'), undefined)
})
