export default async function getArticle(title){

    const url = `https://newsapi.org/v2/everything?q=${title}&from=2023-05-16&to=2023-05-16&sortBy=popularity&pageSize=1&apiKey=${process.env.API_KEY}`

    const res = await fetch(url);
    const data = await res.json();

    return data;
}