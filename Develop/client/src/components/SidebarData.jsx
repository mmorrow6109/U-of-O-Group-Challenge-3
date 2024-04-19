import React from "react";
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import GradeIcon from '@mui/icons-material/Grade';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const SidebarData = [
    {
        title: "Home",
        icon: <CameraIndoorIcon />,
        link: "/",
    },
    {
        title: "Liked",
        icon: <ThumbUpIcon />,
        link: "/liked"
    },
    {
        title: "Saved",
        icon: <GradeIcon  />,
        link: "/saved"
    },
    {
        title: "Friends",
        icon: <PeopleAltIcon  />,
        link: "/friends"
    },
]
   
