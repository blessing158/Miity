let posts = [];

function createPost() {
  const input = document.getElementById("postInput");

  if (input.value === "") return;

  const post = {
    text: input.value,
    likes: 0,
    dislikes: 0
  };

  posts.unshift(post);
  input.value = "";

  renderPosts();
}

function renderPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach((post, index) => {

    const div = document.createElement("div");
    div.className = "post";

    div.innerHTML = `
      <p>${post.text}</p>

      <div class="actions">
        <button class="like" onclick="likePost(${index})">
          👍 Like (${post.likes})
        </button>

        <button class="dislike" onclick="dislikePost(${index})">
          👎 Dislike (${post.dislikes})
        </button>
      </div>
    `;

    feed.appendChild(div);
  });
}

function likePost(index) {
  posts[index].likes++;
  renderPosts();
}

function dislikePost(index) {
  posts[index].dislikes++;
  renderPosts();
}
