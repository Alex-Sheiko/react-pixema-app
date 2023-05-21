import { ArrowDownIcon, ArrowRightIcon, UserIcon } from "assets";
import { RouterLink } from "components";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "hooks";
import { ROUTE } from "router";
import { useAppDispatch } from "store";
import { DropDown, DropDownItem, InnerSignIn, Name, ProfileIcon, StyledProfile } from "./styles";

interface ProfileProps {
  name: string;
  isAuth: boolean;
  email: string;
}

export const Profile = ({ name, email, isAuth }: ProfileProps) => {
  const dispatch = useAppDispatch();
  const [dropDownIsActive, toogleDropDown] = useToggle();
  const profileNameWords = name.split(" ");
  const handleName = () => toogleDropDown();
  const handleLogout = () => {
    toogleDropDown();
  };
  return (
    <StyledProfile>
      <ProfileIcon>{name ? `${name[0]}${profileNameWords[1][0]}` : <UserIcon />}</ProfileIcon>
      {isAuth ? (
        <Name onClick={handleName}>
          {name || email} <ArrowDownIcon />
        </Name>
      ) : (
        <RouterLink to={ROUTE.HOME + ROUTE.LOGIN}>
          <InnerSignIn>
            Sign in <ArrowRightIcon />
          </InnerSignIn>
        </RouterLink>
      )}
      <AnimatePresence>
        {dropDownIsActive && (
          <DropDown
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <DropDownItem>
              <RouterLink to={ROUTE.SETTINGS}>Edit Profile</RouterLink>
            </DropDownItem>
            <DropDownItem onClick={handleLogout}>Log Out</DropDownItem>
          </DropDown>
        )}
      </AnimatePresence>
    </StyledProfile>
  );
};
