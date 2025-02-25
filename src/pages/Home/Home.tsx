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
  const { profile } = useLiff();

  return (
    <div className="home">
      {profile && (
        <div className="profile">
          <img
            className="profile-image"
            src={profile?.pictureUrl}
            alt="line profile"
          />
          <h2>{profile.displayName}</h2>
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
