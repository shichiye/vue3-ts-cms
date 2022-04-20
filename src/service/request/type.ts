import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface CYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: CYRequestInterceptors<T>
  showLoading?: boolean
}
