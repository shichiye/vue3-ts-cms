import cyRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return cyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
