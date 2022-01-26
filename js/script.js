new Vue({
    el:"#app",
    data:{
        tasks:[
            {
                text:'Fare la spesa',
                done:true
            },
            {
                text:'Andare dal medico',
                done:false
            },
            {
                text:'Portare fuori il cane',
                done:true
            }
        ],
        temporaryTask:{
            text:'',
            done:false
        },
    },
    methods:{
        removeTask:function(index){
            this.tasks.splice(index,1);
        },
        addTask:function(){
            this.tasks.push(this.temporaryTask);
            this.temporaryTask={
                text:'',
                done:false
            }
        },
        check:function(index){
           this.tasks[index].done=!this.tasks[index].done
        }

    }

})