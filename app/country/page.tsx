import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Country()
{
    return(
        <>
        <Navbar />
        <h1>Country Page</h1>
        <ul>
                <li>
                    <Link href="/country/pakistan">Pakistan</Link>
                </li>
                <li>
                    <Link href="/country/japan">Japan</Link>
                </li>
                <li>
                    <Link href="/country/china">China</Link>
                </li>
                <li>
                    <Link href="/country/canada">Canada</Link>
                </li>
                <li>
                    <Link href="/country/usa">USA</Link>
                </li>
            </ul>
        </>
    )
}