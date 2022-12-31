import Script from "next/script";


export default function JsFiles(){
    return (
        <>
            <Script src="/js/jquery-3.3.1.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>

            <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/easing/easing.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/waypoints/waypoints.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/counterup/counterup.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/tempusdominus/js/moment.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/tempusdominus/js/moment-timezone.min.js" strategy="beforeInteractive"/>
            <Script src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" strategy="beforeInteractive"/>


        </>
    )
}