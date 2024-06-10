import { Route, Routes } from "react-router-dom";
import { ProfileSettings } from "./profile-settings/ProfileSettings";
// import { EmailVerificationSubmit } from "./email-verification-submit";

const ProfileModule = () => {
  return (
    <Routes>
      <Route index path="/settings" element={<ProfileSettings />} />
      {/* <Route
        index
        path="/email-verification-submit"
        element={<EmailVerificationSubmit />}
      /> */}
    </Routes>
  );
};
export default ProfileModule;
