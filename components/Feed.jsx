const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit", // other values: "lookup"
    numeric: "auto", // other values: "auto"
    style: "long", // other values: "short" or "narrow"
});

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const MONTH = 27 * DAY;
const YEAR = 365 * DAY;

function getTimeUnit(delta) {
    let d = Math.abs(delta);
    if (d > YEAR) {
        return "year";
    } else if (d > MONTH) {
        return "month"
    } else if (d > DAY) {
        return "day";
    } else if (d > MINUTE) {
        return "minute";
    } else {
        return "second";
    }
}

function scaleTime(delta) {
    const d = Math.abs(delta);
    if (d >= YEAR) {
        return delta / YEAR;
    } else if (d >= MONTH) {
        return delta / MONTH;
    } else if (d >= DAY) {
        return delta / DAY;
    } else if (d >= MINUTE) {
        return delta / MINUTE;
    } else {
        return delta / SECOND;
    }
}

const now = new Date().getTime();

function formatTime(date) {
    return rtf.format(Math.round(scaleTime(date - now)), getTimeUnit(date - now))
}

export default function Feed(props) {
    
    const f = (props.feed ?? []).map(({ title, description, href, date }) => (
        <a href={href} key={title}>
                <p>{title}</p>
                <p>{description}</p>
                <time>{formatTime(date)}</time>
        </a>
    ))
    return (
        <div class={props.class +  " feed"}>
            {f}
        </div>
    )
    
}