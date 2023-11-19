import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// By creating the UserDocument type as an intersection of User and Document,
// you are essentially saying that instances of UserDocument will have all the
// properties and methods of both the User schema and the Document type.

// This is useful when you want to work with documents retrieved from the database.
// For example, when you query the database using Mongoose, the result will be of
// type UserDocument, allowing you to access both the fields defined in your schema (User)
// and the methods provided by the Mongoose Document.
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userID: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop([String])
  favoriteFoods: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
