let app = new Vue({
    el : ".app",
    data: {
        titulo : "Contador",
        contador: 0
    },
    methods: {

        increment(){
            this.contador++
        },

        decrement(){
            this.contador--
        },

    
    }
}
)