import React, { useEffect, useState } from "react";
import "./style.css";
import { Icon } from "../../components";
import { useLiff } from "../../context/useLiff";
import { Link } from "react-router";

type TIconList = {
  label: string;
  icon: string;
  path: string;
};

const iconList: TIconList[] = [
  { label: "profile", icon: "user", path: "/profile" },
  { label: "clock", icon: "clock", path: "/clock" },
  { label: "calculator", icon: "calculator", path: "/cal" },
  { label: "more", icon: "more", path: "/more" },
] as const;

export function Home() {
  const { userId, pictureUrl, displayName } = useLiff();

  return (
    <div className="home">
      {userId && (
        <div className="profile">
          <img
            className="profile-image"
            src={
              pictureUrl ??
              "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            }
            alt="line profile"
          />
          <h2>{displayName}</h2>
        </div>
      )}
      <div className="menu">
        {iconList.map(({ label, icon, path }, i) => (
          <Link key={i} to={path}>
            <Icon label={label} icon={icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
