
import axios from 'axios'

export default class ProductService {
    getProductsSmall() {
		return axios.get('https://dummyjson.com/products')
		.then(res => res.data)
	}
}

