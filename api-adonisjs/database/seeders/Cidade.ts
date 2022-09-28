import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cidade from 'App/Models/Cidade';

export default class extends BaseSeeder {

  public async run() {
    await Cidade.createMany([
      {
        cidade: 'Barueri',
        estado: 'SP',
        slug: 'barueri'
      },
      {
        cidade: 'Bauru',
        estado: 'SP',
        slug: 'bauru'
      },
      {
        cidade: 'Belém',
        estado: 'PA',
        slug: 'belem'
      },
      {
        cidade: 'Goiânia',
        estado: 'GO',
        slug: 'goiania'
      },
      {
        cidade: 'Belo Horizonte',
        estado: 'MG',
        slug: 'belo-horizonte'
      },
      {
        cidade: 'Blumenau',
        estado: 'SC',
        slug: 'blumenau'
      }
    ])
  }

}

//  - 
//  - 
//  - 
//  - 
//  - 
// Campinas - SP
// Campo Grande - MS
// Carapicuíba - SP
// Cariacica - ES
// Caxias do Sul - RS
// Cuiabá - MT
// Curitiba - PR
// Fortaleza - CE
//  - GO
// Guarulhos - SP
// Itaquaquecetuba - SP
// Jaboatão dos Guararapes - PE
// João Pessoa - PB
// Jundiaí - SP
// Lauro de Freitas - BA
// Macapá - AP
// Manaus - AM
// Marília - SP
// Natal - RN
// Olinda - PE
// Ourinhos - SP
// Porto Alegre - RS
// Ribeirão Preto - SP
// Rio de Janeiro - RJ
// Salvador - BA
// Santa Maria - RS
// São Bernardo do Campo - SP
// São Gonçalo - RJ
// São José - SC
// São José do Rio Preto - SP
// São José dos Campos - SP
// São Luís - MA
// São Paulo - SP
// Sorocaba - SP
// Teresina - PI
// Três Lagoas - MS
// Uberlândia - MG