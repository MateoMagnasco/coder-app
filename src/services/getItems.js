

function getItemList () {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve ([{id:"1", title: "Les Paul", price:"$100", pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJU8Zj0OJhoKqd4kifQXRM2XPFzbs481VmA&usqp=CAU", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 1, stock: 25},
            {id:"2", title: "Stratocaster", price:"$150", pictureUrl: "https://image.shutterstock.com/image-photo/zagreb-croatia-may-27-2010-260nw-170206409.jpg", description: "Una guitarra para tocar todo tipo de música, guitarristas como Eric Clapton y SRV optaban por este estilo de guitarra", categoryId:1, stock: 25},
            {id:"3", title:"Telecaster", price:"$200", pictureUrl: "https://lacasadelmusico.com.ar/wp-content/uploads/2021/02/GUITARRA-TELECASTER-HEG350.jpg", description: "Una guitarra con un sonido muy particular, guitarristas como Izzy Stradlin y Keith Richards optaban por este estilo de guitarra", categoryId: 1, stock: 25},
            {id:"4", title: "Taylor 524ce", price:"$1000", pictureUrl: "https://musicapod.com/wp-content/uploads/2020/07/taylor-524ce.jpg", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 2,stock: 25},
            {id:"5", title: "Gibson J200", price:"$100", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_888178-MLA31583234651_072019-W.jpg", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 2, stock: 25},
            {id:"6", title: "Gibson Hummingbird", price:"$1500", pictureUrl: "https://www.falymusic.com/images/detailed/9/SSHBHCNP8_MAIN_HERO_01_opt.jpg", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 2,stock: 25},
            {id:"7", title: "Gracia Mod", price:"$100", pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYD9398UZyVlZcZMfpMXG7Fo_0vvZ-VA9YQ&usqp=CAU", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 3, stock: 25},
            {id:"8", title: "Nylon 2", price:"$100", pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzyCIEr7rnOOYUTYmG4lWe_BaZuBasu5cyw&usqp=CAU", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 3, stock: 25},
            {id:"9", title: "Nylon 3", price:"$100", pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpY4Gdiq98H5_hx9TVF1hL-XBxdXUBqYBwg&usqp=CAU", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra", categoryId: 3, stock: 25}
        ])
            
        }, 2000);
    })
}

export default getItemList