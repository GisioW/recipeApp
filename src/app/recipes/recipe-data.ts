import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IRecipe } from './recipe';

export class RecipeData implements InMemoryDbService {

  createDb() {
    const recipes: IRecipe[] = [
      {
        id: 1,
        recipeName: 'Salade de Crevettes',
        description: 'Composition de salade avec des mangues rapées avec une vinaigrette comme sauce et des crevettes sauté à feu dou',
        category: 'Omnivore',
        releaseDate: 'December 11, 2016',
        duration: '15',
        ingredients: 'mangues, crevettes, oignons, tomates, sel, poivre, huile, vinaigre',
        starRating: 2,
        imageUrl: '../../assets/images/recipe001.jpg'
      },
      {
        id: 2,
        recipeName: 'Salade de pois chichou',
        description: 'Composition de petits pois, pois chiche et de semoule avec des rondelles de radis',
        category: 'Végan',
        releaseDate: 'March 17, 2015',
        duration: '23',
        ingredients: 'petits pois, pois chiches, semoules, radis, sel, poivre',
        starRating: 3.13,
        imageUrl: '../../assets/images/recipe002.jpg'
      },

      {
        id: 3,
        recipeName: 'Salade Cesar à la painou',
        description: 'Salade composée avec du pain, olives, tomates, oignons et du concombres ',
        category: 'Végétarien',
        releaseDate: 'January 12, 2020',
        duration: '17',
        ingredients: 'pain, huile, vinaigre, sel, poivre, olives, tomates, oignons, concombres',
        starRating: 4,
        imageUrl: '../../assets/images/recipe003.jpg'
      },

      {
        id: 4,
        recipeName: 'Poulet au curry',
        description: 'Poulet au curry accompagné de citron et d oignons et de pains',
        category: 'Omnivore',
        releaseDate: 'September 9, 2019',
        duration: '30',
        ingredients: 'poulet, curry, huile, sel, poivre, oignons, citron, farine, oeufs',
        starRating: 1.67,
        imageUrl: '../../assets/images/recipe004.jpg'
      },
      {
        id: 5,
        recipeName: 'Steak salade',
        description: 'Stack salade avec sauce piment avec du salade et du citron',
        category: 'Omnivore',
        releaseDate: 'February 28, 2019',
        duration: '45',
        ingredients: 'viande de beouf, tomates, salade, piments, citrons',
        starRating: 4.43,
        imageUrl: '../../assets/images/recipe006.jpg'
      }
    ];
    return { recipes};
  }

}
