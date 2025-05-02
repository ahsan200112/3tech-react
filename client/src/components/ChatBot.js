// src/components/ChatBot.js
import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJob3N0IjoiaHR0cHM6Ly8zdGVjaC5zYSIsImlkIjoiNjdkZGUwNjdhOTUxNGE0MTgwZDA2ODEwIiwiYWNjSWQiOiI2NzdiYzEwYjMxM2UyMGE5MzViNWQyZDQiLCJpYXQiOjE3NDI1OTQxNTF9.f6S2hBcU2oDB9K7a4lvB3_2zIcJCYUjZ7e5Td0f6AT8";

    (function (w, d, s, u, t) {
      w.Chatty = function (c) {
        w.Chatty._.push(c);
      };
      w.Chatty._ = [];
      w.Chatty.url = u;
      w.Chatty.hash = t;
      const h = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      j.async = true;
      j.src = "https://widget.gallabox.com/chatty-widget.min.js?_=" + Math.random();
      h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://widget.gallabox.com", token);

    return () => {
      const scriptTags = document.querySelectorAll('script[src*="gallabox"]');
      scriptTags.forEach(tag => tag.remove());
      delete window.Chatty;
    };
  }, []);

  return null;
};

export default ChatBot;
