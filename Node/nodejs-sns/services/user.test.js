jest.mock('../models/user');
const User = require('../models/user');
const { follow } = require('./user');

describe('follow', () => {
  test('사용자를 찾아 팔로잉을 추가하고 OK를 반환', async () => {
    User.findOne.mockReturnValue({
      addFollowing(id) {
        return Promise.resolve(true);
      }
    });
    const result = await follow(1, 2);
    expect(result).toEqual('OK');
  });

  test('사용자를 못 찾으면 res.status(404).send(no user)를 호출함', async () => {
    User.findOne.mockReturnValue(null);
    const result = await follow(1, 2);
    expect(result).toEqual('NO USER');
  });

  test('DB에서 에러가 발생하면 next(error) 호출함', async () => {
    const message = 'DB에러';
    User.findOne.mockReturnValue(Promise.reject(message));
    try {
        await follow(1, 2);
    } catch (error) {
        expect(error).toEqual(message);
    }
  });
});