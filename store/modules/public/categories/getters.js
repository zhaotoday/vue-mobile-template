import arrayToTree from 'array-to-tree'

export default {
  tree (state) {
    return arrayToTree(state.list.items, {
      parentProperty: 'parentId'
    })
  }
}
