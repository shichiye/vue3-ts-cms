import { AxiosRequestConfig } from 'axios'

export interface CYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface CYRequestConfig extends AxiosRequestConfig {
  interceptors?: CYRequestInterceptors
  showLoading?: boolean
}
