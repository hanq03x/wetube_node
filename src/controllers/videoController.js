const fakeUser = {
  username: "hanqpark",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("Search");
export const deleteVid = (req, res) => res.send("Delete");
export const upload = (req, res) => res.send("Upload");
