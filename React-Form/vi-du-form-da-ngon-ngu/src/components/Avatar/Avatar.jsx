const Avatar = ({ imgSrc, imgWidth, imgMeta }) => { 
  return (
    <>
      <img src={imgSrc} alt="sample" width={`${imgWidth}px`} />
      <ul>
        <li>Name of image: {imgMeta.name}</li>
        <li>Img id: {imgMeta.id}</li>
      </ul>
    </>
  )
}




export default Avatar;