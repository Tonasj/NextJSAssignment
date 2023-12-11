export async function fetchData() {
    const fetchedData = (await fetch('https://api.porssisahko.net/v1/latest-prices.json')).json();
    return fetchedData;
};