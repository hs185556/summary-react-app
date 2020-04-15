export default {
    namespace:'user',
    state:{
        list:[
            {id:'1',name:'hello1',pwd:'123'},
            {id:'2',name:'hello2',pwd:'123'},
            {id:'3',name:'hello3',pwd:'123'},
            {id:'4',name:'hello4',pwd:'123'},
            {id:'5',name:'hello5',pwd:'123'},
        ]
    },
    reducers:{
        create(state,{ payload: { user } }){
            state.list.push(user)
            const list = [...state.list];
            return {...state,list};
        },
        remove(state,{payload:id}){
            let list = state.list.filter(
                (item)=>{
                    return item.id != id;
                }
            );
            return {...state,list};
        },
        update(state,{payload:{user}}){
            let list = state.list.map((item)=>{
                if(item.id == user.id)return user;
                return item;
            })
            return{...state,list}
        }
    },
    effects:{
        
    },
    subscriptions:{
    },
}