import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Card from "../components/Cards";
import '../landing.css';


export default function Landing() {
    return (
        <>
            <h1>TenantVoice</h1>

            <div className="hero-section">
            </div>

            < Card
                title="Our Mission"
                details="TenantVoice aims to enhance public housing by providing a platform for tenants to report issues and collaborate with neighbors, promoting accountability and empowering advocacy. "
            />

            < Card
                title="The Problem"
                details="Public housing residents often endure unresolved maintenance issues that degrade living conditions and pose health risks. Without a platform to unite and voice their concerns, tenants struggle to communicate and take collective action to demand improvements. "
            />

            < Card
                title="What You Can Do"
                details={
                    <ul>
                        <li><strong>Report:</strong> Post about housing issues, include the category of the problem and how long it's been going on for.</li>
                        <li><strong>Magnitude:</strong>  View data visuals detailing housing issues locally and across NYCHA.</li>
                        <li><strong>Community:</strong> Two separate feeds show posts from your own complex and from all NYCHA residents.</li>
                    </ul>
                }


            />
        </>
    )
};