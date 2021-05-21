
import style from './SectionHeader.module.css'

const SectionHeader = ({ sectionName }) => {

    return (
        <div className={style["section-header-container"]}>
            <h3 className={style["section-heading"]}>{sectionName}</h3>
            <div className={style["red-bottom-border"]} />
        </div>
    );
}

export default SectionHeader;