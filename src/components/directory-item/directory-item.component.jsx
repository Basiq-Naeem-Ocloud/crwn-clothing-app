import {DirectoryItemContainer, Body, BackgroundImage} from "./directory-item.styles";

import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }) => {

    const {imageUrl, title, route} = category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>


      {/* we can pass the image url to styled component as props*/}
      <BackgroundImage
        imageUrl={imageUrl} 
      />

      <Body>
        <h2>{title}</h2>
 
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
