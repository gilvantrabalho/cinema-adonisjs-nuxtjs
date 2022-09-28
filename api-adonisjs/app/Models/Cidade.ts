import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cidade: string;

  @column()
  public estado: string;

  @column()
  public slug: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
