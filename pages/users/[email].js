import classNames from "classnames";
import { useState, useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProfileTabs from "../../components/ProfileTabs";
import ShelfListItem from "../../components/ShelfListItem";
import TinyBook from "../../components/TinyBook";

export default withPageAuthRequired(Profile);

function Profile(req, res) {
  const [currentUser, setCurrentUser] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const { user, isLoading } = useUser(); // user object from Auth0

  const pathName = window.location.pathname;
  const email = pathName.substring(pathName.lastIndexOf("/") + 1);

  async function getUser() {
    const currentUser = await fetch(`/api/users/${email}`).then((res) => res.json());
    setCurrentUser(currentUser);
  }

  async function getFollowers() {
    const followersResponse = await fetch(`/api/users/${email}/follows`).then((res) => res.json());
    setFollowers(followersResponse);
  }

  async function getFollowings() {
    const followingResponse = await fetch(`/api/users/${email}/follows`).then((res) => res.json());
    setFollowing(followingResponse);
  }

  useEffect(() => {
    getUser();
    getFollowers();
    getFollowings();
  }, [user]);
  if (currentUser) {
    return (
      <main className={classNames("flex flex-col space-y-6", "md:my-9")}>
        <div
          className={classNames("bg-neutral-900 w-full rounded-lg pt-3", "md:p-7 md:rounded-xl")}>
          {/* If user show profile */}
          <div
            className={classNames(
              "flex flex-row items-center w-full space-x-3  px-3 mb-5",
              "md:space-x-6 md:px-0"
            )}>
            {/* profile picture is tied to auth0 not our db */}
            <img
              src={user.picture}
              className={classNames("rounded-full w-24 shadow-2xl", "")}></img>

            {/* profile info */}
            <div className={classNames("flex flex-col space-y-1", "md:space-y-2")}>
              {/* name */}
              <h1 className={classNames("text-xl", "md:text-3xl")}>{currentUser.email}</h1>

              {/* profile numbers */}
              <div className={classNames("flex flex-row space-x-4", "")}>
                {/* follower count */}
                <div className={classNames("flex flex-row items-center text-white/70", "")}>
                  <h3 className={classNames("text-sm", "")}>{followers.length} Followers</h3>{" "}
                </div>

                {/* following count */}
                <div className={classNames("flex flex-col items-center text-white/70", "")}>
                  <h3 className={classNames("text-sm", "")}>{following.length} Following</h3>{" "}
                </div>
              </div>
            </div>
          </div>
          <p>{user.email == currentUser.email ? "Is Owner" : "Not Owner"}</p>
          <ProfileTabs user={user} followers={followers} following={following} />
          {/* End of profile */}
        </div>
      </main>
    );
  } else {
    return (
      <main className={classNames("flex flex-col space-y-6", "md:my-9")}>
        <div
          className={classNames("bg-neutral-900 w-full rounded-lg pt-3", "md:p-7 md:rounded-xl")}>
          <h3 className={classNames("text-xl", "md:text-3xl")}>User does not exist</h3>
        </div>
      </main>
    );
  }
}
