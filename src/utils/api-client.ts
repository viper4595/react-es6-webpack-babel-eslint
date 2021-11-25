import apisauce, {
  create,
  ApisauceInstance,
  ApisauceConfig,
  RequestTransform,
  ApiResponse,
  ApiOkResponse
} from 'apisauce'

class ApiClient {
  private token: string
  private baseURL: string
  private apiSauce: ApisauceInstance

  constructor(baseURL: string, timeout?: number) {
    this.baseURL = baseURL
    this.apiSauce = create({ baseURL, timeout })
  }

  setAuthToken(token: string) {
    this.token = token
  }

  request(request: Promise<ApiResponse<any>>): object {
    return request.then((result: ApiResponse<any>) => {
      return result
    })
  }

  get(url: string, config?: object) {
    return this.apiSauce.get(url)
  }

  post(url: string, data: object, config?: object) {
    return this.apiSauce.post(url, data)
  }

  put(url: string, data: object, config?: object) {
    return this.apiSauce.put(url, data, config)
  }

  delete(url: string) {
    return this.apiSauce.delete(url)
  }
}
