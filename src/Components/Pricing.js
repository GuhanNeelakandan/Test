import React, { useContext } from 'react'
import './pricing.css'
import UserContext from '../Context/UserContext';

function Pricing() {
  const user = useContext(UserContext)
  console.log(user)
    const pricingData = [
      {
        title: "Free",
        price: "$0",
        user: "Single User",
        storage: "5GB Storage",
        publicProject: "Unlimited Public Projects",
        access: "Community Access",
        privateProjects: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Free Subdomain",
        report: "Monthly Status Reports",
      },
      {
        title: "Plus",
        price: "$9",
        user: "5 User",
        storage: "5GB Storage",
        publicProject: "Unlimited Public Projects",
        access: "Community Access",
        privateProjects: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Free Subdomain",
        report: "Monthly Status Reports",
      },
      {
        title: "pro",
        price: "$17",
        user: "Unlimited User",
        storage: "5GB Storage",
        publicProject: "Unlimited Public Projects",
        access: "Community Access",
        privateProjects: "Unlimited Private Projects",
        support: "Dedicated Phone Support",
        subdomain: "Free Subdomain",
        report: "Monthly Status Reports",
      },
    ];
  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {/* <!-- Free Tier --> */}
      {
        pricingData.map((list)=>{
            return <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{list.title}</h5>
                <h6 class="card-price text-center">{list.price}<span class="period">/month</span></h6>
                <hr/>
                <ul class="fa-ul">
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.title==="Free"?list.user:<b>{list.user}</b>}</li>
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.storage}</li>
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.publicProject}</li>
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.access}</li>
                        <li class={list.title==='Free'?"text-muted":''}><span class="fa-li"><i class={list.title==='Free'?"fa fa-times":"fa fa-check"}></i></span>{list.privateProjects}</li>
                        <li class={list.title==='Free'?"text-muted":''}><span class="fa-li"><i class={list.title==='Free'?"fa fa-times":"fa fa-check"}></i></span>{list.support}</li>
                        <li class={list.title==='pro'?"":'text-muted'}><span class="fa-li"><i class={list.title==='pro'?"fa fa-check":"fa fa-times"}></i></span>{list.title==="pro"?<b>Unlimited</b>:''} {list.subdomain}
                        </li>
                        <li class={list.title==='pro'?"":'text-muted'}><span class="fa-li"><i class={list.title==='pro'?"fa fa-check":"fa fa-times"}></i></span>{list.report}</li>
                      </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
        })
      }
      
     
    </div>
  </div>
</section>
  )
}

export default Pricing