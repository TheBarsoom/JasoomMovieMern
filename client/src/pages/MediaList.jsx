import React from 'react'
import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { HeroSlide, MediaGrid } from '../components';
import { mediaApi, tmdbConfigs } from '../api';
import uiConfigs from '../configs/ui.configs';
import { toast } from 'react-toastify';
import { setAppState } from '../redux/features/appSateSlice';
import { setGlobalLoading } from '../redux/features/globalLoadingSlice';
import usePrevious from "../hooks/usePrevious"
const MediaList = () => {
const {mediaType} =useParams()
const [media,setMedias]=useState([])
const [mediaLoading,setMediaLoading]=useState(false)

const prevMediaType = usePrevious(mediaType);
const dispatch = useDispatch();

const mediaCategories = useMemo(() => ["popular", "top_rated"], []);
const category = ["popular", "top rated"];



useEffect(() => {
  dispatch(setAppState(mediaType));
  window.scrollTo(0, 0);
}, [mediaType, dispatch]);
  return (
    <div>
      MediaList
    </div>
  )
}

export default MediaList
