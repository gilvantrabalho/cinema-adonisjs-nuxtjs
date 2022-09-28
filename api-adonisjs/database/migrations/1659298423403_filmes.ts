import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'filmes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('img');
      table.string('nome');
      table.string('sub_nome');
      table.string('indicacao');
      table.string('duracao');
      table.string('categorias');
      table.string('link_trailer');
      table.string('sinopse');
      table.string('elenco');
      table.string('direcao');
      table.string('roteiro');
      table.string('producao');
      table.string('status');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
