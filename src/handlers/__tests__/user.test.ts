import * as user from "../user";

describe("User handler function", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "hello", password: "hello" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    const newUser = await user.createNewUser(req, res, () => {});
  });
});
