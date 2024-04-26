import { useLocation } from "react-router-dom";
import Header from "components/Header";
import { ProfileBackCont } from "./ProfileHeader.styled";
import { MainContainer } from "layouts/MainContainer.styled";
import BackHomeBtn from "components/Auth/BackHomeBtn";

const ProfileHeader = ({ children, classN }) => {
  const location = useLocation();

  return (
    <>
      <Header />
      <ProfileBackCont className={classN} />
      <MainContainer>
        <BackHomeBtn
          variant="profile"
          text="profile.back"
          to={location?.state?.from ?? "/"}
        />
        {children}
      </MainContainer>
    </>
  );
};

export default ProfileHeader;
