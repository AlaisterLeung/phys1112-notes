import clsx from "clsx";

export default function Column({ children, size = 6 }) {
    return <div className={clsx(`col col--${size}`)}>{children}</div>;
}
