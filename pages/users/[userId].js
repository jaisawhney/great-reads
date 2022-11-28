import classNames from "classnames";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import ProfileContent from "../../components/ProfileContent";

export default withPageAuthRequired(Profile);

function Profile(req, res) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const { user, isLoading } = useUser(); // user object from Auth0
  const userId = parseInt(router.query.userId);

  async function getUser() {
    const currentUser = await fetch(`/api/users/${userId}`).then((res) => res.json());
    setCurrentUser(currentUser);
  }

  async function getFollowers() {
    const followersResponse = await fetch(`/api/users/${userId}/follows`).then((res) => res.json());
    setFollowers(followersResponse);
  }

  async function getFollowings() {
    const followingResponse = await fetch(`/api/users/${userId}/following`).then((res) =>
      res.json()
    );
    setFollowing(followingResponse);
  }

  useEffect(() => {
    getUser();
    getFollowers();
    getFollowings();
  }, [user]);
  if (currentUser) {
    return (
      <ProfileContent
        currentUser={currentUser}
        user={user}
        followers={followers}
        following={following}
      />
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
