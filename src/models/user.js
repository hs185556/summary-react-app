import vars from '../variable'
export default {
    namespace:'user',
    state:{
        list:[
            {id:'1',name:'hello1',pwd:'123'},
            {id:'2',name:'hello2',pwd:'123'},
            {id:'3',name:'hello3',pwd:'123'},
            {id:'4',name:'hello4',pwd:'123'},
            {id:'5',name:'hello5',pwd:'123'},
            {id:'6',name:'hello6',pwd:'123'},
            {id:'7',name:'hello7',pwd:'123'},
            {id:'8',name:'hello8',pwd:'123'},
            {id:'9',name:'hello9',pwd:'123'},
            {id:'10',name:'hello10',pwd:'123'},
            {id:'11',name:'hello11',pwd:'123'},
            {id:'12',name:'hello12',pwd:'123'},
            {id:'13',name:'hello13',pwd:'123'},
            {id:'14',name:'hello14',pwd:'123'},
            {id:'15',name:'hello15',pwd:'123'},
            {id:'16',name:'hello16',pwd:'123'},
            {id:'17',name:'hello17',pwd:'123'},
            {id:'18',name:'hello18',pwd:'123'},
            {id:'19',name:'hello19',pwd:'123'},
            {id:'20',name:'hello20',pwd:'123'},
            {id:'21',name:'hello21',pwd:'123'},
            {id:'22',name:'hello22',pwd:'123'},
            {id:'23',name:'hello23',pwd:'123'},
            {id:'24',name:'hello24',pwd:'123'},
            {id:'25',name:'hello25',pwd:'123'},
            {id:'26',name:'hello26',pwd:'123'},
            {id:'27',name:'hello27',pwd:'123'},
            {id:'28',name:'hello28',pwd:'123'},
            {id:'29',name:'hello29',pwd:'123'},
            {id:'30',name:'hello30',pwd:'123'},
            {id:'31',name:'hello31',pwd:'123'},
            {id:'32',name:'hello32',pwd:'123'},
            {id:'33',name:'hello33',pwd:'123'},
            {id:'34',name:'hello34',pwd:'123'},
            {id:'35',name:'hello35',pwd:'123'},
            {id:'36',name:'hello36',pwd:'123'},
            {id:'37',name:'hello37',pwd:'123'},
            {id:'38',name:'hello38',pwd:'123'},
            {id:'39',name:'hello39',pwd:'123'},
            {id:'40',name:'hello40',pwd:'123'},
        ],
        paginationData:{
            currentPageList:[],
            total:0,
            page:1
        }
    },
    reducers:{
        updateState(state,{payload}){
            /* eslint-disable */
            /* let tmp = {...state,payload} 
            debugger */
            /* eslint-disable */
            return {
                ...state,
                ...payload
            }
        }
    },
    effects:{
        *getPagination({payload:{page,size}},{put,select}){
            const start = (page-1)*size;
            const end = page*size - 1;
            //模拟网络请求到数据
            const _state =  yield select(state=>state) 
            const currentPageList = _state.user.list.filter((item,index)=>{
                if(index>=start&&index<=end)return item;
            })
            const total = _state.user.list.length;
            //调用reducer保存数据
            yield put({
                type:"updateState",
                payload:{
                    paginationData:{
                        currentPageList,
                        total,
                        page
                    }
                }
            })
            return "这是异步返回的数据";
        },
        *createUser({payload:{user}},{put,select}){
            //调取数据
            const _state =  yield select(state=>state) 
            _state.user.list.unshift(user)
            const list = [..._state.user.list];
            //存数据
            yield put({
                type:'updateState',
                payload:{
                    list
                }
            })
            //重新获取数据展示
            yield put({
                type:'getPagination',
                payload:{
                    page:1,
                    size:vars.pageSize
                }
            })
        },
        *removeUser({payload:{id}},{put,select}){
            //调取数据
            const _state =  yield select(state=>state) 
            let list = _state.user.list.filter(
                (item)=>{
                    if(item.id != id)return item;
                }
            );
            //存数据
            yield put({
                type:'updateState',
                payload:{
                    list
                }
            })
            //重新获取数据展示
            yield put({
                type:'getPagination',
                payload:{
                    page:_state.user.paginationData.page,
                    size:vars.pageSize
                }
            })
        },
        *updateUser({payload:{user}},{call,put,select}){ //eslint-disable-line
            //调取数据
            const _state =  yield select(state=>state) 
            let list = _state.user.list.map((item)=>{
                if(item.id == user.id)return user;
                return item;
            })
            //存数据
            yield put({
                type:'updateState',
                payload:{
                    list
                }
            })
            //重新获取数据展示
            yield put({
                type:'getPagination',
                payload:{
                    page:_state.user.paginationData.page,
                    size:vars.pageSize
                }
            })
        },
    },
    subscriptions:{
    },
}