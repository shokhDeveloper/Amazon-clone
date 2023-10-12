import { useDispatch, useSelector } from "react-redux";
import {
  setNested,
  setNestedBack,
  setNestedType,
} from "../../Settings/redux/slice";
import { SidebarRoute } from "./SidebarRoute";

export const SidebarNested = () => {
  const { nestedType } = useSelector(({ Reducer }) => Reducer);
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(setNestedBack(false));
    setTimeout(() => {
      dispatch(setNestedType(null));
      dispatch(setNested(false));
    }, 500);
  };
  return (
    <>
      <div className="sidebar-back" onClick={handleCloseSidebar}>
        <button className="border-transparent">Main menu</button>
      </div>
      {nestedType === "music" ? (
        <>
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Amazon music Unlimited"}
            title={"Stream Music"}
            type={true}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Free Streaming Music"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Podcasts"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Open Web Player"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Open Web Player"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Download the app"}
            title={null}
            type={false}
          />
        </>
      ) : nestedType === "books" ? (
        <>
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle Kids"}
            type={true}
            title={"Kindle E-Readers"}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle Paperwhite Kids"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kids Oasis"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle Scribe"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Accessories"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"See all Kindle E-Readers"}
            type={false}
          />
          <hr />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle Books"}
            type={true}
            title={"Kindle Store"}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle Unlimited"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Prime Reading"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle Kindle Vella"}
            type={false}
          />
          <hr />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Free Kindle Reading Apps"}
            type={true}
            title={"App & Resources"}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Kindle for web"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Manage Your Content and Devices"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Trade in"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Trade in"}
            type={false}
          />
        </>
      ) : nestedType === "appstore" ? (
        <>
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"All Apps and Games"}
            type={true}
            title={"Amazon Appstore"}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Games"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Amazon Coins"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Download Amazon Appstore"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Amazon Apps"}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Your Apps and Subscriptions"}
            type={false}
          />
        </>
      ) : nestedType === "electronics" ? (
        <>
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle Kids"}
          type={true}
          title={"Kindle E-Readers"}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle Paperwhite Kids"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kids Oasis"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle Scribe"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Accessories"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"See all Kindle E-Readers"}
          type={false}
        />
        <hr />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle Books"}
          type={true}
          title={"Kindle Store"}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle Unlimited"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Prime Reading"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle Kindle Vella"}
          type={false}
        />
        <hr />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Free Kindle Reading Apps"}
          type={true}
          title={"App & Resources"}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Kindle for web"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Manage Your Content and Devices"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Trade in"}
          type={false}
        />
        <SidebarRoute
          defaultRoute={false}
          path={null}
          text={"Trade in"}
          type={false}
        />
      </>
      ): nestedType === "computer" ? (
        <>
        <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Amazon music Unlimited"}
            title={"Stream Music"}
            type={true}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Free Streaming Music"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Podcasts"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Open Web Player"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Open Web Player"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Download the app"}
            title={null}
            type={false}
          />
        </>
      ): nestedType === "autoMative" ? (
        <>
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Amazon music Unlimited"}
            title={"Stream Music"}
            type={true}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Free Streaming Music"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Podcasts"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Open Web Player"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Open Web Player"}
            title={null}
            type={false}
          />
          <SidebarRoute
            defaultRoute={false}
            path={null}
            text={"Download the app"}
            title={null}
            type={false}
          />
        </>
      ): null}
    </>
  );
};
