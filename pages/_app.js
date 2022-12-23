import '../styles/admin/style.css'
import 'antd/dist/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "fontawesome-4.7/css/font-awesome.min.css"
import Script from "next/script";
// import owlCursorScript from "../public/js/owl.carousel.min";
// import mainScript from "../public/js/main"
import jqueryScript from "../public/js/jquery-3.3.1.min"
import jqueryMagnificScript from "../public/js/jquery.magnific-popup.min"
import mixitupScript from "../public/js/mixitup.min"
import jquerySlicknavScript from "../public/js/jquery.slicknav"
import bootstrapScript from "../public/js/jquery.slicknav"

function MyApp({ Component, pageProps }) {
  return(
  <>
    <Script src={jqueryScript} onLoad="1" onError="error1"/>
    <Script src={bootstrapScript}  onLoad="2" onError="error2" />
    <Script src={jqueryMagnificScript}  onLoad="3" onError="error6" />
    <Script src={mixitupScript}   onLoad="4" onError="error7"/>
    <Script src={jquerySlicknavScript}  onLoad="5" onError="error5" />
    {/*<Script src={owlCursorScript}  onLoad="6" onError="error6" />*/}
    {/*<Script src={mainScript}  onLoad="7" onError="error7" />*/}

    <Component {...pageProps} />

  </>
  )
}

export default MyApp
