// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { schema } from '@ioc:Adonis/Core/Validator';
import User from 'App/Models/User';
import Hash from '@ioc:Adonis/Core/Hash'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {

    public async index({ response, request }) {
        const data = request.only(['name', 'email', 'password']);

        // const hashed = await Hash.make(data.password);
        // return request.all( await Hash.make(data.password) );

        // return response.send(data);
        // const payload = await request.validate({
        //     schema: schema.create({
        //         name: schema.string.nullable(),
        //         email: schema.string.nullable(),
        //         password: schema.string.nullable(),
        //     })
        // });

        // return response.send({
        //     validate: payload
        // });

        const emailValid = await Database.from('users')
            .where('email', data.email).first();

        if (emailValid) {
            return response.send({
                error: true,
                response: {
                    message: "E-mail já cadastrado. Tente outro!"
                }
            });
        }

        const use = await User.create({
            name: data.name,
            email: data.email,
            password: await Hash.make(data.password)// await Hash.make(data.password)
        });

        response.send({
            error: false,
            response: {
                use: use,
            }
        });
    }

}
