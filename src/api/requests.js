import axios from 'axios';

export default async function getLink(linkURL, link) {
  //https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
  try {
    const linkFormatter = `${linkURL}?url=${link}`;
    const res = await axios.get(linkFormatter, {
      headers: {
        Accept: 'application/json',
      },
    });
    return res;
  } catch (e) {
    console.log(`${e} During fetching the Links`);
  }
}
 