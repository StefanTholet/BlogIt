import style from './HeadingWithDescription.module.css';

const HeadingWithDescription = ({heading, description}) => {

    return (
        <div className={style["featured-posts"]}>
        <h2>{heading}</h2>
        <p>{description}</p>
        </div>
    );
}

export default HeadingWithDescription