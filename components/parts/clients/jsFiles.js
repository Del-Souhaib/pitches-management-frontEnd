
// import Script from 'next/script'
// import mainScript from "owl.carousel/dist/owl.carousel"
// import owlCursor from "owl.carousel/dist/owl.carousel"

export default function jsFiles(){

    return (
        <>
            <Script src="https://code.jquery.com/jquery-3.4.1.min.js"/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"/>
            <Script src="/lib/wow/wow.min.js"/>
            <Script src="/lib/easing/easing.min.js"/>
            <Script src="/lib/waypoints/waypoints.min.js"/>
            <Script src="/lib/counterup/counterup.min.js"/>
            <Script src="/lib/owlcarousel/owl.carousel.min.js"/>
            <Script src="/lib/tempusdominus/js/moment.min.js"/>
            <Script src="/lib/tempusdominus/js/moment-timezone.min.js"/>
            <Script src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"/>

            <Script src="/js/main.js"/>



        </>
    )
}