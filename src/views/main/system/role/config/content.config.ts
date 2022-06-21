const title = '角色'

const showIndexColumn = true
const showSelectColumn = true

const propList = [
  { prop: 'name', label: '角色名', minWidth: 100 },
  { prop: 'intro', label: '权限介绍', minWidth: 100 },
  { prop: 'createAt', label: '创建时间', minWidth: 200, slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', minWidth: 200, slotName: 'updateAt' },
  { label: '操作', minWidth: 120, slotName: 'handler' }
]

export const contentTableConfig = {
  title: title,
  showIndexColumn: showIndexColumn,
  showSelectColumn: showSelectColumn,
  propList: propList
}
