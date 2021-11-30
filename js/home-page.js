let baseUrl = `https://lekseroggreier.com/wp-json/wp/v2/posts`;
const latestPost = document.querySelector("#latest-post");

async function loadPosts(url) {
  const res = await fetch(url);
  const posts = await res.json();
  latestPost.innerHTML += `
  <a href="" style="background-image: url('')>
  <h3>${posts[0].slug}<h3>
  <p>date: ${posts[0].date}</p>
  </a>
  `;

  console.log(posts[0]);
}

loadPosts(baseUrl);

// console.log(posts[0]["_links"]["wp:featuredmedia"][0].href
