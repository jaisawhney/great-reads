import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import ShelvesTab from "./ShelvesTab";
import FeedTab from "./FeedTab";
import ReviewsTab from "./ReviewsTab";
import AboutTab from "./AboutTab";

export default function Experimenting() {
  const tabStyle = "radix-state-active:bg-teal-900/90 py-2 px-4 text-slate-200 w-full md:px-12";
  // radix-state-active:border-white/40 border-b-2 border-transparent 

  const tabContentStyle = "bg-teal-500/20 rounded-sm flex flex-col w-full divider";

    return (
        <Tabs.Root classNames={classNames("","")} defaultValue="shelves" orientation="vertical">

          {/* tab nav labels */}
            <Tabs.List className={classNames("flex flex-row w-full bg-white/30 justify-between", "")} aria-label="tabs">
                <Tabs.Trigger className={tabStyle} value="feed">Feed</Tabs.Trigger>
                <Tabs.Trigger className={tabStyle} value="shelves">Shelves</Tabs.Trigger>
                <Tabs.Trigger className={tabStyle} value="reviews">Reviews</Tabs.Trigger>
                <Tabs.Trigger className={tabStyle} value="about">About</Tabs.Trigger>
            </Tabs.List>

            {/* tabs */}
            <Tabs.Content className={tabContentStyle} value="feed">
                <FeedTab />
            </Tabs.Content>
            <Tabs.Content className={tabContentStyle} value="shelves">
                <ShelvesTab />
            </Tabs.Content>
            <Tabs.Content className={tabContentStyle} value="reviews">
                <ReviewsTab />
            </Tabs.Content>
            <Tabs.Content className={tabContentStyle} value="about">
                <AboutTab />
            </Tabs.Content>
        </Tabs.Root>
    );
}
