import axios, { AxiosInstance } from "axios";
import { Product } from "~/types/product";
import { InterfaceApi } from "./interfaceApi";

export class ApiClient implements InterfaceApi {
  client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: 'http://seven-app-ike-moku.herokuapp.com'
      // baseURL: 'https://example.com/api/v1'
    })
  }
  // http://seven-app-ike-moku.herokuapp.com/
  async fetchAPI(): Promise<Product[]> {
    // prod
    // const response = await this.client.get<any[]>('/api/v1/223/0062.json');
    const response = await this.client.get<any[]>('/');
    return response.data;

    // mock
    // const data: Product[] = [
    //   {
    //     id: 1,
    //     category: "弁当",
    //     name: "焼肉弁当",
    //     price: 500,
    //     image: 'https://img.7api-01.dp1.sej.co.jp/item-image/140070/AB52A01A9D707E08388655C41B613141.jpg'
    //   },
    //   {
    //     id: 2,
    //     category: "カフェ",
    //     name: "カフェラテ",
    //     price: 200,
    //     image: 'https://img.7api-01.dp1.sej.co.jp/item-image/140070/AB52A01A9D707E08388655C41B613141.jpg'
    //   },
    //   {
    //     id: 3,
    //     category: "サラダ",
    //     name: "すごいサラダ",
    //     price: 300,
    //     image: 'https://img.7api-01.dp1.sej.co.jp/item-image/140070/AB52A01A9D707E08388655C41B613141.jpg'
    //   }
    // ]
    // return data
  }
}