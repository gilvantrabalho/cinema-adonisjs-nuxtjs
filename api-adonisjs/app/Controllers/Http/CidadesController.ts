// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cidade from "App/Models/Cidade";

export default class CidadesController {

    public async index({ response }) {
        return Cidade.all();
    }

}