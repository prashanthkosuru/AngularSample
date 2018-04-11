import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 1, name: 'Batman' },
        { id: 2, name: 'Superman' },
        { id: 3, name: 'Spiderman' },
        { id: 4, name: 'Ironman' }
    ];
    return {heroes};
  }
}