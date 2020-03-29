export default{
    namespaced:true,
    state: {
        favoriteLists:[]
      },
      mutations: {
        addFavorite(state,favorite){
              state.favoriteLists.push(favorite)
          },
        delFavorite(state,favorite){
              state.favoriteLists.splice(state.favoriteLists.findIndex(item=>item.id == favorite.id),1)

          }
      },
      actions: {
      },
      modules: {

      }
}