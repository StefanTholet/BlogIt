import style from './SlideshowPosts.module.css';


const Slide = ({ post }) => {
    return (
        <div className={style.slide}
            style={{
                backgroundImage: `url(${post})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%'
            }}
        >

        </div>
    )
}

export default Slide;