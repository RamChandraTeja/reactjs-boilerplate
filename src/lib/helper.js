export const StringToSlug = string => { return string.toLowerCase().replace(/[\s,'’“”;:."|]+/g, '-') };

export const generate8DigitCode = () => { return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('') };

export const formatDateTime = (str) => {
    if (!str) return;
    const utcDateTime = new Date(str),
        options = {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
        },
        localDateTime = utcDateTime.toLocaleString(undefined, options);

    const date = new Date(localDateTime).getDate(),
        month = new Date(localDateTime).getMonth() + 1,
        year = new Date(localDateTime).getFullYear(),
        minutes = new Date(localDateTime).getMinutes();
    let hours = new Date(localDateTime).getHours(),
        timezone = new Date(localDateTime).toLocaleString('en-US', { timeZoneName: 'short' }).split(' ')[2];

    if (hours >= 12) {
        timezone = 'PM';
        hours = hours - 12;
    } else { timezone = 'AM' };

    return `${pad(date)}/${pad(month)}/${year} ${pad(hours == '00' ? '12' : hours)}:${pad(minutes)} ${timezone}`;
}; const pad = e => { return e.toString().padStart(2, 0) };

export const responseMaker = ({ success, response }) => { return { success, response } };