const ImageShow = ({key, image}) => {
    return(
        <div id={key}>
             <p>Description: {image.description ||image.alt_description}</p>
            <p>Updated at: {image.updated_at}</p>
           
            <img src={image.urls.thumb}/>

        </div>
    )
}

export default ImageShow