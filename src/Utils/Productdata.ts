async function FetchData() {
    const fetchData = await fetch("https://sanity-nextjs-application.vercel.app/api/hackathon/template7");
let data = await fetchData.json();
return data
}