import React from "react";
import NavLink from "./NavLink";
import UserLink from "./UserLink";


export default function Links() {

    const LINKS = [
        {
            text: "About us",
            href: "#",
            //   component: AboutUsContent,
        },
        {
            text: "Pricing",
            href: "#",
            //   component: PricingContent,
        },
        {
            text: "Careers",
            href: "#",
            //   component: CareersContent,
        },
        // {
        //   text: "Documentation",
        //   href: "#",
        // },
    ];

    return (
        <div className="flex items-center gap-6">
            {LINKS.map((l) => (
                <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
                    {l.text}
                </NavLink>
            ))}
        </div>
    );
};
