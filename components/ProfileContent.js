import classNames from "classnames";
import Image from "next/image";
import ProfileTabs from "./ProfileTabs";

export default function ProfileContent(props) {
  function followerUser() {
    fetch(`/api/users/${props.user.internalId}/follow`, {
      method: "POST",
    });
  }

  return (
    <main className={classNames("flex flex-col space-y-6", "md:my-9")}>
      <div className={classNames("bg-neutral-900 w-full rounded-lg pt-3", "md:p-7 md:rounded-xl")}>
        {/* Profile detail */}
        <div
          className={classNames(
            "flex flex-row items-center w-full space-x-3  px-3 mb-5",
            "md:space-x-6 md:px-0"
          )}>
          {/* profile picture is tied to auth0 not our db */}
          <Image src="/images/default.gif" alt="default" width={100} height={100} />

          {/* profile info */}
          <div className={classNames("flex flex-col space-y-1", "md:space-y-2")}>
            {/* name */}
            <h1 className={classNames("text-xl", "md:text-3xl")}>
              {props.currentUser.username}
            </h1>{" "}
            {/* profile numbers */}
            <div className={classNames("flex flex-row space-x-4", "")}>
              {/* follower count */}
              <div className={classNames("flex flex-row items-center text-white/70", "")}>
                <h3 className={classNames("text-sm", "")}>{props.followers.length} Followers</h3>{" "}
              </div>

              {/* following count */}
              <div className={classNames("flex flex-col items-center text-white/70", "")}>
                <h3 className={classNames("text-sm", "")}>{props.following.length} Following</h3>{" "}
              </div>

              {props.user && (
                <div className={classNames("flex flex-col items-center text-white/70", "")}>
                  <button type="button" className={classNames("button")} onClick={followerUser}>
                    Follow
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <ProfileTabs user={props.user} followers={props.followers} following={props.following} />
        {/* End of profile */}
      </div>
    </main>
  );
}
