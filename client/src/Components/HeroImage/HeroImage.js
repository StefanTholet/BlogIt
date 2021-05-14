
const HeroImage = (props) => {
    const { imageSrc, styles } = props;

    return (
        <div 
         style= {
             styles ? styles
             :
             {
                 width: '100%',
                 height: '675px',
                 backgroundImage: `url(${imageSrc})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover'
             }
         }>

         </div>
    );
}

export default HeroImage;