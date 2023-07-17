let repostories = document.querySelector(".repostories");
let api = "https://api.github.com/users/sodiqovsodiqjon/repos";

let repostoryTwooBox = document.querySelector(".repostory-twoo-box");

let profileBox = document.querySelector(".profile-box");
let apiUser = "https://api.github.com/users/sodiqovsodiqjon";


let tabTree = document.querySelector(".tab-tree");

let followers = "https://api.github.com/users/sodiqovsodiqjon/followers"

fetch(followers)
  .then((res) => res.json())
  .then((data) => {
    tabTree.innerHTML = data
      .map(
        (item) => `
        <div>
        <img class="tab-tree-img" src="${item.avatar_url}" alt="">
        <b>${item.login}</b>
        <p>${item.url}</p>
      </div>  
      

    `
      )
      .join("");
  })
  .catch((err) => {
    console.log(err);
  });

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    repostoryTwooBox.innerHTML = data
      .map(
        (item) => `



    <span class="repo-twoo-box">
              <a href="#"><p>${item.html_url}</p></a>
<hr>
                                    </span>

                                    <div class="repo-twoo-for">
                                        <span class="repo-twoo-box2">
                                            <p class="repo-twoo-text">JavaScript</p>
                                            <p class="repo-twoo-text2">Update 3 days ago</p>
                                        </span>
                                        <span>
                                            <button class="repo-twoo-btn">stars</button>
                                     </span>
                                    </div>
                                    <hr>


    `
      )
      .join("");
  })
  .catch((err) => {
    console.log(err);
  });

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    repostories.innerHTML = data
      .map(
        (item) => `
    <span class="repostories-box"> <a href="#">
    <p class="repo-text">${item.html_url}</p>
</a>
<button type="button" class=" repo-btn ">Public</button>
</span>

<span class="repostories-box"> <a href="#">
<p class="repo-text">${item.html_url}</p>
</a>
<button type="button" class=" repo-btn ">Public</button>
</span>


    `
      )
      .join("");
  })
  .catch((err) => {
    console.log(err);
  });
