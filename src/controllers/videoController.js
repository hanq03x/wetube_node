export const trending = (req, res) => res.send("Home Page Videos");
export const watch = (req, res) => {
  console.log(req.params);
  res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const deleteVid = (req, res) => {
  res.send("Delete");
};
export const upload = (req, res) => res.send("Upload");