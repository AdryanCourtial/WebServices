import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RECIPE_STATUSES, type RecipeStatus } from '@recipes/contracts';

// Fields are filled by Mongoose, never by a constructor: hence the `!`
@Schema({ timestamps: true })
export class Recipe {
  createdAt!: Date;

  /** Written by the enricher, empty until then */
  @Prop({ default: '' })
  description!: string;

  @Prop({ default: [], type: [String] })
  ingredients!: string[];

  /** Id of the author in the user service: no join between two databases */
  @Prop({ index: true, required: true })
  ownerId!: string;

  @Prop({ default: 'pending', enum: RECIPE_STATUSES, type: String })
  status!: RecipeStatus;

  @Prop({ default: [], type: [String] })
  steps!: string[];

  @Prop({ required: true, trim: true })
  title!: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
