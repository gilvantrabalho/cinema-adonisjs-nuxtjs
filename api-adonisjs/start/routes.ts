/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('login', async ({ auth, request, response }) => {
        const username = request.input('username')
        const password = request.input('password')
        const token = await auth.use('api').attempt(username, password)
        response.send(token);
    })

    Route.get('user', async ({ auth, response }) => {
        await auth.use('api').authenticate()
        response.send({
            user: auth.use('api').user!
        });
    });

    Route.post('logout', async ({ auth }) => {
        await auth.use('api').revoke()
        return {
            revoked: true
        }
    })
}).prefix('auth')

Route.group(() => {
    Route.post('create', 'UsersController.index');
}).prefix('user');

Route.group(() => {
    Route.get('read', 'FilmesController.index');
}).prefix('filmes')

Route.group(() => {
    Route.get('get-all', 'CidadesController.index');
}).prefix('cidades');