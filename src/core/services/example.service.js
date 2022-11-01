import ApiService from './api.service';

export default class ExampleService extends ApiService {
  getExampleData() {
    return this.apiGet('', {}, true);
  }
}
