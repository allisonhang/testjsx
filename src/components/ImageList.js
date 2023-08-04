import ImageShow from "./ImageShow";

const ImageList = ({images}) => {
    const renderedImages = images.map((image) => <ImageShow key={image.id} image={image} />)
    return(<div>{renderedImages} </div>)
}
export default ImageList;