import clsx from "clsx";

export default function Column({ children, col = 6 }) {
    return <div className={clsx(`col col--${col}`)}>{children}</div>;
}
