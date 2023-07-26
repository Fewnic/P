function insertHTML() {
  var htmlCode = `
 <!-- HTML structure for the post container -->
<div id="postContainer"></div>

<!-- "Show More" button -->
<div style="width: 100%;text-align: center;">
<button style="position: relative;padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 10px;border: transparent;" id="showMoreBtn">Show More</button></div>
<style>
       
        .post-container {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            max-width: 400px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            text-align: center;
            
        }
       .post-container > img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .post-container > h2 {
            margin-top: 10px;
            color: #333;
        }
       .post-container > p {
            color: #777;
        }
        .post-container > a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 10px;
        }
    </style>



  `;

  document.write(htmlCode);
}

insertHTML();



// Function to display posts
function displayPosts(startIndex, numPosts) {
  const postContainer = document.getElementById("postContainer");
  for (let i = startIndex; i < startIndex + numPosts; i++) {
    if (i >= posts.length) {
      // Hide the "Show More" button when there are no more posts
      document.getElementById("showMoreBtn").style.display = "none";
      break;
    }

    const post = posts[i];
    const postElement = document.createElement("div");
    postElement.innerHTML = `
    <div class="post-container">
        <img src="${post.image}" alt="${post.title}">
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        
        <a class="audio-link" href="${post.download}">Download</a>
    </div>
    `;
    postContainer.appendChild(postElement);
  }
}

// Number of posts to load initially
const initialPostsCount = 10;
// Number of additional posts to load on each "Show More" button click
const postsPerLoad = 5;

// Load initial posts
displayPosts(0, initialPostsCount);

// "Show More" button click event
document.getElementById("showMoreBtn").addEventListener("click", function () {
  const currentPostsCount = document.querySelectorAll("#postContainer > div").length;
  displayPosts(currentPostsCount, postsPerLoad);
});
