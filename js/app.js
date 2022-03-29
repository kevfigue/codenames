Vue.component('counter', {
    props:['message'],
    data:function(){

        return{
            count:0,
            toggle:false,
            
        }
    },
    template:'<div v-on:click="count++">{{message}}</div>'
})

var app =new Vue({
    el:"#app",
    data:{
        text:"",
        email:"",
        mess:"",
        mess2:"",
        submitted:"",
        list:[{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}]
    },
    watch:{
        text: function(){
            if(this.text.length>1){
                this.mess=""
                this.mess2=""
                this.submitted="Submitted"
            }else {
                this.mess="Name needs to have at least 2 characters."
                this.mess2="Email needs to be a valid email address."
                this.submitted="Not Submitted"
            }
        }
    }
})
