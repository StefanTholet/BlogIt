import style from './SlideshowPosts.module.css';


const Slide = ({ post, onSlidingPostHover }) => {
    return (
        <div className={style.slide}
            style={{
                backgroundImage: `url(${post})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%'
            }}
            //  onMouseEnter={onSlidingPostHover}
        >

        </div>
    )
}

export default Slide;