import React from 'react'

const LinkArea = () => {
  const FOOTER_DATA = [
  {
    title: "Company",
    links: ["About", "Premium", "Blog", "Affiliate Program", "Get Coupon"],
  },
  {
    title: "Order & Purchases",
    links: ["Order Status", "Track Your Order", "Purchase History", "Returns & Refunds", "Payment Methods"],
  },
  {
    title: "Support & Services",
    links: ["Contact Support", "FAQs", "Service Centers", "Warranty Information", "Product Manuals"],
  },
  {
    title: "Partnerships",
    links: [" Partner With Us", "Become a supplier", "Affliate Program", "Colloboration Opportunities", "Sponsor Requests"],
  },
  {
    title: "Payment Options",
    links: ["Credit & Debit Cards","PayPal","Bank Transfers","Installment Plans","Gift Cards"],
  },
  {
    title: "Rewards",
    links: ["Reward Points","Referral Program","VIP Membership","Exclusive Offers","Redeem Rewards"],
  },
  {
    title: "Trade Assurance",
    links: ["What is Trade Assurance?","How it Works","Buyers Protection","Sellers Guarantee","FAQS"],
  },
  {
    title: "Sell on Flipkart",
    links: ["Seller Registration","HOw to Sell","Seller Policies","Seller Resources","Seller Support"],
  },
   {
    title: "Get Support",
    links: ["Contact Us","Help Center","Community Forums","Technical Support","Live Chat"],
  },
];

  return (
     <div className="grid flex-1 grid-cols-2 gap-6 md:gap-8 xl:grid-cols-3 w-full">
          {FOOTER_DATA.map((section) => (
            <div key={section.title}>
              <h6 className="mb-4 text-sm font-semibold uppercase text-gray-900">
                {section.title}
              </h6>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                  <a
                    href="#"
                    title=""
                    className="text-gray-500 hover:text-gray-900 "
                  >
                    {" "}
                    {link}{" "}
                  </a>
                </li>
              ))}
              </ul>
            </div>
          ))}  
          </div>
  )
}

export default LinkArea