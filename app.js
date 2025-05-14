const app = Vue.createApp({

    data() {
        return{
            showBooks: true,
            title : "Book",
            author: "Sarthak",
            age: "40"
        }

    },
    methods : {
        changeAuthor() {
            this.author = 'Pradhan'
        },
        
        hideBooks() {
            this.showBooks = !this.showBooks
        },
       
    }
})


app.mount('#app')