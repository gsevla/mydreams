import { rest } from "msw";
import { CreateUserInput, UserCredentials } from "../../core/domain/entities";
import { Gender } from "../../core/domain/enums/Gender";

export const handlers = [
  rest.post<UserCredentials>(
    `${process.env.BASE_URL}/user/authenticate`,
    async (req, res, ctx) => {
      const { email } = await req.json();

      return res(
        ctx.status(201),
        ctx.json({
          id: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          email,
          gender: Gender.MALE,
        })
      );
    }
  ),
  rest.post<CreateUserInput>(
    `${process.env.BASE_URL}/user`,
    async (req, res, ctx) => {
      const { email, gender } = await req.json();

      return res(
        ctx.status(201),
        ctx.json({
          id: 1,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          email,
          gender,
        })
      );
    }
  ),
];
