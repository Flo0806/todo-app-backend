import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema() // Eine "Blaupause" für Mongoose
export class Todo {
  id: string; // Die ID kommt von MongoDB - KEIN Prop!
  @Prop({ required: true })
  public title: string;
  @Prop({ required: true })
  public description: string;
  @Prop()
  public done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
