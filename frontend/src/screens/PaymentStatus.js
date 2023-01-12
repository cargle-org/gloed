import React, { useEffect, useState }  from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import loader from "../images/Spinner.gif"
import { Icon } from "@iconify/react";

function PaymentStatus() {
const [
     paymentStatus,
     setPaymentStatus,
] =
     useState(
         null
     );
   function useQuery() {
  const { search } = useLocation();
  

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

 let query = useQuery();
 let ref= query.get("tx_ref"),
    id= query.get("transaction_id");


      useEffect(() => {
           axios.get(
                `https://gloed-api.onrender.com/api/utils/session/verify-payment-unauth?tx_ref=${ref}&transaction_id=${id}`
           )
                .then(
                     (
                          response
                     ) => {
                          console.log(
                               response
                          );
                          if(response.data.success === true){
                            setPaymentStatus(true)
                          } else{
                            setPaymentStatus(false)
                          };
                          setTimeout(() => {
                            window.location.href =
                                 "http://localhost:3000/";
                          }, 5000)
                     }
                )
                .catch(
                     (
                          err
                     ) =>
                          console.log(
                               err
                          )
                );
      }, [ref, id]);

  return (
       <div className="payment-status-container">
            {paymentStatus ===
                 null && (
                 <img
                      src={
                           loader
                      }
                      alt="loading"
                 />
            )}
            {paymentStatus ===
                 true && (
                 <>
                      <Icon
                           icon="mdi:success-circle"
                           color="#4588ec"
                           width="80"
                      />
                      <h3>
                           {" "}
                           Payment
                           Successful.
                      </h3>
                      <small>
                           Redirecting
                           you
                           back
                           to{" "}
                           <span>
                                Gloed.co
                           </span>
                      </small>
                 </>
            )}
            {paymentStatus ===
                 false && (
                 <>
                      <Icon
                           icon="typcn:backspace"
                           color="red"
                           width="80"
                      />
                      <h3>
                           {" "}
                           Payment
                           Failed.
                      </h3>
                      <small>
                           Redirecting
                           you
                           back
                           to{" "}
                           <span>
                                Gloed.co
                           </span>
                      </small>
                 </>
            )}
       </div>
  );
}

export default PaymentStatus