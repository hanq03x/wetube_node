const fakeUser = {
  username: "hanqpark",
  loggedIn: false,
};
let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 59,
    id: 0,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 59,
    id: 1,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 min ago",
    views: 1,
    id: 2,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos, fakeUser: fakeUser });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id].title = title;
  res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const deleteVid = (req, res) => res.send("Delete");
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length,
  };
  videos.push(newVideo);
  res.redirect("/");
};
