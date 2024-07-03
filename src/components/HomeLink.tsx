import Link from "next/link";
import s from "./link.module.css";

const HomeLink = () => {
    return (
        <div className={s.container}>
            <Link href="/">Home page</Link>
        </div>
    )
}

export default HomeLink;