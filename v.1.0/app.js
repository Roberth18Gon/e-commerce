new Vue({
    el: '#app',
    data: {
        //Array con imagenes de los libros
        books: [
            {image: 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-28.jpg'},
            {image: 'http://3.bp.blogspot.com/-CclwoRgio58/UjidzSg_-oI/AAAAAAAALwE/9TALCs9JmYw/s1600/cartas+desde+la+isla.jpg'},
            {image: 'https://static.inkive.com/assets/img/layouts/EtHjABXYMZH-gK1AYQmJ.jpg'},
            {image: 'https://www.creativosonline.org/blog/wp-content/uploads/2010/04/creativos_online_portadas_libros_inspiracion.png'},
            {image: 'https://i.pinimg.com/736x/ae/18/a3/ae18a3aada7e59bd7822c37b5b4702a5.jpg'},
            {image: 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-24.jpg'},
            {image: 'https://assets2.domestika.org/project-items/002/029/582/05.top-10-libros-ilustrados-big.jpg?1501412355'},
            {image: 'https://i.pinimg.com/originals/bc/30/c5/bc30c58707b8c2d343e18698cbe1a797.jpg'},
            {image: 'https://a.wattpad.com/cover/104041861-352-k312690.jpg'},
            {image: 'https://i.pinimg.com/originals/ca/6e/70/ca6e708aaf2370b6d80bfd121f97f464.jpg'},
            {image: 'http://3.bp.blogspot.com/-NyTfhQ5jqis/VbkZd2r03tI/AAAAAAAABwE/ZVGDUmcXi6w/s1600/0librogay.jpg'},
            {image: 'http://4.bp.blogspot.com/-NxM7B6LRENc/VYce94U6VII/AAAAAAAABg0/XJbLroh9JUo/s1600/12310.jpg'},
            {image: 'https://i.emezeta.com/weblog/portadas-libros/fifty-shades-alice-wonderland.jpg'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/51%2BMSrNiPfL.jpg'},
            {image: 'http://www.power-animals.com/wp-content/uploads/city-of-bones-cover.jpg'},
            {image: 'http://2.bp.blogspot.com/-PQBMe4chlUk/VUe_dKcRA_I/AAAAAAAABVU/848wAZq-MHg/s1600/9788415532767.jpg'},
            {image: 'https://i.pinimg.com/originals/b6/67/18/b66718ce8f027d528bdccff95535dd85.jpg'},
            {image: 'http://www.esferalibros.com/uploads/imagenes/libros/principal/201202/principal-portada-el-gran-libro-de-la-mitologia-griega-es.jpg'},
            {image: 'http://2.bp.blogspot.com/-LDhQaP5y8CM/U8P6hwArxWI/AAAAAAAACPY/rxWlgf31u-8/s1600/Ignite+Me.jpg'},
            {image: 'http://2.bp.blogspot.com/_JXi92wDCOGk/TGF1W98DwWI/AAAAAAAABqI/jmXaiB8h0nE/s1600/Alice+book+cover2.jpg'},
            {image: 'http://2.bp.blogspot.com/-ho2AmW0d35M/VXisfjyPTXI/AAAAAAAARhk/fmAbLid3MxQ/s1600/two-leighann-kopans-one-universe.jpg'},
            {image: 'https://mischievousblog.files.wordpress.com/2014/07/leal.jpg'},
            {image: 'http://pm1.narvii.com/6251/f6fe74fe16b121b26acf2ea7a0d5ef5ca6619041_00.jpg'},
            {image: 'http://3.bp.blogspot.com/-UXRu9v32vGM/UEC83WH6TqI/AAAAAAAABeM/8hdHdHPG04I/s1600/diaF.jpg'},
            {image: 'https://pladlivrosbr8.cdnstatics.com/usuaris/libros/fotos/264/original/263387_portada_amor-se-escribe-con-h-y-otras-maneras-de-decirte-que-te-quiero_andrea-longarela_201710311101.jpg'},
            {image: 'https://i.pinimg.com/736x/41/29/ce/4129ce2d7b4dee25efdc76f1f9665115--fiction-books-book-reviews.jpg'},
            {image: 'http://www.lajiribilla.co.cu/2007/n347_12/portadalibro.jpg'},
            {image: 'https://www.liberespacio.com/wp-content/uploads/2016/09/9788498387544.jpg'},
            {image: 'http://s3-eu-west-1.amazonaws.com/grazia-cdn/wp-content/uploads/2015/04/20143442/2.jpg'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5hD35tWePliOvGLjdhRiK0vTspX0e74YxNRa-g3ZGfzh6JeJXg'},
            {image: 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-14.jpg'},
            {image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQQNcTHpjHSNHXoDkuxnhzH6pHLeQXW3YS5h7Z_K19DLar6HEF4'},
            {image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcT7uTOYuh8QVzqru_kmBGrtWtJvHR69p6c2yC4g3KnIcJXEOE2G'},
            {image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRJWg3Bnk_kdYi0Mv3xXBEGcua_DkDR7R_coVuU9M29_xxvtzA9'},
            {image: 'https://roc21cdn-roc21.netdna-ssl.com/blog/wp-content/uploads/2016/10/portadas-libros-siencia-ficcion-cuatro.jpg'},
            {image: 'https://mischievousblog.files.wordpress.com/2014/07/leal.jpg'},
            {image: 'http://pm1.narvii.com/6251/f6fe74fe16b121b26acf2ea7a0d5ef5ca6619041_00.jpg'},
            {image: 'http://3.bp.blogspot.com/-UXRu9v32vGM/UEC83WH6TqI/AAAAAAAABeM/8hdHdHPG04I/s1600/diaF.jpg'},
            {image: 'https://pladlivrosbr8.cdnstatics.com/usuaris/libros/fotos/264/original/263387_portada_amor-se-escribe-con-h-y-otras-maneras-de-decirte-que-te-quiero_andrea-longarela_201710311101.jpg'},
            {image: 'https://i.pinimg.com/736x/41/29/ce/4129ce2d7b4dee25efdc76f1f9665115--fiction-books-book-reviews.jpg'},
            {image: 'http://www.lajiribilla.co.cu/2007/n347_12/portadalibro.jpg'},
            {image: 'https://www.liberespacio.com/wp-content/uploads/2016/09/9788498387544.jpg'},
            {image: 'http://s3-eu-west-1.amazonaws.com/grazia-cdn/wp-content/uploads/2015/04/20143442/2.jpg'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5hD35tWePliOvGLjdhRiK0vTspX0e74YxNRa-g3ZGfzh6JeJXg'},
            {image: 'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-14.jpg'},
            {image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQQNcTHpjHSNHXoDkuxnhzH6pHLeQXW3YS5h7Z_K19DLar6HEF4'},
            {image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcT7uTOYuh8QVzqru_kmBGrtWtJvHR69p6c2yC4g3KnIcJXEOE2G'},
            {image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRJWg3Bnk_kdYi0Mv3xXBEGcua_DkDR7R_coVuU9M29_xxvtzA9'}
        ],
        //Libros en el carrito
        items: 0
    },
    methods: {
        addBook: function(e) {
            e.preventDefault();
            //Aumenar en 1 la cantidad de items en el carrito
            this.items++;
            let itemsCart = document.getElementById('items-cart');
            //Insertarlos en la etiqueta de carrito
            itemsCart.innerHTML = this.items;
        },
        openModal: function(e) {
            //Obtener el div con id modal 
            let modal = document.getElementById('modal');
            //Obtener imagen del modal
            let imgModal = document.getElementById('img-modal');
            //Mostrar modal cuando de click en la imagen del libro
            modal.style.display = 'block';
            //Obtener src de la imagen del libro e insertarla en la imagen del modal
            imgModal.src = e.target.src;
        },
        closeModal: function(e) {
            //Ocultar ventana modal cuando del click en ella
            let modal = document.getElementById('modal');
            modal.style.display = 'none';
        }
    }
});