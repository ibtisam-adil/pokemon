class Comments {
  constructor() {
    this.commentsLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kxae2Gp0ds1349VULsHW/comments';
  }

  updateComments = async (index, name, commentDesc) => {
    await fetch(this.commentsLink, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: index,
        username: name,
        comment: commentDesc,
      }),
    });
    this.getComments(index);
  };

  getComments = async (id) => {
    const url = `${this.commentsLink}?item_id=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const allComments = document.querySelector('.all-comments');

    if (!data.error) {
      allComments.innerHTML = data.map((data) => (
        `
        <div class="comment">
          <div class="name-com">
            <div class="comment-name">
                <p class="c-name">${data.username} :</p>
            </div>
            <div class="comment-detail">
              <p class="c-description">${data.comment}</p>
            </div>
          </div>
          <div class="date">${data.creation_date}</div> 
          <div class="comment-line"></div>
        </div>`)).join('');
    } else {
      allComments.innerHTML = '<p class="no-comments">There are no comments</p>';
    }
  }
}

export default Comments;