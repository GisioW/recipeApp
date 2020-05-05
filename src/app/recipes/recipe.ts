export interface IRecipe{
  id: number;
  recipeName: string;
  description: string;
  category: string;
  realeseDate: string;
  duration: string;
  ingredients: string;
  starRating: number;
  imageUrl: string;
}

export interface RecipeResolved {
  recipe: IRecipe,
  error?: any;
}
