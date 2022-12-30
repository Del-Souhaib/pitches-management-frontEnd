import '../styles/admin/style.css'
import 'antd/dist/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "fontawesome-4.7/css/font-awesome.min.css"
import Script from "next/script";
import JsFiles from "../components/parts/packages/jsFiles";
// import owlCursorScript from "../public/js/owl.carousel.min";
// import mainScript from "../public/js/main"
// import jqueryMagnificScript from "../public/js/jquery.magnific-popup.min"
// import mixitupScript from "../public/js/mixitup.min"
// import jquerySlicknavScript from "../public/js/jquery.slicknav"
// import bootstrapScript from "../public/js/jquery.slicknav"

function MyApp({Component, pageProps}) {
    return (
        <>

            <Component {...pageProps} />

        </>
    )
}

export default MyApp
