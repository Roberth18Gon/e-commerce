//creación de vue
new Vue({
    el:'#app',
    data:{
        books:[
            //comienzo de array
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'https://i.pinimg.com/originals/8d/9b/a5/8d9ba5df9a59ec6f73f0a40630247440.jpg',title:'Horror Stories'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'},
            {image:'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg',title:'Cartas desde la isla Skye'}
        ],
        items: 0
            
    },
    methods: {
        addCart: function() {
            var itemsCart = document.getElementById('items');
            this.items++;
            itemsCart.innerText = this.items + ' ITEMS';
        },
        showInfo: function(event) {
           var image = event.target.src;
        }
    }
})
