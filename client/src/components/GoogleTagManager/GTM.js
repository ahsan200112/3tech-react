import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";  // Updated import
import { useLocation } from "react-router-dom";

const GTM_ID = "GTM-TKSNBVWD";
//const GTM_ID = "GTM-NVLTKMN2";

const GTM = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("Pageview pushed:", location.pathname);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'pageview',
            page: location.pathname,
        });
    }, [location]);

    return (
        <>
            <Helmet>
                {/* GTM Script in <head> */}
                <script>
                    {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[]; 
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'}); 
              var f=d.getElementsByTagName(s)[0], 
              j=d.createElement(s), 
              dl=l!='dataLayer'?'&l='+l:''; 
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
                </script>

                {/* GTM noscript for users without JavaScript */}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe
                      src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                      height="0"
                      width="0"
                      style="display:none; visibility:hidden"
                      title="GTM"
                    ></iframe>`,
                    }}
                />
            </Helmet>
        </>
    );
};

export default GTM;
