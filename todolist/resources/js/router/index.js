// import component
import Home from '../views/Home'
import Todo from '../views/Todo'
import AddNew from '../views/AddNew'

export default{
    mode:'history',

    routes:[
        {
        path:'/',
        name:'home',
        component:Home
    
    },
        {
        path:'/todo',
        name:'todo',
        component:Todo
    
    },
        {
        path:'/addnew',
        name:'add.new',
        component:AddNew
    
    },
]
}