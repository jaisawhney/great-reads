import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import classNames from "classnames";
import ShelfListItem from "../components/ShelfListItem";
import ProfileTabs from "../components/ProfileTabs";
import TinyBook from "../components/TinyBook";

export default withPageAuthRequired(MyProfile);

function MyProfile(){
  // user object from Auth0
  const { user, isLoading } = useUser();
  const following = 43;
  const followers = 34;
  console.log(user.picture);
  
  console.log(user.email)
  fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email
      })
  }).then(res => res.json())
      .then(res => {
        console.log('currentUser:', res);
      });
  
  return (
    <main className={classNames("flex flex-col space-y-6","")}>

      {/* profile row */}
      <div className={classNames("flex flex-row items-end w-full space-x-3","md:space-x-6")}>

        {/* profile picture */}
        {/* TROUBLE LOADING CONSISTENTLY */}
        <img src={user.picture} className={classNames("rounded-sm w-16 shadow-2xl", "w-24")}></img>


        {/* profile info */}
        <div className={classNames("flex flex-col space-y-1","md:space-y-2")}>

          {/* name */}
          <h1 className={classNames("text-xl","md:text-3xl")}>{user.name}</h1>

          {/* profile numbers */}
          <div className={classNames("flex flex-row space-x-4","")}>

            {/* follower count */}
            <div className={classNames("flex flex-row items-center text-white/70","")}>
              <h3 className={classNames("text-sm","")}>{followers} Followers</h3>
            </div>

            {/* following count */}
            <div className={classNames("flex flex-col items-center text-white/70","")}>
              <h3 className={classNames("text-sm","")}>{following} Following</h3>
            </div>
          </div>

        </div>

      </div>

      {/* THESE TABS ARE IN PROGRESS */}
      <ProfileTabs />

    </main>
  );
}


// className={classNames("","")}