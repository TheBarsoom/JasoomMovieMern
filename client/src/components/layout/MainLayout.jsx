import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { GlobalLoading, Footer, Topbar, AuthModal } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setListFavorites, setUser } from "../../redux/features/userSlice";
import userApi from "../../api/modules/user.api";

const MainLayout = () => {
  //saving user data
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.getInfo();
      console.log(`Response`);
      console.log(response);
      if (response) dispatch(setUser(response));
      if (err) dispatch(setUser(null));
    };

    authUser();
    console.log(user);
  }, [dispatch]);
  return (
    <>
      <GlobalLoading />
      <AuthModal />

      <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
        <Topbar />
        <Box flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
