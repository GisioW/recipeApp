import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IRecipe } from './recipe';

export class RecipeData implements InMemoryDbService {

  createDb() {
    const recipes : IRecipe[] = [
      {
        id: 1,
        recipeName: 'Grilled Beaf',
        description: '',
        category: 'Meat',
        realeseDate: '',
        duration: '45',
        ingredients: '',
        starRating: 4.5,
        imageUrl: ''
      },
      {
        id: 2,
        recipeName: 'Grilled Beaf',
        description: '',
        category: 'Meat',
        realeseDate: '',
        duration: '45',
        ingredients: '',
        starRating: 4.5,
        imageUrl: ''
      },

      {
        id: 3,
        recipeName: 'Grilled Beaf',
        description: '',
        category: 'Meat',
        realeseDate: '',
        duration: '45',
        ingredients: '',
        starRating: 4.5,
        imageUrl: ''
      },

      {
        id: 4,
        recipeName: 'Grilled Beaf',
        description: '',
        category: 'Meat',
        realeseDate: '',
        duration: '45',
        ingredients: '',
        starRating: 4.5,
        imageUrl: ''
      },
      {
        id: 5,
        recipeName: 'Grilled Beaf',
        description: '',
        category: 'Meat',
        realeseDate: '',
        duration: '45',
        ingredients: ''
        starRating: 4.5,
        imageUrl: ''
      }
    ]
    return { recipes};
  }

}
