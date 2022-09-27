import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import classNames from "classnames";
import ShelfListItem from "../components/ShelfListItem";
import ShelfList from "../components/ShelfList";
import TinyBook from "../components/TinyBook";

// Function below requires auth
export default withPageAuthRequired(MyProfile);

function MyProfile(){
  // user object from Auth0
  const { user, isLoading } = useUser();
  const following = 43;
  const followers = 34;


  return (
    <main className={classNames("flex flex-col space-y-6","")}>

      {/* basic profile info */}
      <div className={classNames("flex flex-col items-start space-y-2 w-full","")}>

        {/* first row */}
        <div className={classNames("flex flex-row space-x-4 items-center"," md:w-full")}>

          {/* profile picture */}
          <img src={user.picture} className={classNames("rounded-sm w-16 shadow-2xl", "w-24")}></img>

          {/* profile numbers */}
          <div className={classNames("flex flex-row space-x-4","")}>

            {/* follower count */}
            <div className={classNames("flex flex-col items-center text-white/70","")}>
              <h3 className={classNames("text-xs","")}>Followers</h3>
              <p className={classNames("text-xs","")}>{followers}</p>
            </div>

            {/* following count */}
            <div className={classNames("flex flex-col items-center text-white/70","")}>
              <h3 className={classNames("text-xs","")}>Following</h3>
              <p className={classNames("text-xs","")}>{following}</p>
            </div>
          </div>

        </div>

        {/* second row*/}
        <div className={classNames("flex flex-row","")}>
          {/* name */}
          <h1 className={classNames("text-2xl","")}>{user.name}</h1>
        </div>
      </div>

      {/* shelves */}
      <ShelfList />

    </main>
  );
}


// className={classNames("","")}