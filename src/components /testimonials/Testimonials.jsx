import './testimonials.scss'

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: 'Senior Developer',
            img: 'https://cdn.pixabay.com/photo/2020/02/24/04/25/web-design-4875183_1280.jpg',
            icon: 'assets/twitter.png',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam molestiae sequi eum ",

        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: 'Co-Funder of DELKA',
            img: 'https://www.elegantthemes.com/blog/wp-content/uploads/2021/04/web-design-blogs-to-follow-featured-image.jpg',
            icon: 'assets/youtube.png',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam molestiae sequi eum ",
            featured: true,

        },
        {
            id: 3,
            name: "Martin Harold",
            title: 'CEO of ALBI',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOd0wqQHgaZBDPfmORjFYwqZT2fYKa9te5A&usqp=CAU',
            icon: 'assets/linkedin.png',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quam molestiae sequi eum ",
        },
    ];


    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (


                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className='left' alt="" />

                            <img className='user' src={d.img} alt="" />


                            <img className='right' src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}

                        </div>

                        <div className="bottom">

                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}
