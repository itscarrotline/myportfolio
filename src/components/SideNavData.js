import React from 'react';
import Emoji from './EmojiComponent'

export const SideNavData = [
  {
    id: 0,
    title: "Home",
    emoji: <Emoji label="heart with sparkles" symbol="💖" />,
    path: "/home",
    className: "nav-text"
  },
  {
    id: 1,
    title: "About",
    emoji: <Emoji label="smiley face with sunglasses" symbol="😎" />,
    path: "/about",
    className: "nav-text"
  },
  {
    id: 2,
    title: "Fashion",
    emoji: <Emoji label="aline dress with belt" symbol="👗" />,
    path: "/fashion",
    className: "nav-text"
  },
  {
    id: 3,
    title: "Photography",
    emoji: <Emoji label="camera" symbol="📷" />,
    path: "/photography",
    className: "nav-text"
  },
];
