class Likes {
  constructor() {
    this.link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kxae2Gp0ds1349VULsHW/likes';
  }

  updateLikes = async (index) => {
    await fetch(this.link, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: index,
      }),
    });
    this.getLikes();
  };

  getLikes = async () => {
    const response = await fetch(this.link);
    const data = await response.json();
    data.forEach((data) => {
      const likeCounter = document.querySelector(`[data-id='${data.item_id}']`);
      likeCounter.innerHTML = `${data.likes} Likes`;
    });
  }
}

export default Likes;