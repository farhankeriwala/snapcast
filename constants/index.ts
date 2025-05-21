import VideoCard from "@/components/VideoCard";
import React from "react";

export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  CDN_URL: "https://fgk-digital-snapcast.b-cdn.net",
  TRANSCRIPT_URL: "https://vz-a2d6ab79-521.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/fgk-digital-snapcast",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "Sample Video",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date('2023-10-01'),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 100,
    visibility: "public",
    duration: 156
  },
  {
    id: "2",
    title: "How to Code in React",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date('2023-10-05'),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 245,
    visibility: "public",
    duration: 320
  },
  {
    id: "3",
    title: "NextJS Tutorial",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date('2023-10-10'),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 189,
    visibility: "public",
    duration: 240
  },
  {
    id: "4",
    title: "CSS Tips and Tricks",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date('2023-10-15'),
    userImg: "/assets/images/mike.png",
    username: "Mike",
    views: 320,
    visibility: "public",
    duration: 180
  },
  {
    id: "5",
    title: "JavaScript Fundamentals",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date('2023-10-20'),
    userImg: "/assets/images/emma.png",
    username: "Emma",
    views: 410,
    visibility: "public",
    duration: 275
  },
  {
    id: "6",
    title: "UI/UX Design Basics",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date('2023-10-25'),
    userImg: "/assets/images/alex.png",
    username: "Alex",
    views: 150,
    visibility: "public",
    duration: 200
  },
  {
    id: "7",
    title: "Web Development Workflow",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date('2023-10-28'),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 280,
    visibility: "public",
    duration: 310
  },
  {
    id: "8",
    title: "Responsive Design Tutorial",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date('2023-10-30'),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 195,
    visibility: "public",
    duration: 225
  }
]
