import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdbConfigs from "../api/configs/tmdb.config";
import { HeroSlide, Container, MediaSlide } from "../components";
import { Box } from "@mui/material";
import uiConfigs from "../configs/ui.configs";

const Home = () => {
  const dispatch = useDispatch();
  // const {}=useSelector()
  // console.log(`${tmdbConfigs.mediaType.movie} || ${tmdbConfigs.mediaCategory.popular}` );
  return (
    <>
      <HeroSlide
        mediaType={tmdbConfigs.mediaType.movie}
        mediaCategory={tmdbConfigs.mediaCategory.popular}
      />

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="popular movies">
          <MediaSlide
            mediaType={tmdbConfigs.mediaType.movie}
            mediaCategory={tmdbConfigs.mediaCategory.popular}
          />
        </Container>
        <Container header="popular series">
          <MediaSlide
            mediaType={tmdbConfigs.mediaType.tv}
            mediaCategory={tmdbConfigs.mediaCategory.popular}
          />
        </Container>
        <Container header="top rated movies">
          <MediaSlide
            mediaType={tmdbConfigs.mediaType.movie}
            mediaCategory={tmdbConfigs.mediaCategory.top_rated}
          />
        </Container>
        <Container header="top rated series">
          <MediaSlide
            mediaType={tmdbConfigs.mediaType.tv}
            mediaCategory={tmdbConfigs.mediaCategory.top_rated}
          />
        </Container>
      </Box>
    </>
  );
};

export default Home;
