import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import ShelvesTab from "./ShelvesTab";
import FeedTab from "./FeedTab";
import ReviewsTab from "./ReviewsTab";
import AboutTab from "./AboutTab";

export default function Experimenting() {
  const tabStyle =
    "radix-state-active:border-teal-100/40 radix-state-active:border-b-4 b-bottom-transparent py-2 px-4 mb-3 text-slate-200 w-full md:px-12";
  // radix-state-active:border-white/40 border-b-2 border-transparent

  const tabContentStyle = " rounded-sm flex flex-col w-full divider";

  return (
    <Tabs.Root classNames={classNames("", "")} defaultValue="shelves" orientation="vertical">
      {/* tab nav labels */}
      <Tabs.List
        className={classNames("flex flex-row max-w-[580px] justify-between", "")}
        aria-label="tabs">
        <Tabs.Trigger className={tabStyle} value="feed">
          Feed
        </Tabs.Trigger>
        <Tabs.Trigger className={tabStyle} value="shelves">
          Shelves
        </Tabs.Trigger>
        <Tabs.Trigger className={tabStyle} value="reviews">
          Reviews
        </Tabs.Trigger>
        <Tabs.Trigger className={tabStyle} value="follows">
          Follows Me
        </Tabs.Trigger>
        <Tabs.Trigger className={tabStyle} value="following">
          Following
        </Tabs.Trigger>
        <Tabs.Trigger className={tabStyle} value="about">
          About
        </Tabs.Trigger>
      </Tabs.List>

      {/* tabs */}
      <div className={classNames("max-w-[580px]")}>
        <Tabs.Content className={tabContentStyle} value="feed">
          <FeedTab />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="shelves">
          <ShelvesTab />
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="follows">
          <h1>Follows me</h1>
        </Tabs.Content>
        <Tabs.Content className={tabContentStyle} value="following">
          <h1>I am following</h1>
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
