export default {
    namespace:'user',
    state:{
        list:[
            {id:1,name:'hello1',pwd:'123'},
            {id:2,name:'hello2',pwd:'123'},
            {id:3,name:'hello3',pwd:'123'},
            {id:4,name:'hello4',pwd:'123'},
            {id:5,name:'hello5',pwd:'123'},
        ]
    },
    reducer:{
        create(state,{ payload: { user } }){
            return [...state,user];
        },
        delete(state,{payload:id}){
            return state.list.filter(
                (item)=>{
                    return item.id != id;
                }
            );
        },
        get(state,{payload:id}){
            return state.list.filter(
                (item)=>{
                    return item.id == id;
                }
            );
        },
        update(state,{payload:user}){
            for(let i=0;i<state.user.list.length;i++){
                let item = state.user.list[i];
                if(item.id == user.id){
                    state.user.list[i] = user;
                    return state.user;
                }
            }
            return state.user;
        }
    },
    effects:{

    },
    subscriptions:{

    }
}