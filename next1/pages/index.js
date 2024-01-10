import "reflect-metadata";
import ExternalPage from "next2/pages/index";

let Page = ExternalPage;
Page.getInitialProps = ExternalPage.getInitialProps;

export default Page;
