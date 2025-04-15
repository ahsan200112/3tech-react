import React from "react";
//import { Helmet } from "react-helmet";
import { HelmetProvider, Helmet } from "react-helmet-async";  // Updated import

// Replace with your GTM ID
const GTM_ID = "GTM-TKSNBVWD";

const GTM = () => {
    return (
        <>
            <HelmetProvider>
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
            </HelmetProvider>
        </>
    );
};

export default GTM;
