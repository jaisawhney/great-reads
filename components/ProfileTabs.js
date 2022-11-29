import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import ShelvesTab from "./ShelvesTab";
import FeedTab from "./FeedTab";
import ReviewsTab from "./ReviewsTab";
import AboutTab from "./AboutTab";
import Followers from "./Followers";
import Following from "./Following";

export default function ProfileTabs(props) {
  const tabStyle =
    "radix-state-active:border-b-neutral-600/60 radix-state-active:border-b-4 border-b-4 border-transparent py-2 px-4 mb-3 text-slate-200 w-full md:px-12";

  const tabContentStyle = "rounded-sm flex flex-col w-full divider";

  return (
    <Tabs.Root classNames={classNames("", "")} defaultValue="shelves" orientation="vertical">
      {/* tab nav labels */}
      <Tabs.List
        className={classNames("flex flex-row w-full justify-between flex-wrap", "md:flex-nowrap")}
        aria-label="tabs">
        {/* <Tabs.Trigger className={tabStyle} value="feed">
          Feed
        </Tabs.Trigger> */}
        <Tabs.Trigger className={tabStyle} value="shelves">
          Shelves
        </Tabs.Trigger>
        {/* <Tabs.Trigger className={tabStyle} value="reviews">
          Reviews
        </Tabs.Trigger> */}
        <Tabs.Trigger className={tabStyle} value="follows">
          Followers
        </Tabs.Trigger>
        <Tabs.Trigger className={tabStyle} value="following">
          Following
        </Tabs.Trigger>
        {/* <Tabs.Trigger className={tabStyle} value="about">
          About
        </Tabs.Trigger> */}
      </Tabs.List>

      {/* tabs */}
      <div className={classNames("max-w-[580px]")}>
        <Tabs.Content className={tabContentStyle} value="feed">
          <FeedTab />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="shelves">
          <ShelvesTab user={props.user} />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="follows">
          <Followers followers={props.followers} />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="following">
          <Following
            following={props.following}
            user={props.user}
            currentUser={props.currentUser}
          />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="reviews">
          <ReviewsTab />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="about">
          <AboutTab />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
